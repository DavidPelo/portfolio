import React from "react";
import Container from "./Container";

function NavBar() {
  return (
    <Container class="nameContainer">
      <div className="name">
        <h1>david pelo</h1>
      </div>
      <Container class="navLinkContainer">
        <div className="navLink">
          <a>projects</a>
        </div>
        <div className="navLink">
          <a>contact</a>
        </div>
      </Container>
    </Container>
  );
}

export default NavBar;
