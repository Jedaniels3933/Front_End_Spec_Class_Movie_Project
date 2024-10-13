import React, { useContext } from "react";
import { Navbar, Nav, Button, Container, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { StarFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  // selecting the state we want to use, and then grabbing the variable(s) from that state
  const { totalSize } = useSelector((state) => state.watchList);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary d-flex flex-row align-items-center justify-content-between px-3"
    >
      <Navbar.Brand onClick={() => navigate("/")} >Navbar</Navbar.Brand>
      <Nav className="d-flex flex-row align-items-center justify-content-between">
        {/* conditional rendering with &&
            if left side of && exists
            then display element on right side of &&
        */}
        {user.name && (
          <>
            <Container onClick={() => navigate("watch-list")}>
              <StarFill color="purple" />
              <Badge bg="secondary">{totalSize}</Badge>
            </Container>
            <h6 className="mx-3">User: {user.name}</h6>
          </>
        )}
        <Button variant="outline-success" onClick={() => navigate("login")}>
          Login
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavBar;





