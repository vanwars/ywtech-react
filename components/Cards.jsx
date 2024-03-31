import Card from "./Card.jsx";
import React from "react";


export default function Cards() {

    return (
        <div className="cards">
                <Card 
                    title="My first photo"
                    src="https://picsum.photos/300/300?id=1"
                    showCarousel="true" />
                <Card 
                    title="My second photo"
                    src="https://picsum.photos/300/300?id=2" />
                <Card 
                    title="My third photo"
                    src="https://picsum.photos/300/300?id=3" />
                <Card 
                    title="My fourth photo"
                    src="https://picsum.photos/300/300?id=4"
                    showCarousel="true" />
                <Card 
                    title="My fifth photo"
                    src="https://picsum.photos/300/300?id=5" />
                <Card 
                    title="My sixth photo"
                    src="https://picsum.photos/300/300?id=6" />
                <Card 
                    title="My seventh photo"
                    src="https://picsum.photos/300/300?id=7" />
                <Card 
                    title="My eighth photo"
                    src="https://picsum.photos/300/300?id=8" />
            </div>
    )

    
}