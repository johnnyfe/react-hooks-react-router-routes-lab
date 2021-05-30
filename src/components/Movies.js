import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie)=>
    <div key={movie.title}>
      <li>{movie.title}</li>
      <li>{movie.time}</li>
      <ul>{movie.genres.map((genre)=>
      <li key={genre}>{genre}</li>)}</ul>
    </div>)}
  </div>;
}

export default Movies;
