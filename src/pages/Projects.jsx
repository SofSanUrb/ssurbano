import React, { useState } from "react";
import GoTop from "../components/GoTop";

import CarouselProject from "../components/CarouselProject";

export default function Projects() {
  const pathFlatme = [
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255055/flatme_Mob_0_fizk7v.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255055/flatme_Mob_1_s1hg11.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255055/flatme_Mob_2_xwkzuz.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255056/flatme_desk_1_v5goji.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255055/flatme_desk_2_oqjglu.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255055/flatme_desk_3_jtyjkl.png",
  ];
  const pathTSC = [
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255299/TSC_Mob_1_hpxhjh.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255305/TSC_Mob_2_qc3msr.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255056/TSC_desk_1_mqos8r.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255056/TSC_desk_3_fz6wla.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255056/TSC_Mob_5_tfbn64.png",
  ];
  const pathGame = [
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616263843/NAA_Mob_1_uuahte.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616263843/NAA_Mob_2_awrcst.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255055/NAA_Desk_1_uy07du.png",
    "https://res.cloudinary.com/dfpleoyv6/image/upload/v1616255055/NAA_Desk_2_u4h4q8.png",
  ];
  const pathSsurbano = [];

  const [imagesflatme, setFlatme] = useState(pathFlatme);
  const [imagesTSC, setTSC] = useState(pathTSC);
  const [imagesGame, setGame] = useState(pathGame);
  return (
    <>
      <div className="main rest-projects text-left">
        <h1 className="project-title">The Social Code</h1>
        <div className="my-project-links">
          <a
            className="text-blue"
            href="https://github.com/marta8919/the-social-code-client"
          >
            Repo Client
          </a>
          <a
            className="text-blue"
            href="https://github.com/marta8919/the-social-code-server"
          >
            Repo Server
          </a>
          <a
            className="text-blue"
            href="https://the-social-code.herokuapp.com/"
          >
            Live Web
          </a>
        </div>
        <p>
          The Social Code (TSC) is a Full Stack Web social media app where
          developers can share their experiences and create online events to
          network and share knowledge with other people
        </p>
        <CarouselProject projectImages={imagesTSC} />
      </div>
      <div className="main rest-projects text-left">
        <h1>flatme</h1>
        <div className="my-project-links">
          <a className="text-blue" href="https://github.com/SofSanUrb/flatme">
            GitHub
          </a>
          <a className="text-blue" href="https://flatme.herokuapp.com/">
            Live Web
          </a>
        </div>
        <p>
          flatme is a Full Stack platform that gathers district reviews
          globally, for users who need to move to an area or a city they don't
          know and gather as much information as possible.
        </p>

        <CarouselProject projectImages={imagesflatme} />
      </div>
      <div className="main first-project text-left">
        <h1>ssurbano Portfolio</h1>
        <div className="my-project-links">
          <a className="text-blue" href="https://github.com/SofSanUrb/flatme">
            GitHub
          </a>
          <a className="text-blue" href="https://flatme.herokuapp.com/">
            Live Web
          </a>
        </div>
        <p>Personal Website with my latest selected projects</p>

        <CarouselProject projectImages={imagesflatme} />
      </div>
      <div className="main long-title text-left">
        <h1>No Adults Allowed</h1>
        <div className="my-project-links">
          <a className="text-blue" href="https://github.com/SofSanUrb/flatme">
            GitHub
          </a>
          <a className="text-blue" href="https://flatme.herokuapp.com/">
            Live Web
          </a>
        </div>
        <p>
          Readme is a Fullstack responsive social media web platform that gather
          street and district reviews over different countries, with the goal of
          helping people that need to move to an area or a city they don't know,
          have as much information as possible.
        </p>

        <CarouselProject projectImages={imagesGame} />
      </div>
      <GoTop className="my-gotop" scrollStepInPx="100" delayInMs="20.50" />
    </>
  );
}
