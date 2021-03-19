import React from "react";
import GoTop from "../components/GoTop";
import Carousel from "react-bootstrap/Carousel";

export default function Projects() {
  return (
    <>
      <div className="main my-projects text-left">
        <h1>ssurbano Portfolio</h1>
        <p>Personal Website with my latest selected projects</p>
      </div>
      <div className="main my-projects text-left">
        <h1>The Social Code</h1>
        <p>
          The Social Code (TSC) is a social media app (Full Stack Web App) where
          developers and technical people can share their experiences and create
          online events to network and share knowledge with other people
        </p>
      </div>
      <div className="main my-projects text-left">
        <h1>flatme</h1>
        <p>
          Readme is a Fullstack responsive social media web platform that gather
          street and district reviews over different countries, with the goal of
          helping people that need to move to an area or a city they don't know,
          have as much information as possible.
        </p>
        <div className="my-project-links">
          <a className="text-blue" href="https://github.com/SofSanUrb/flatme">
            GitHub
          </a>
          <a className="text-blue" href="https://flatme.herokuapp.com/">
            Live Web
          </a>
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              src="./images/flatme_desk_1.PNG"
              className="slide"
              alt="project"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./images/flatme_desk_2.PNG"
              className="slide"
              alt="project"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./images/flatme_Mob_0.PNG"
              className="slide"
              alt="project"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="main my-projects text-left">
        <h1>No Adults Allowed</h1>
      </div>
      <GoTop scrollStepInPx="100" delayInMs="20.50" />
    </>
  );
}
