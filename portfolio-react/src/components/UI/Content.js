import React from 'react'

function Content({ title }) {
  return (
    <>
      <div className="contentHeader">
        <h1>{title}</h1>
      </div>
      <div className="content"></div>
    </>
  );
}

export default Content