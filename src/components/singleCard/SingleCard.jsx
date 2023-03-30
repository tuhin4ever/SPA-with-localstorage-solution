import React from "react";

const SingleCard = ({movie}) => {
    // console.log(props);
    // const {movie} = props
  return (
    <div className="movie-card card text-center  col-md-5 mx-auto  mt-3">
      <div className="movie-poster w-25  m-auto">
        <img
          className="w-75"
          src={movie.poster}
        />
      </div>
      <h3>{movie.movieName}</h3>
      <p>{movie.description}</p>
      <div className="timeAndRating d-flex just justify-content-around">
        <p>watch Time : {movie.watchTime}</p>
        <p>Rating : {movie.imdbRating}</p>
      </div>
      <button className="btn btn-info w-75 m-auto">Book Now</button>
    </div>
  );
};

export default SingleCard;
