import React from "react";

function Project({ link, title}) {
  return (
    <div className="projectNav">
      <a href={link}>{title}</a>
    </div>
  );
}

export default Project;
