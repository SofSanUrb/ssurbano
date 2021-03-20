import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselProject(props) {
  const { projectImages } = props;
  let mobileImages = projectImages.filter(image => image.includes('Mob'));
  const mql = window.matchMedia('(max-width: 1050px)')
  return (
    <div className="column">
      <Carousel className="my-carousel">
        { mql.matches ? (mobileImages.map((imagePath, index) => { 
            return (
            <Carousel.Item key={index}>
              <img src={imagePath} className="slide" alt="projectImage" />
            </Carousel.Item>
          )})) :  (projectImages.map((imagePath, index) => {
            return (
            <Carousel.Item key={index}>
              <img src={imagePath} className="slide" alt="projectImage" />
            </Carousel.Item>)
          }))
        }
      </Carousel>
    </div>
  );
}
