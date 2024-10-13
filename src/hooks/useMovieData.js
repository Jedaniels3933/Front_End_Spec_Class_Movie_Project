import { useEffect, useState } from "react";
import axios from "axios";

export const useMovieData = () => {
  // state that will hold our movieData from our API call
  const [movieData, setMovieData] = useState({});

  const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjc3ZGEwZTY5ZmRkYzllMWU1ZWI4OWM4ZDk4MzNlMSIsIm5iZiI6MTcyODQyOTM4Ni4xMTA3MjQsInN1YiI6IjY3MDQ4ZGEyNWMwMGEyZDQ0ZWJmZmJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x5idauP3edGXZapT1symZhHLOGRpSMB2w7ZQb8oz0F8";

  useEffect(() => {
    const fetchData = async () => {
        //Math.random() - gives us a random number between 0 and 1
        // multiply it by whatever you want the highest number in the range to be
        // round it using Math.ceil 1-1000 (to round up!) or Math.floor 0-999 (to round down)
      const movieId = Math.ceil(Math.random() * 1000);
      // make our api call and store data in response variable
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        // modify our movieData state so it is equal to our response from the movie db API
        setMovieData(response.data);
      } catch (error) {
        console.log(error.message)
      }
    };
    fetchData();
  }, []);

  // when we call useMovieData() this is the data that we'll be accessing
  return { movieData };
};