import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDetails = movies.map(({ title, time, genres }) => {
    const movieType = genres.map((type, index) => <li key={index}>{type}</li>);

    return (
      <div key={title}>
        <p>{title}</p>
        <p>{time}</p>
        <ul>{movieType}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDetails}
    </div>
  );
}

export default Movies;
