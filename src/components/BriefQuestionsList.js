import React from 'react';
import BriefQuestion from './BriefQuestion';

function BriefQuestionsList(props) {
	const { idsList, emptyListNote } = props;

	return (
		<>
			<h2 className="text-center my-3">
				<small>Would You Rather...</small>
			</h2>
			{idsList.length ? (
				idsList.map((id) => <BriefQuestion key={id} id={id} />)
			) : (
				<p className="text-center">{emptyListNote}</p>
			)}
		</>
	);
}

export default BriefQuestionsList;
