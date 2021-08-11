import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleMode = (e) => {
    if(darkMode === true){
      setDarkMode(false)
    }
    else{
      setDarkMode(true)
    }
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  };
  return (
    <nav className="navbar">
      <div className="nav-div-mobile">
        <div className="logo-icon-div">
          <div className="logo-mobile">Ravi Teja</div>
          <div className="nav-icons">
            <div
              className="nav-bars"
              onClick={() => {
                const navList = document.querySelector(
                  ".nav-links-mobile .nav-list"
                );
                if (navList.style.display === "flex") {
                  navList.style.display = "none";
                } else {
                  navList.style.display = "flex";
                }
                const navToggleIcon =
                  document.querySelector("#nav-toggle-icon");
                if (navToggleIcon.className === "fas fa-bars") {
                  navToggleIcon.className = "fas fa-times";
                } else {
                  navToggleIcon.className = "fas fa-bars";
                }
              }}
            >
              <i className="fas fa-bars" id="nav-toggle-icon"></i>
            </div>
            <div className="toggle-mode">
              <input
                type="checkbox"
                className="toggle"
                id = "toggle-mobile"
                checked = {darkMode}
                onChange={(e) => {
                  toggleMode(e);
                }}
              />
              <label htmlFor="toggle-mobile" className="label">
                <div className="ball"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-links">
        <div className="nav-links-mobile">
          <ul className="nav-list">
            <li className="nav-link">
              <Link activeClass="active" spy={true} smooth={true} to="home">
                Home
              </Link>
              <div className="border"></div>
            </li>
            <li className="nav-link">
              <Link activeClass="active" spy={true} smooth={true} to="about">
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link activeClass="active" spy={true} smooth={true} to="projects">
                Projects
              </Link>
            </li>
            <li className="nav-link">
              <Link activeClass="active" spy={true} smooth={true} to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-div">
        <div className="logo">Ravi Teja</div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-link">
              <Link activeClass="active" spy={true} smooth={true} to="home">
                Home
              </Link>
              <div className="border"></div>
            </li>
            <li className="nav-link">
              <Link activeClass="active" spy={true} smooth={true} to="about">
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link activeClass="active" spy={true} smooth={true} to="projects">
                Projects
              </Link>
            </li>
            <li className="nav-link">
              <Link activeClass="active" spy={true} smooth={true} to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="toggle-mode">
          <input
            type="checkbox"
            className="toggle"
            id = "toggle"
            checked = {darkMode}
            onChange={(e) => {
              console.log("Hello")
              toggleMode(e);
            }}
          />
          <label htmlFor="toggle" className="label">
            <div className="ball"></div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
