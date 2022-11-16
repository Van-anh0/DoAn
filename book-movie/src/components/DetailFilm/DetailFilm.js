import React from "react";
import {AiOutlineFieldTime} from "react-icons/ai"
import "../DetailFilm/DetailFilm.scss"
import icon from "../../assets/images/ytb2.png"

function DetailFilm(props){

    const movie ="https://i.etsystatic.com/27089413/r/il/ddfeb8/2795688212/il_570xN.2795688212_glob.jpg";
    return(

        <div className="detailFilm">
  <div className="Film">
            <div className="pic">
                <img src={props.film.Poster} alt={props.film.Title}></img>
            </div>

            <div className="text">
            <div className="detail">
                        <h1 className="name">
                        {props.film.Title}
                    </h1>
                    
                    <span className="tt">Khởi chiếu: </span> <span>{props.film.Released}</span><br/>
                    <span className="tt">Thể loại: </span> <span>{props.film.Genre}</span><br/>
                    <span className="tt">Đạo diễn: </span> <span>{props.film.Director}</span><br/>
                    <span className="tt">Diễn viên: </span> <span>{props.film.Actors}</span><br/>
                    <span className="tt">Quốc gia: </span> <span>{props.film.Country}</span><br/>
                   
            </div>
            <div className="content">
                <h1>Nội dung phim</h1>
               <span>{props.film.Plot}</span>
                </div>
            <div className="foo">
                <div className="a">
                        <img src={icon}></img>
                       <div>TRAILER</div>
                </div>
             
                <div className="b">Mua vé</div>
            </div>

            </div>

           
        
            
        </div>


     
        </div>
      


           
    )
}

export default DetailFilm;