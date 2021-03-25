import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="about text-left">
      <Fade bottom>
        <div id="intern-about">
          <h2>Hi there!</h2>
          <h3>
            I'm Sofía, I’m a web developer based in sunny Madrid focused on{" "}
            <span className="text-blue my-tech">Front-end</span> and{" "}
            <span className="text-blue my-tech">Back-end</span> technologies,
            fan of puzzles and design.{" "}
          </h3>
          <h3 className="rest-about">
            My journey into programming began learning fundamentals and{""}
            <span className="text-blue my-tech">Web Development</span>by myself, and from
            the first 'Hello World', I was hooked.{" "}
          </h3>
          <h3 className="rest-about">
            During my experience as a building architect in Europe I have
            developed multiple abilities that I apply daily to my code when
            <span className="text-blue my-tech">
              designing, organizing the code structure and problem-solving.
            </span>
          </h3>
          <h3 className="rest-about">
            Fun facts:
            <ul>
              <li>I speak 5 languages: <span className="text-blue my-tech">ES | EN | FR | DE | IT</span></li>
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
              <ul id="second-tags">
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Nodejs</li>
                <li>Express</li>
              </ul>
            </h3>
          </div>
          <div className="column">
            <Link className="text-blue contact-me" to="/contact">
              Let's get in touch
            </Link>
          </div>
        </div>
        <Footer />
      </Fade>
    </div>
  );
}
