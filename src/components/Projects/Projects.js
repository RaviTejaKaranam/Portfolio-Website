import React from "react";
import "./Projects.css";
import LeftScreen from "../LeftScreen/LeftScreen";
import RightScreen from "../RightScreen/RightScreen";
import googleDriveClone from "../../images/google-drive-clone.PNG";
// import googleDriveClone1000px from "../../images/google-drive-clone-1000px.PNG";
// import googleDriveClone500px from "../../images/google-drive-clone-500px.PNG";
import hangman from "../../images/hangman.PNG";
import movieApp from "../../images/movie-app.PNG";
import fiftyProjects from "../../images/50-Projects.PNG";
const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-heading">Projects</div>
      <div className="project-layout">
        <LeftScreen image={googleDriveClone} className="full-screen" />
        <RightScreen
          projectName="Google Drive Clone"
          projectDescription="This is a cloud storage application, used to 
          store files and images from any mobile device, tablet or computer. This uses sophisticated authentication system and has essential features like account activation, forgot password, reset password."
          projectTechs="Bootstrap, React, Node, MongoDB, Amazon S3"
          projectLink="https://ravi-google-drive-clone.netlify.app"
        />
      </div>
      <div className="project-layout">
        <LeftScreen image={hangman} />
        <RightScreen
          projectName="Hangman"
          projectDescription="Hangman is a UI based project which uses an API source to generate random secret words. It was purely built using CSS and TypeScript in order to deal with the dynamic behaviour of the game. Click on the link and start guessing the words !!!"
          projectTechs="TypeScript, CSS, JavaScript"
          projectLink="https://interactive-hangman.netlify.app"
        />
      </div>
      <div className="project-layout">
        <LeftScreen image={movieApp} />
        <RightScreen
          projectName="The Movie App"
          projectDescription="The movie app was an implementation of a wish to have a personalized movie collection. It also represents my passion towards good cinema. A suitable API interaction was used over which a feel good UI was developed."
          projectTechs="CSS, JavaScript"
          projectLink="https://themoviedatabaseapp.netlify.app"
        />
      </div>
      <div className="project-layout">
        <LeftScreen image={fiftyProjects} />
        <RightScreen
          projectName="50 Projects in 50 Days"
          projectDescription="This is a handbook repository containing several simple front-end components designed and functional to be used independently while building a complex UI project. This challenge also helped me improve my consistency."
          projectTechs="CSS, JavaScript"
          projectLink="https://github.com/RaviTejaKaranam/50-projects-in-50-days---HTML-CSS-and-JS"
          buttonText="View Repository"
        />
      </div>
    </div>
  );
};

export default Projects;
