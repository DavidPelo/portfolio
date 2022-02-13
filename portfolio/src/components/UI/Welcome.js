import React from "react";
import Container from "./Container";

function Welcome({ message }) {
  return (
    <Container class="courseContainer">
      <div className="course">
        <h2>{message}</h2>
      </div>
    </Container>
  );
}

export default Welcome;
