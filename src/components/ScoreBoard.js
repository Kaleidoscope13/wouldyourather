import React from 'react';
import { useSelector } from 'react-redux';
import UserStats from './UserStats';

function ScoreBoard() {
	const users = useSelector((state) => state.users)
	const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
		const scoreA =
			Object.keys(users[idA].answers).length + users[idA].questions.length;
		const scoreB =
			Object.keys(users[idB].answers).length + users[idB].questions.length;

		return scoreB - scoreA;
	});
	const userIDs = sortedUserIDs


	return (
		<>
			<h2 className="text-center my-3">
				<small>ScoreBoard</small>
			</h2>
			{userIDs.map((id) => (
				<UserStats key={id} id={id} />
			))}
		</>
	);
}



export default ScoreBoard;

