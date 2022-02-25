import React from "react";
import Container from "./Container";
import Lab from "./Lab";

function Labs() {
  return (
    <Container class="labsContainer">
      <Lab link="./PHP Lab 1/phpLab1Index.php" title="PHP Lab 1" />
      <Lab link="./PHP Lab 2/lab2.php" title="PHP Lab 2" />
    </Container>
  );
}

export default Labs;
