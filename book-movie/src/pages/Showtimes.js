import React from "react";
import Slider from "../components/Slider/Slider";
import ListFilm from "../components/ListFilm/ListFilm";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function Showtimes(){
    return(
        <div>
          
            <Slider/>
            <ListFilm/>
             <Footer/>
        </div>
    )
}

export default Showtimes;