import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { handleAddQuestion } from "../actions/questions";
import { NavLink, Link, withRouter } from 'react-router-dom';

function NewQuestion({history}) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    optionOne: "",
    optionTwo: "",
    toHome: false,
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { optionOne, optionTwo } = state;
    // const { dispatch } = this.props;

    e.preventDefault();

    dispatch(handleAddQuestion(optionOne, optionTwo));
		history.push('/')
    setState({
      optionOne: "",
      optionTwo: "",
      toHome: true,
    });
  };

  const { optionOne, optionTwo, toHome } = state;

  if (toHome === true) return <Redirect to="/" />;

  return (
    <>
      <h2 className="text-center my-3">
        <small>Would You Rather...</small>
      </h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card bg="light" className="m-3 text-center">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="optionOne">
                  <Form.Label>Choice One</Form.Label>
                  <Form.Control
                    type="text"
                    name="optionOne"
                    value={optionOne}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <h3>
                  <small>OR</small>
                </h3>
                <Form.Group controlId="optionTwo">
                  <Form.Label>Choice Two</Form.Label>
                  <Form.Control
                    type="text"
                    name="optionTwo"
                    value={optionTwo}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="outline-dark"
                  disabled={optionOne === "" || optionTwo === ""}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default withRouter(NewQuestion);
