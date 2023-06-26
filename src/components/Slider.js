import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel id="etkinliklerimiz">
      <Carousel.Item interval={3000}>
        <a href="https://www.youtube.com/watch?v=vgjZG2qaQZE&t=7282s&ab_channel=IEEEEge%C3%96%C4%9FrenciKolu" target="_blank" rel="noreferrer">
          <img
            className="d-block w-100"
            src={require("../components/images/slider/cyberEge23.png")}
            alt="CyberEge'23"
          />
        </a>
        <Carousel.Caption>
          <h3 className='slider-text'>CyberEge'23</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <a href="https://www.instagram.com/p/CsCJba8MtYO/" target="_blank" rel="noreferrer">
          <img
            className="d-block w-100"
            src={require("../components/images/slider/iez23.png")}
            alt="İzmir Enerji Zirvesi'23"
          />
        </a>
        <Carousel.Caption>
          <h3 className='slider-text'>İzmir Enerji Zirvesi'23</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000}>
        <a href="https://www.youtube.com/watch?v=KMoPEyoRAuI&ab_channel=IEEEEge%C3%96%C4%9FrenciKolu" target="_blank" rel="noreferrer">
          <img
            className="d-block w-100"
            src={require("../components/images/slider/biotech23.png")}
            alt="Biotech İzmir'23"
          />
        </a>
        <Carousel.Caption>
          <h3 className='slider-text'>Biotech İzmir'23</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
        <a href="https://www.youtube.com/watch?v=RM_C2DGwfNw" target="_blank" rel="noreferrer">
          <img
            className="d-block w-100"
            src={require("../components/images/slider/accessIT.png")}
            alt="Access IT"
          />
        </a>
        <Carousel.Caption>
          <h3 className='slider-text'>Access IT</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
        <a href="https://www.youtube.com/watch?v=UKqYABIgtIY&t=80s" target="_blank" rel="noreferrer">
          <img
            className="d-block w-100"
            src={require("../components/images/slider/biotech22.png")}
            alt="Biotech"
          />
        </a>
        <Carousel.Caption>
          <h3 className='slider-text'>Biotech İzmir'22</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
        <a href="https://www.youtube.com/watch?v=hN9fnz1Wias" target="_blank" rel="noreferrer">
          <img
            className="d-block w-100"
            src={require("../components/images/slider/isHayatindaKelebekEtkisi6.png")}
            alt="Kelebek Etkisi"
          />
        </a>
        <Carousel.Caption>
          <h3 className='slider-text'>İş Hayatında Kelebek Etkisi'6</h3>
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
          <h3 className='slider-text'>Enerji 5.0</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;