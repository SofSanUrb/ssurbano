import React from "react";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="main text-right my-div-contact">
      <Fade bottom>
        <h2>Let's talk!</h2>
        <div className="my-project-links my-contact">
          <a id="contact-email" href="mailto:sofiasanchezurbano@gmail.com">
            Send me an email
          </a>
          <a
            id="contact-github"
            target="_blank"
            href="https://github.com/SofSanUrb"
          >
            Github
          </a>
          <a
            id="contact-linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/sofiasanchezurb/"
          >
            LinkedIn
          </a>
        </div>
      </Fade>
      <Footer />
    </div>
  );
}
