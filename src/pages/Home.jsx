import React from "react";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Fade bottom>
      <div className="main home my-landing text-right">
        <h1>
          Hi. I’m Sofia.<br></br>I am a Web developer.
        </h1>
        <Footer/>
      </div>
    </Fade>
  );
}
