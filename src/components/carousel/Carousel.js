import { setTimer } from './slider-logic';
import React, { PureComponent } from 'react'
import './Carousel.css';

export default class Carousel extends PureComponent {
    render() {
        return (
            <div className="carousel-container">
                <Imgs />
            </div>
        )
    }

    componentDidMount() {
        // call methods to move slider
        setTimer();
    }
}


function Imgs() {
    const images = [
        {
            src: "01.jpg", subcontent: [
                { header: "Scenery & Landscape", mesage: "Enjoy the breathtaking scenery and magnificent landscape" }
            ]
        },
        {
            src: "02.jpg", subcontent: [
                { header: "See The Migration", mesage: "Experience one of the greatest natural spectacles in the world" }
            ]
        },
        {
            src: "03.jpg", subcontent: [
                { header: "Water Sports", mesage: "Make some waves on your next vacation" }
            ]
        },
        { src: "04.jpg", subcontent: [] },
        {
            src: "05.jpg", subcontent: [
                { header: "Massai Mara", mesage: "Witness the essence of Wildlife!" }
            ]
        },
        { src: "06.jpg", subcontent: [] },
        {
            src: "07.jpg", subcontent: [
                { header: "White Water Raffing", mesage: "Decend the rapids and experience the thrill" }
            ]
        },
        { src: "08.jpg", subcontent: [] },
        {
            src: "09.jpg", subcontent: [
                { header: "Go on safari", mesage: "Get unbelivebly close to wild animals you've only ever dreamed about" }
            ]
        },
        { src: "10.jpg", subcontent: [] },
        { src: "11.png", subcontent: [] },
    ]

    return (
        <React.Fragment>
            <div className="carousel-image-container">

                {images.map((image, index) => (
                    <div key={index} className='carousel-image' style={{ opacity: (index === 0) ? '1' : '0', position: index === images.length - 1 ? "relative" : "absolute" }}>
                        <div className="carousel-image-inner">
                            <img src={`${process.env.PUBLIC_URL}/imgs/${image.src}`} alt={index} />
                        </div>

                            <React.Fragment>
                                <div className="carousel-previous" id="carousel-prev-btn">
                                    <i className="fa fa-chevron-left p-2 p-2 pt-3 pb-3 fa-2x" />
                                </div>

                                <div className="carousel-next" id="carousel-next-btn">
                                    <i className="fa fa-chevron-right p-2 pt-3 pb-3 fa-2x" />
                                </div>
                            </React.Fragment>

                        {image.subcontent.map((data, index) => (
                            <div className="carousel-image-content pr-3" key={index}>
                                <div className="carousel-image-content-title m-2 ml-auto">
                                    {data.header}
                                </div>
                                <div className="carousel-image-content-message m-2 ml-auto">
                                    {data.mesage}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}


            </div>

        </React.Fragment>
    );
}