import React from "react";
import Container from "./Container";

function NavBar() {
  return (
    <Container class="nameContainer">
      <div className="name">
        <h1>David Pelo</h1>
      </div>
      <Container class="navLinkContainer">
        <div className="navLink">
          <p>projects</p>
        </div>
        <div className="navLink">
          <p>contact</p>
        </div>
      </Container>
    </Container>
  );
}

export default NavBar;
