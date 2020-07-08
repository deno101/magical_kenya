import { sss } from './slider-logic';
import React, { PureComponent } from 'react'
import './Carousel.css';

export default class Carousel extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <Imgs />
                </div>
            </div>
        )
    }

    componentDidMount() {
        // call methods to move slider
        sss();
    }
}


function Imgs() {
    const images = [
        { src: "01.jpg", subcontent: { header: "", mesage: "" } },
        { src: "02.jpg", subcontent: { header: "", mesage: "" } },
        { src: "03.jpg", subcontent: { header: "", mesage: "" } },
        { src: "04.jpg", subcontent: { header: "", mesage: "" } },
        { src: "05.jpg", subcontent: { header: "", mesage: "" } },
        { src: "06.jpg", subcontent: { header: "", mesage: "" } },
        { src: "07.jpg", subcontent: { header: "", mesage: "" } },
        { src: "08.jpg", subcontent: { header: "", mesage: "" } },
        { src: "09.jpg", subcontent: { header: "", mesage: "" } },
        { src: "10.jpg", subcontent: { header: "", mesage: "" } },
        { src: "11.png", subcontent: { header: "", mesage: "" } },
    ]

    return (
        <React.Fragment>
            {images.map((image, index) => (
                <div key={index} className="carousel-image">
                    <div className="carousel-image-inner">
                        <img src={`${process.env.PUBLIC_URL}/imgs/${image.src}`} alt={index}/>
                    </div>
                    <div className="carousel-image-content pr-3">
                        <div className="carousel-image-content-title">
                            Content
                        </div>
                        <div className="carousel-image-content-message">
                            blabla
                        </div>
                    </div>

                    <div className="carousel-previous">
                        <i className="fa fa-chevron-left p-2 p-2 pt-3 pb-3 fa-2x"></i>
                    </div>
                    <div className="carousel-next">
                        <i className="fa fa-chevron-right p-2 pt-3 pb-3 fa-2x"/>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
}