import React, { useEffect } from "react";
import "./Home.css";
const Home = () => {
  useEffect(() => {
    var profession = document.querySelector("#pro");
    const text = "I am a MERN Stack Developer.";
    let index = 1;
    function writeText() {
      // console.log(profession)
      profession.innerText = text.slice(0, index);
      index++;
      let myTimeout = setTimeout(writeText, 200);
      if (index > text.length) {
        clearTimeout(myTimeout)
      }
    }
    writeText();
  }, [])
  return (
    <div className="home" id="home">
      <div className="introduction">
        <div className="greeting">HEY! I AM</div>
        <div className="name">Ravi Teja Karanam</div>
        <div className="profession" id="pro">Hello World</div>
      </div>
    </div>
  );
};

export default Home;
