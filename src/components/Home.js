import React from 'react';
import { useSelector } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BriefQuestionsList from './BriefQuestionsList';

function Home() {
	const questions = useSelector((state) => state.questions)
	const users = useSelector((state) => state.users)
	const authedUser = useSelector((state) => state.authedUser)
	const answeredQuestionIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const unansweredQuestionIds = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
	// const { answeredQuestionIds, unansweredQuestionIds } = this.props;

	return (
		<>
			<Tabs>
				<Tab eventKey="unanswered" title="Unanswered Questions">
					<BriefQuestionsList
						idsList={unansweredQuestionIds}
						emptyListNote="No more Unswered Questions! Time to create some new ones! "
					/>
				</Tab>
				<Tab eventKey="answered" title="Answered Questions">
					<BriefQuestionsList
						idsList={answeredQuestionIds}
						emptyListNote="No Answered Questions yet! What are you waiting for???"
					/>
				</Tab>
			</Tabs>
		</>
	);
}


export default Home;

