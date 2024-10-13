import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Form, Container, Button, Spinner } from "react-bootstrap";
import MovieData from "./MovieData";

const Search = () => {
  // our state to keep track of our search term
  const [searchQuery, setSearchQuery] = useState("");

  const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjc3ZGEwZTY5ZmRkYzllMWU1ZWI4OWM4ZDk4MzNlMSIsIm5iZiI6MTcyODQyOTM4Ni4xMTA3MjQsInN1YiI6IjY3MDQ4ZGEyNWMwMGEyZDQ0ZWJmZmJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x5idauP3edGXZapT1symZhHLOGRpSMB2w7ZQb8oz0F8";

  const fetchSearch = async () => {
    const responseSearch = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log(responseSearch.data.results[0])
    return responseSearch.data.results[0];    //always use .data to get the data from the API response
    
  };

  const { data: searchedMovie, 
    isLoading, 
    isError, 
    error, 
    refetch } 
    = useQuery({
    queryKey: ["movies"], // labels our query so react query can tell if we made the api call/have the data or not
    queryFn: fetchSearch, //function that makes API call
    enabled: false, // true = run query automatically (default), false do NOT run automatically
  });

//    useEffect(() => {
//     console.log("Query: " + searchQuery)},[searchQuery]);


  const handleSubmit = (event) => {
    event,preventDefault()
    refetch()
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3> error.message</h3>
  }

  return (
    <Container className="m-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formSearch">
          <Form.Label>Search</Form.Label>
          <Form.Control 
            autoComplete="off"
            type="text"
            placeholder="Enter Movie Title"
            value = {searchQuery} 
            onChange= { (event) => setSearchQuery(event.target.value)} //add an onChange event to update our searchQuery state

          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
{/* IF we have fetched our searched Movie Data , then display the MOvie Data component  */}
        {searchedMovie && <MovieData/> }

    </Container>
  );
};

export default Search;
