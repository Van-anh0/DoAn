import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import Contents from "../components/Content/Contents";
import Cinemas from "../components/Cinemas/Cinemas";


function Home(){
    return(
        <div>
            
            
            <Slider/>
            <Contents/>
            <Cinemas/>
            <Footer/>
        </div>
    )
}

export default Home;