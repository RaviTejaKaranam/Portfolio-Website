import React from "react";
import "./About.css";
import portfolioImage from "../../images/portfolio-image.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="left-half">
        <div className="image">
          <img src={portfolioImage} className = "my-image" />
        </div>
      </div>
      <div className="right-half">
        <div className="about-heading">About Me</div>
        <div className="brief-intro">
          Hi There, This is Ravi and I am a Full Stack Development enthusiast. I get immense pleasure in creating artistic applications where my creativity meets my passion.
        </div>
        <table className="bio">
          <tbody>
            <tr className="bio-info">
              <td>
                <span className="bio-heading">Name</span>
              </td>
              <td>
                <span className="bio-data">Ravi Teja Karanam</span>
              </td>
            </tr>
            <tr className="bio-info">
              <td>
                <span className="bio-heading">DOB</span>
              </td>
              <td>
                <span className="bio-data">April 2, 1999</span>
              </td>
            </tr>
            <tr className="bio-info">
              <td>
                <span className="bio-heading">Email</span>
              </td>
              <td>
                <span className="bio-data">ravitejakaranam1999@gmail.com</span>
              </td>
            </tr>
            <tr className="bio-info">
              <td>
                <span className="bio-heading">Github</span>
              </td>
              <td>
                <span className="bio-data">
                  <a href="https://github.com/RaviTejaKaranam" target="_blank">
                    https://github.com/RaviTejaKaranam
                  </a>
                </span>
              </td>
            </tr>
            <tr className="bio-info">
              <td>
                <span className="bio-heading">Phone</span>
              </td>
              <td>
                <span className="bio-data">+1 3527096319</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
