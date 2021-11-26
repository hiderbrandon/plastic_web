import React from 'react'
import CarouselItem  from 'react-bootstrap/CarouselItem'
import Carousel  from 'react-bootstrap/Carousel'

const Slider = () => {
    return (
        <div className="CarouselWrapper">
            <Carousel className="col-md-12">
                <CarouselItem interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/720/480"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/720/480"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/720/480"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default Slider
