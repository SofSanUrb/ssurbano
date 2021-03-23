import React from "react";
import Fade from "react-reveal/Fade"

export default function Contact() {
  return (
    <Fade bottom>
    <div className="main text-right my-div-contact">
      <h2>Let's talk!</h2>
      <div className="my-project-links my-contact">
        <a id="contact-email" href="mailto:sofiasanchezurbano@gmail.com">
          Send me an email
        </a>
        <a
          id="contact-cv"
          target="_blank"
          href="https://drive.google.com/file/d/19QalWKNHGzE8E_5ZyDkb3YecrlQc55GH/view?usp=sharing"
          download
        >
          Download Resume
        </a>
        <a id="contact-github" target="_blank" href="https://github.com/SofSanUrb">
          Github
        </a>
        <a
          id="contact-linkedin" target="_blank"
          href="https://www.linkedin.com/in/sofiasanchezurb/"
        >
          LinkedIn
        </a>
      </div>
    </div>
    </Fade>
  );
}
