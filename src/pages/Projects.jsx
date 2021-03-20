import React, { useState } from "react";
import GoTop from "../components/GoTop";

import CarouselProject from "../components/CarouselProject";

export default function Projects() {
  const flatmeDetails = {
    path: [
      "./images/flatme_desk_1.PNG",
      "./images/flatme_desk_2.PNG",
      "./images/flatme_Mob_0.PNG",
    ],
    title: "flatme",
    description:
      "The Social Code (TSC) is a social media app (Full Stack Web App) where developers and technical people can share their experiences and create online events to network and share knowledge with other people",
    github: "https://github.com/SofSanUrb/flatme" ,
    live: "https://flatme.herokuapp.com/"
  };
  
  const [projectFlatme, setFlatme] = useState(flatmeDetails);
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
        <h1>{projectFlatme.title}</h1>
        <p>
         {projectFlatme.description}
        </p>
        <div className="my-project-links">
          <a className="text-blue" href="https://github.com/SofSanUrb/flatme">
            GitHub
          </a>
          <a className="text-blue" href="https://flatme.herokuapp.com/">
            Live Web
          </a>
        </div>
        <CarouselProject projectImages={flatmeDetails.path} />
      </div>
      <div className="main my-projects text-left">
        <h1>No Adults Allowed</h1>
      </div>
      <GoTop scrollStepInPx="100" delayInMs="20.50" />
    </>
  );
}
