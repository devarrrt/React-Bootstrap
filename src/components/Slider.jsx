import React from 'react'
import { Carousel } from 'react-bootstrap'
import car from '../assets/img/car.jpg'
import most from '../assets/img/most.jpg'
import car2 from '../assets/img/car2.jpg'




const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item style={{ height: '600px' }} >
                    <img 
                    className="d-block w-100"
                    alt="alt"
                    src={ car }
                    />
                    <Carousel.Caption>
                        <h3> Devarrrt</h3>
                        <p> Hello hello hello </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  style={{ height: '600px' }} >
                    <img 
                    className="d-block w-100"
                    alt="alt"
                    src={ most }
                    />
                    <Carousel.Caption>
                        <h3> Devarrrt</h3>
                        <p> Hello hello hello </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  style={{ height: '600px' }} >
                    <img 
                    className="d-block w-100"
                    alt="alt"
                    src={ car2 }
                    />
                    <Carousel.Caption>
                        <h3> Devarrrt</h3>
                        <p> Hello hello hello </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
