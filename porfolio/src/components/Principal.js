import React from "react";
import TopBar from "./TopBar";

import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './hook/ImagenList';

function Principal(){
    return (
        <React.Fragment>
             <div className="topBar">
                <TopBar/>
            </div>
        
    
            <h1>Esto comienza aquí</h1>
        <Carousel>
            <Carousel.Item interval={1000}>
                <CarouselImage text="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <CarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </React.Fragment>
    )
}

export default Principal;