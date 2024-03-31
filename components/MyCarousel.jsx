import "./Card.css";
import React from "react";
import { Carousel } from "antd";

const carouselStyle = {
    margin: "0 auto 40px auto"
}

const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "4px"
};

export default function MyCarousel() {
    // Note: When you're using the AntD carousel, either the carousel or the carousel's parent
    // needs to be assign a width.
    return (
        <Carousel style={carouselStyle} autoplay={true}>
                <div>
                    <img style={imageStyle} src="https://picsum.photos/1200/300?id=9" alt="Alt text" />
                </div>
                <div>
                    <img style={imageStyle} src="https://picsum.photos/1200/300?id=10" alt="Alt text" />
                </div>
                <div>
                    <img style={imageStyle} src="https://picsum.photos/1200/300?id=11" alt="Alt text" />
                </div>
                <div>
                    <img style={imageStyle} src="https://picsum.photos/1200/300?id=12" alt="Alt text" />
                </div>
                <div>
                    <img style={imageStyle} src="https://picsum.photos/1200/300?id=13" alt="Alt text" />
                </div>
                <div>
                    <img style={imageStyle} src="https://picsum.photos/1200/300?id=14" alt="Alt text" />
                </div>
                <div>
                    <img style={imageStyle} src="https://picsum.photos/1200/300?id=15" alt="Alt text" />
                </div>
                <div>
                    <img style={imageStyle} src="https://picsum.photos/1200/300?id=16" alt="Alt text" />
                </div>
            </Carousel>
    )

    
}