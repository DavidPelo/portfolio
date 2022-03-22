import React from 'react'
import Container from './Container';

function Content({ title }) {
  return (
    <Container class="contentContainer">
      <div className="contentHeader">
        <h2>{title}</h2>
      </div>
    </Container>
  );
}

export default Content