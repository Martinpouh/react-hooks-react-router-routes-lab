import React from "react";
import { actors } from "../data";
import ActorInfo from "./ActorInfo";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <ActorInfo person={actors} />
    </div>
  );
}

export default Actors;