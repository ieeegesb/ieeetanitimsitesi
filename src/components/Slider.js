import React from 'react';
import {Carousel} from 'react-bootstrap';

function Slider() {
  return (
    <Carousel id="etkinliklerimiz">
      <Carousel.Item interval={3000}>
      <a href="https://www.youtube.com/watch?v=RM_C2DGwfNw" target="_blank" rel="noreferrer">
        <img
            className="d-block w-100"
            src={require("../components/images/slider/accessIT.png")}
            alt="Access IT"
        />
    </a>
      <Carousel.Caption>
        <h3>Access IT</h3>
      </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
      <a href="https://www.youtube.com/watch?v=UKqYABIgtIY&t=80s" target="_blank" rel="noreferrer">
        <img
        className="d-block w-100"
        src={require("../components/images/slider/biotech.png")}
        alt="Biotech"
        />
    </a>
      <Carousel.Caption>
        <h3>Biotech İzmir '22</h3>
      </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
      <a href="https://www.youtube.com/watch?v=hN9fnz1Wias" target="_blank" rel="noreferrer">
        <img
        className="d-block w-100"
        src={require("../components/images/slider/isHayatindaKelebekEtkisi.png")}
        alt="Kelebek Etkisi"
        />
    </a>
      <Carousel.Caption>
        <h3>İş Hayatında Kelebek Etkisi 6</h3>
      </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
      <a href="https://www.instagram.com/ieeepesege/?hl=en" target="_blank" rel="noreferrer">
        <img
        className="d-block w-100"
        src={require("../components/images/slider/enerji50.png")}
        alt="Enerji 5.0"
        />
    </a>
      <Carousel.Caption>
        <h3>Enerji 5.0</h3>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;