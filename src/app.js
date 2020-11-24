import React, {useState,useRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Slider from "./Components/Slider/Slider.jsx";
import Slide from "./Components/Slider/Slide.jsx";

import "./Styles/index.scss";

const bg = [
    "#f15946",
    "#571ec1",
    "#636567",
    "#571eb1",
    "#f7f567",
]
const noOfSlides = bg.length;

const slidesPerPage = 2;
const App = () => {
    
    const createSlides = () => {
        return bg.map((cur,index) => (
           <Slide key={index} style={{backgroundColor:cur, height:"100vh"}} slidesPerScreen={slidesPerPage} className="slide" >
                {cur}
           </Slide>
        ))
    }
    return (
        <div className="container">
            <Slider noOfSlides={noOfSlides} slidesPerScreen={slidesPerPage} startWith={1}>
                {createSlides()}
            </Slider>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));