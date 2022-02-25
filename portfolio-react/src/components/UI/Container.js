import React from "react";

function Container(props) {
  return (
    <div className={props.class}>
      {props.children}
    </div>
  );
}

export default Container;
