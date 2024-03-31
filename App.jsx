import Cards from "./components/Cards.jsx";
import MyCarousel from "./components/MyCarousel.jsx";
import MySteps from "./components/MySteps.jsx";
import MyForm from "./components/MyForm.jsx";
import React from "react";

export default function App() {
            
    return (
        <div>

            {/* Demo 1 */}
            <h2>Demo 1: Ant Design "Carousel"</h2>
            <div style={{width: "90vw"}}>
                <MyCarousel />
            </div>


            {/* Demo 2 */}
            <h2>Demo 2: Custom "Card" components</h2>
            <Cards />


            {/* Demo 3 */}
            <h2>Demo 3: Ant Design "Steps"</h2>
            <MySteps />


            {/* Demo 4 */}
            <h2>Demo 4: Ant Design "Form"</h2>
            <MyForm />

        </div>
    );
}
