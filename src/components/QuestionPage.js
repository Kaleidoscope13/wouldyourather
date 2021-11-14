import React, { Component, Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';

function QuestionPage(props) {
	const users = useSelector((state) => state.users)
	const authedUser = useSelector((state) => state.authedUser)
	const autherUserAnsweres = users[authedUser].answers;
	const id = props.match.params.id;
	const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;

	return (
		<>
			<h2 className="text-center my-3">
				<small>Would You Rather...</small>
			</h2>
			{answered ? <AnsweredQuestion id={id} /> : <UnansweredQuestion id={id} />}
		</>
	);
}



export default QuestionPage;
