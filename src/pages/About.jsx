import React from "react";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Fade bottom>
      <div className="about main text-left">
        <h2>Hi there!</h2>
        <h3>
          I’m a web developer focused on{" "}
          <span className="text-blue my-tech">Front-end</span> and{" "}
          <span className="text-blue my-tech">Back-end</span> tools, fan of
          puzzles and design.
        </h3>
        <h3>
          Fun facts:
          <ul>
            <li>I speak 5 languages</li>
            <li>I love photography and popcorn</li>
          </ul>
        </h3>
        <div className="my-tools text-blue">
          <h3>
            <ul id="first-tags">
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </h3>
          <h3>
            <ul>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Nodejs</li>
              <li>Express</li>
            </ul>
          </h3>
        </div>
        <Footer/>
      </div>
      
    </Fade>
  );
}
