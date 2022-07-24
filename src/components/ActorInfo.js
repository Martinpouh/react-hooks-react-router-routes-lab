import React from "react";

const ActorInfo = ({ person }) =>
  person.map(({ name, movies }) => {
    const personMovies = movies.map((movie) => <li key={movie}>{movie}</li>);

    return (
      <div key={name}>
        <p>{name}</p>
        <ul>{personMovies}</ul>
      </div>
    );
  });

export default ActorInfo;