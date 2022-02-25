import React from "react";

function Lab({ link, title }) {
  return (
    <div className="labNav">
      <a href={link}>{title}</a>
    </div>
  );
}

export default Lab;
