import React from "react";
import GoTop from "../components/GoTop";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>ssurbano | Works</title>
      </Helmet>
      <Fade bottom>
        <section className="main my-card-project text-left">
          <h1 className="project-title">The Social Code</h1>
          <div className="my-project-links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://the-social-code.herokuapp.com/"
            >
              Live Web
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/marta8919/the-social-code-client"
            >
              Repo Client
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/marta8919/the-social-code-server"
            >
              Repo Server
            </a>
          </div>

          <p>
            The Social Code (TSC) is a Full Stack Web social media app where
            developers can share their experiences and create online events to
            network and share knowledge with other people
          </p>
          <div className="my-project-tags text-blue">
            <a href="https://github.com/search?q=%23react">React</a>
            <a href="https://github.com/search?q=%23javascript">JavaScript</a>
            <a href="https://github.com/search?q=%23HTML">HTML</a>
            <a href="https://github.com/search?q=%23CSS">CSS</a>
            <a href="https://github.com/search?q=%23Nodejs">Nodejs</a>
            <a href="https://github.com/search?q=%23MongoDB">MongoDB</a>
            <a href="https://material-ui.com/es/">MaterialUI</a>
          </div>
          <a
            className="my-project-image"
            href="https://the-social-code.herokuapp.com/"
          >
            <img
              src="https://res.cloudinary.com/dfpleoyv6/image/upload/v1616667301/layout_TSC_fntomu.png"
              alt="TSCProject"
            />
          </a>
        </section>
        <section className="main my-card-project text-left">
          <h1>flatme</h1>
          <div className="my-project-links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://flatme.herokuapp.com/"
            >
              Live Web
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/SofSanUrb/flatme"
            >
              GitHub
            </a>
          </div>

          <p>
            flatme is a Full Stack platform that gathers district reviews
            globally, for users who need to move to an area or a city they don't
            know and gather as much information as possible.
          </p>
          <div className="my-project-tags text-blue">
            <a href="https://github.com/search?q=%23handlebars">Handlebars</a>
            <p>JavaScript</p>
            <a href="https://github.com/search?q=%23javascript">JavaScript</a>
            <a href="https://github.com/search?q=%23HTML">HTML</a>
            <a href="https://github.com/search?q=%23CSS">CSS</a>
            <a href="https://github.com/search?q=%23Nodejs">Nodejs</a>
            <a href="https://github.com/search?q=%23MongoDB">MongoDB</a>
            <a href="https://github.com/search?q=%23bootstrap">Bootstrap</a>
          </div>
          <a className="my-project-image" href="https://flatme.herokuapp.com/">
            <img
              src="https://res.cloudinary.com/dfpleoyv6/image/upload/v1616667301/layout_flatme_ynidyj.png"
              alt="TSCProject"
            />
          </a>
        </section>
        <section className="main my-card-project text-left">
          <h1>ssurbano Portfolio</h1>
          <div className="my-project-links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://ssurbano.com/"
            >
              Live Web
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/SofSanUrb/ssurbano"
            >
              GitHub
            </a>
          </div>

          <p>Personal Website with my latest selected projects</p>
          <div className="my-project-tags text-blue">
          <a href="https://github.com/search?q=%23react">React</a>
            <a href="https://github.com/search?q=%23javascript">JavaScript</a>
            <a href="https://github.com/search?q=%23HTML">HTML</a>
            <a href="https://github.com/search?q=%23CSS">CSS</a>
            <a href="https://github.com/search?q=%23bootstrap">Bootstrap</a>
          </div>
          <a className="my-project-image" href="https://ssurbano.com/">
            <img
              src="https://res.cloudinary.com/dfpleoyv6/image/upload/v1616667301/layout_ssurbano_gernkg.png"
              alt="TSCProject"
            />
          </a>
        </section>
        <section className="main my-card-project last-title text-left">
          <h1>No Adults Allowed</h1>
          <div className="my-project-links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://sofsanurb.github.io/no-adults-allowed/"
            >
              Live Web
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/SofSanUrb/no-adults-allowed"
            >
              GitHub
            </a>
          </div>

          <p>
            "No Adults Allowed" is a web responsive game. The player can move
            vertically and horizontally through the room, avoiding incoming
            obstacles that appear moving in one direction. The game ends either
            when the player's score reaches 0 (Game lost) or when the timer
            stops (Game won), showing the final score to the user.
          </p>
          <div className="my-project-tags text-blue">
            <a href="https://github.com/topics/canvas">Canvas</a>
            <a href="https://github.com/search?q=%23javascript">JavaScript</a>
            <a href="https://github.com/search?q=%23HTML">HTML</a>
            <a href="https://github.com/search?q=%23CSS">CSS</a>
          </div>
          <a
            className="my-project-image"
            href="https://sofsanurb.github.io/no-adults-allowed/"
          >
            <img
              src="https://res.cloudinary.com/dfpleoyv6/image/upload/v1616667301/layout_gameNAA_okre6i.png"
              alt="TSCProject"
            />
          </a>
        </section>
        <GoTop className="my-gotop" scrollStepInPx="100" delayInMs="20.50" />
      </Fade>
      <Footer />
    </>
  );
}
