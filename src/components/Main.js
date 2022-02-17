import React from 'react'
import {Carousel} from 'react-bootstrap'
import AboutUs from './AboutUs'

export default function Main(){
  return(
    <>
    <Carousel>
      <Carousel.Item interval={3000}>
      <img
      className="d-block w-100"
      src="https://dummyimage.com/600x200/000/fff"
      alt="First slide"
    />
      <Carousel.Caption>
        <h3>Deneme 1</h3>
      </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
      <img
      className="d-block w-100"
      src="https://dummyimage.com/600x200/000/fff"
      alt="First slide"
    />
      <Carousel.Caption>
        <h3>Deneme 2</h3>
      </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
      <img
      className="d-block w-100"
      src="https://dummyimage.com/600x200/000/fff"
      alt="First slide"
    />
      <Carousel.Caption>
        <h3>Deneme 3</h3>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <AboutUs />
    </>
  )
}