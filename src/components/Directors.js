
import React from "react";
import { directors } from "../data";
import PersonDetails from "./ActorInfo";
function Directors() {
  return (
    <>
      <h1>Directors Page</h1>
      <PersonDetails person={directors} />
    </>
  );
}

export default Directors;