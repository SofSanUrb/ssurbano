import React from "react";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <Fade bottom>
      <div className="main text-center my-error">
      <h2 className="text-blue">Error 404 <br></br> Page not found!</h2>
      <h5>Are you sure you have the right URL? <br></br>Go back to the menu options</h5>
      
      <Footer/>
      </div>
    </Fade>
  );
}
