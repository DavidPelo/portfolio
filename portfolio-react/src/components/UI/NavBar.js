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
          <a href="#projects">projects</a>
        </div>
        <div className="navLink">
          <a href="#contact">contact</a>
        </div>
        <div className="navLink">
          <a href="https://github.com/davidpelo" target="_blank" rel="noreferrer">github</a>
        </div>
        <div className="navLink">
          <a href="https://www.linkedin.com/in/davidpelo" target="_blank" rel="noreferrer">linkedIn</a>
        </div>
      </Container>
    </Container>
  );
}

export default NavBar;
