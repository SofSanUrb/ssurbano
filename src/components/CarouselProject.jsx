import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselProject(props) {
  const { projectImages } = props;
  return (
    <div className="column">
      <Carousel className="my-carousel">
        {projectImages.map((imagePath, index) => {
          return (
            <Carousel.Item key={index}>
              <img src={imagePath} className="slide" alt="projectImage" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
