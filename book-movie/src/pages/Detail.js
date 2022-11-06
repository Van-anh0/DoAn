import React, {useEffect, useState}  from "react";
import DetailFilm from "../components/DetailFilm/DetailFilm";
import Header from "../components/Header/Header";
function Detail(){
    const [film, setFilm] = useState([]);
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
        .then(x => x.json())
        .then(y => {
            console.log(y[0]);setFilm(y[0])
        });
    }, [])
    
    return(
        <div>
            <DetailFilm film={film} test={"123"}/>
        </div>
    )
}

export default Detail;