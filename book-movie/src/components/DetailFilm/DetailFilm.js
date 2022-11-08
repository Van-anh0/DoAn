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
                <img src={movie} alt="movie - vd"></img>
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
               <span>Virus cuồng loạn kể về một đoàn phim đang quay tác phẩm về đề tài zombie tại một khu nghỉ dưỡng thuộc vùng núi. Tại đây, cả đoàn đã gặp nạn zombie thật chứ không còn là hình ảnh trên phim nữa. Nguồn cơn chính là do những thực phẩm độc hại, không rõ nguồn gốc được bán rộng rãi trên thị trường đã làm con người ngộ độc. Đoàn phim zombie đã phải đấu tranh để sống sót và tìm đường đến được sân bay để tìm sự trợ giúp từ chính phủ và quân đội.</span>
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