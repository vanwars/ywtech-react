import "./MySteps.css";
import React, { useState } from "react";
import {Steps, Button} from "antd";



export default function MySteps() {
    const [idx, setIdx] = useState(1);
    const items = [
        { title: 'first step', text: "Instructions for the first step." }, 
        { title: 'second step', text: "Instructions for the second step." }, 
        { title: 'third step', text: "Instructions for the third step." }, 
        { title: 'fourth step', text: "Instructions for the fourth step."  }
    ];

    function prev() {
        setIdx(idx === 0 ? items.length - 1 : idx - 1);
    }

    function next() {
        setIdx(idx === items.length - 1 ? 0 : idx + 1);
    }

    return (
        <div className="wizard">
            <Steps items={items}  current={idx} />
            <div className="step-detail">
                
                { items[idx].text }
                <nav>
                    <Button onClick={prev}>Previous</Button>
                    <Button onClick={next}>Next</Button>
                </nav>
            </div>
        </div>
    )

    
}