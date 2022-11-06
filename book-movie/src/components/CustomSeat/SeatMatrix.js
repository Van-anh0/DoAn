import React, {useEffect, useState} from "react"
import Seat from './Seat'
import './Seat.scss'

const GenerateSeats = (seats) => {
	return (
		<div className="row">
			{
				seats.map((seat) => {
					return <Seat seat={seat} />
				})
			}
		</div>
	)
}

const SeatMatrix = () => {
    const [seats, setSeats] = useState([]);
    useEffect(() => {
      fetch("/data/seats.json")
      .then(res => res.json())
      .then(data => setSeats(data))

    }, [])
    
	return (
		<div className="movie-complex">
            <div className="movie-screen">
                <p>Screen</p>
            </div>
			
			<div className="container movie-layout">
				<div>
                    {GenerateSeats(seats)}
                </div>
			</div>

            <div className="movie-button">
                <button>Quay lại</button>
                <button>Thanh toán</button>
            </div>
		</div>
	)
}

export default SeatMatrix