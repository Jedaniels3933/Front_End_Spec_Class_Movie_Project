import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import { deleteItem } from "../features/watchListSlice";

const WatchList = () => {
  // access data from our global redux store
  // useSelector lets us access our state by selecting which we want to access.  In this case, we only have a watchList state and we select it by passing a function (state) => state.THE_STATE_YOU_WANT_ACCESS_TO
  // the states you have access to will be in the reducers section of your store.js
  // on the left hand side const { ... }, the data inside {} is the specific property you want to access.  For here, you are referring to the properties you've set up inside initialState inside of your Slice file so you can access either watchList (the property) or totalItems
  const { watchList } = useSelector((state) => state.watchList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("clicked delete!")
    console.log(id)
    //to call our deleteItem reducer function we dispatch our deleteItem action like so:
    dispatch(deleteItem(id)) // we also pass our id as a payload
  }

  return (
    <Container>
      <NavBar />
      <Row className="p-3">
        {watchList.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.original_title} </Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Card.Link onClick={() => handleDelete(movie.id)}
                  className="btn btn-danger mt-3"
                >
                  Delete
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WatchList;
