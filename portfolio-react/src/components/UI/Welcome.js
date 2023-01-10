import React from "react";
import Container from "./Container";

function Welcome({ greeting, message, secondaryMessage }) {
  return (
    <Container class="greetingContainer">
      <h2 style={{"margin-bottom": "0.75rem"}}>{greeting}</h2>
      <p style={{"margin-bottom": "0.75rem"}}>{message}</p>
      {secondaryMessage && <p>{secondaryMessage}</p>}
    </Container>
  );
}

export default Welcome;
