import React from 'react';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Avatar from './Avatar';

function BriefQuestion(props) {
	const questions = useSelector((state)=> state.questions)
	const users = useSelector((state)=> state.users)
	const question = questions[props.id];
	const questionx = question ? question : null;
	const author = question ? users[question.author] : null;

		const { optionOne, timestamp, id } = questionx;
		const { name, avatarURL } = author;

		return (
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card bg="light" className="m-3">
						<Card.Header>
							<Avatar avatarURL={avatarURL} className="mr-2" />
							{name} asks:
						</Card.Header>
						<Card.Body className="text-center">
							<Card.Text>{optionOne.text.slice(0, 50)}...?</Card.Text>
							<Link to={`/questions/${id}`}>
								<Button variant="outline-dark">View Question</Button>
							</Link>
						</Card.Body>
						
					</Card>
				</Col>
			</Row>
		);
	}

export default BriefQuestion;
