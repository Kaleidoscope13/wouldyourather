import React, { Fragment } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { reSetAuthedUser } from '../actions/authUser';
import Avatar from './Avatar';

function NavigationBar(props) {
	const users = useSelector((state)=> state.users)
	const dispatch = useDispatch()
	const authedUser = useSelector((state) => state.authedUser)

	const user = users[authedUser]

	// const { user, dispatch } = props;

	const handleLogout = () => {
		dispatch(reSetAuthedUser());
	};

	return (
		<>
			<Navbar expand="lg" bg="light" variant="light" className="my-3 border">
				<Navbar.Brand as={Link} to="/">
					<h2>
						<small>Would you rather</small>
					</h2>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link as={NavLink} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">
							Scoreboard
						</Nav.Link>
					</Nav>
					<Nav className="align-items-start">
						<Navbar.Text>{user.name}</Navbar.Text>
						<Avatar avatarURL={user.avatarURL} className="mx-3" />
						<Button
							variant="outline-dark"
							onClick={handleLogout}
							className="mt-3 mt-lg-0"
						>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}


export default NavigationBar;
