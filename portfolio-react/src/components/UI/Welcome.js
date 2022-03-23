import React from "react";
import Container from "./Container";

function Welcome({ greeting, message }) {
  return (
    <Container class="greetingContainer">
      <h2>{greeting}</h2>
      <p>{message}</p>
    </Container>
  );
}

export default Welcome;
