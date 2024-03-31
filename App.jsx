import Cards from "./components/Cards.jsx";
import MyCarousel from "./components/MyCarousel.jsx";
import MyDrawer from "./components/MyDrawer.jsx";
import MyForm from "./components/MyForm.jsx";
import MySteps from "./components/MySteps.jsx";
import MyTour from "./components/MyTour.jsx";
import React from "react";
import {Empty, Image} from "antd";

export default function App() {
            
    return (
        <div>

            {/* Demo 1 */}
            <h2>Demo 1: Ant Design "Carousel"</h2>
            <p>
                For convenience, the antd component code can be found in <strong>./components/MyCarousel.jsx</strong>.
            </p>
            <div style={{width: "90vw"}}>
                <MyCarousel />
            </div>

            {/* Demo 2 */}
            <h2>Demo 2: Ant Design "Image with Zoom"</h2>
            <Image width={200} src="https://picsum.photos/400/400?id=1" />
            <Image width={200} src="https://picsum.photos/400/400?id=2" />
            <Image width={200} src="https://picsum.photos/400/400?id=3" />
            <Image width={200} src="https://picsum.photos/400/400?id=4" />
            <Image width={200} src="https://picsum.photos/400/400?id=5" />
            <Image width={200} src="https://picsum.photos/400/400?id=6" />
            <Image width={200} src="https://picsum.photos/400/400?id=7" />
            <Image width={200} src="https://picsum.photos/400/400?id=8" />
            <Image width={200} src="https://picsum.photos/400/400?id=9" />
            <Image width={200} src="https://picsum.photos/400/400?id=10" />
            <Image width={200} src="https://picsum.photos/400/400?id=11" />
            <Image width={200} src="https://picsum.photos/400/400?id=12" />


            {/* Demo 3 */}
            <h2>Demo 3: Ant Design "Steps"</h2>
            <p>
                For convenience, the antd component code can be found in <strong>./components/MySteps.jsx</strong>.
            </p>
            <MySteps />


            {/* Demo 4 */}
            <h2>Demo 4: Ant Design "Form"</h2>
            <p>
                For convenience, the antd component code can be found in <strong>./components/MyForm.jsx</strong>.
            </p>
            <MyForm />

            {/* Demo 5 */}
            <h2>Demo 5: Ant Design "Empty" (when no data to display)</h2>
            <Empty />

            {/* Demo 6 */}
            <h2>Demo 6: Ant Design "Tour"</h2>
            <p>
                For convenience, the antd component code can be found in <strong>./components/MyTour.jsx</strong>.
            </p>
            <MyTour />

            {/* Demo 7 */}
            <h2>Demo 7: Ant Design "Drawer"</h2>
            <p>
                For convenience, the antd component code can be found in <strong>./components/MyDrawer.jsx</strong>.
            </p>
            <MyDrawer />


            {/* Demo 8 */}
            <h2>Demo 8: You can also design your own custom components</h2>
            <p>It's useful to consider when writing your own component might be a better choice!</p>
            <Cards />


        </div>
    );
}
