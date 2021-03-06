import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setAuthedUser } from '../actions/authUser';

class Login extends Component {
	state = {
		errorMsg: ''
	};

	handleSubmit = (e) => {
		const userID = this.userID.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (userID !== '') {
			dispatch(setAuthedUser(userID));
		} else {
			this.setState({ errorMsg: 'You must choose a username' });
		}
	};

	render() {
		const { userNames } = this.props;
		const { errorMsg } = this.state;

		return (
			<Row className="justify-content-center align-items-center min-vh-100">
				<Col xs={12} md={4}>
					<Card bg="light" className="text-center">
						<Card.Header>Would You Rather</Card.Header>
						<Card.Body>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId="formGridState">
									<Form.Label>Username</Form.Label>
									{errorMsg ? (
										<p className="text-danger">{errorMsg}</p>
									) : null}

									<Form.Control
										as="select"
										ref={(id) => (this.userID = id)}
									>
										<option value="">Choose a Profile</option>
										{userNames.map((item) => (
											<option value={item.value} key={item.value}>
												{item.label}
											</option>
										))}
									</Form.Control>
								</Form.Group>

								<Button type="submit" variant="outline-dark">
									Sign In
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login);

// import React, { useState } from 'react';
// import { connect, useSelector, useDispatch } from 'react-redux';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { setAuthedUser } from '../actions/authUser';

// function Login() {
// 	const users = useSelector((state)=> state.users)

// 	const [state, setState] = useState(
// 		{
// 			errorMsg: ''
// 		}
// 	)
// 	const dispatch = useDispatch()
// 	const userNames = Object.keys(users).map((id) => ({
// 		value: id,
// 		label: users[id].name
// 	}))
// 	const handleSubmit = (e) => {
// 		const userID = this.userID.value;
// 		// const { dispatch } = this.props;

// 		e.preventDefault();

// 		if (userID !== '') {
// 			dispatch(setAuthedUser(userID));
// 		} else {
// 			setState({ errorMsg: 'You must choose a username' });
// 		}
// 	};

// 		// const { userNames } = this.props;
// 		const { errorMsg } = state;

// 		return (
// 			<Row className="justify-content-center align-items-center min-vh-100">
// 				<Col xs={12} md={4}>
// 					<Card bg="light" className="text-center">
// 						<Card.Header>Login</Card.Header>
// 						<Card.Body>
// 							<Form onSubmit={handleSubmit}>
// 								<Form.Group controlId="formGridState">
// 									<Form.Label>Username</Form.Label>
// 									{errorMsg ? (
// 										<p className="text-danger">{errorMsg}</p>
// 									) : null}

// 									<Form.Control
// 										as="select"
// 										ref={(id) => (this.userID = id)}
// 									>
// 										<option value="">Select a user</option>
// 										{userNames.map((item) => (
// 											<option value={item.value} key={item.value}>
// 												{item.label}
// 											</option>
// 										))}
// 									</Form.Control>
// 								</Form.Group>

// 								<Button type="submit" variant="outline-dark">
// 									Login
// 								</Button>
// 							</Form>
// 						</Card.Body>
// 					</Card>
// 				</Col>
// 			</Row>
// 		);
// 	}

// export default Login;
