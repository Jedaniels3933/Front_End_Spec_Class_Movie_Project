import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
  const [username, setUsername] = useState("");
  //grabbing our setUser function from context to modify our user data
  const { setUser } = useContext(UserContext);
  //react router dom function used to change page
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //stops refresh
    event.preventDefault();
    // modify our user state inside context
    setUser({ name: username, isLoggedIn: true})
    //navigate to our home page
    navigate('/')
  }

  return (
    <Container>
        <NavBar />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formLogin">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter login info"
            autoComplete="off"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
    </Container>
  );
};

export default Login;
