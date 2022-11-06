import React from "react";
import {AiOutlineFieldTime} from "react-icons/ai"
import "../DetailFilm/DetailFilm.scss"

function DetailFilm(props){

    const movie ="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/l/d/ld_poster_nkc_m_i_1_.jpg";
    return(
        <div className="Film">
            <div className="title">
                
                     <img src={movie} alt="movie - vd"></img>
                
               
                <div className="detail">
                        <h1 className="name">
                        {props.film.Title}
                    </h1>
                    <button>Đánh giá</button>
                    <div className="time">
                        <AiOutlineFieldTime className="inLine"/>
                        <p className="inLine">166 phút</p>
                    </div>
                    <p>Đạo diễn: <span>Adisorn Tresirikasem</span></p>
                    <p>Thể loại: <span>Hài, Lãng Mạn</span> </p>
                    <p>Diễn viên: <span>Ranee Campen, Thannavat Vatthannaputi</span></p>
                    <p>Quốc gia: <span>Thái lan</span></p>
                    <p>Ngày khởi chiếu: <span>9/9/2022</span></p>
                </div>
               
            </div>

            <div className="content">
                <h1>Nội dung phim</h1>
                <span>
                Gaysorn (Ranee Campen) – tiểu thư sống ở thời Rattanakosin chính là kiếp sau của Karaket ở triều đại AVVHyutthaya. Có lẽ bởi vậy mà Gaysorn đã chiếm trọn trái tim của Bhop (Thanavat Vatthanaputi) – cũng là hậu duệ của Dej – ngay từ lần đầu gặp mặt. Chàng kỹ sư tài năng đã luôn mơ về một người con gái có gương mặt giống Gaysorn trong suốt 10 năm qua, và nghĩ rằng cô chính là tri kỉ mà mình đang tìm kiếm.
                Phim mới Ngược Dòng Thời Gian Để Yêu Anh ra mắt tại các rạp chiếu phim từ 09.09.2022. Xem thêm tại: https://www.galaxycine.vn/dat-ve/love-destiny-the-movie.
                </span>
            </div>

        </div>
    )
}

export default DetailFilm;