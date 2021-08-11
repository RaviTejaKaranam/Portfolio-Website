import React from "react";
import "./RightScreen.css";

const RightScreen = (props) => {
  return (
    <div className="project-details">
      <div className="project-name">
        <span className="project-heading">Title : </span> {props.projectName}
      </div>
      <div className="project-description">
        <span className="project-heading">Description : </span> {props.projectDescription}
      </div>
      <div className = "project-techs">
        <span className = "project-heading">Technologies used : </span>
        {props.projectTechs}
      </div>
      <div className = "view-button">
        <a href = {props.projectLink} className = "view-link link" target = "_blank">{props.buttonText ? props.buttonText : "View Project"}</a>
      </div>
    </div>
  );
};

export default RightScreen;
