import "./Card.css";
import React from "react";


export default function Card({title, src, showCarousel}) {

    function openPreview() {
        alert('hello world!');
    }

    if (showCarousel) {
        return (
            <section className="card" onClick={openPreview}>
                <img src={src} alt={title} />
                <p>{title}</p>
            </section>
        )
    } else {
        return (
            <section className="card">
                <img src={src} alt={title} />
                <p>{title}</p>
            </section>
        )
    }

    
}