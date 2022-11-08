import Carousel from 'react-bootstrap/Carousel';

import "./Home.css";
import c1 from "../image/carousel1.jpg";
import c2 from "../image/carousel3.webp";
import c3 from "../image/carousel3.jpg";
import c4 from "../image/carousel4.jpg";
import React from 'react';


function BCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c4}
          alt="Fourth slide"
        />

        
      </Carousel.Item>
      
    </Carousel>
  );
}





export default BCarousel;