import React, { useEffect, useState } from "react";
import SingleCard from "../singleCard/SingleCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <div className="movie-container row ">
        {movies.map((movie) => (
          <SingleCard key={movie.movieName} movie={movie}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
