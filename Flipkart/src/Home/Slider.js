import Carousel from 'react-bootstrap/Carousel';
import Real from './images/real.png'
import Mat from './images/Mattres.png'
import Ac from './images/Ac.png'
import Zebo from './images/Zebro.png'
import Vivo from './images/vivo.png'
import sale from './images/sale.png'
import React from 'react'


function Slider() {
  return (
    <Carousel data-bs-theme="dark" className='mt-3 shadow-lg'>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Real}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Ac}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Mat}
          alt="Third slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Vivo}
          alt="Third slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Zebo}
          alt="Third slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={sale}
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;