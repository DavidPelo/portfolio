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
          <h1><a>projects</a></h1>
        </div>
        <div className="navLink">
          <h1><a>contact</a></h1>
        </div>
      </Container>
    </Container>
  );
}

export default NavBar;
