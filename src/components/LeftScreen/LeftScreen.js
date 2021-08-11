import React from "react";
import "./LeftScreen.css";
const LeftScreen = (props) => {
  return (
    <div className="project-image">
      <img src={props.image} />
    </div>
  );
};

export default LeftScreen;
