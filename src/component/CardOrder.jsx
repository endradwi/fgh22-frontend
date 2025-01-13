import React from 'react'
import cine from '../assets/Cine.svg'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function CardOrder() {
    const movieData = useSelector(state=>state.movie.movie)
    const seatData = useSelector(state=>state.movie.seat)
return (
    <div>
        <div className='hidden md:flex flex-col gap-11'>
        <div className='flex flex-col gap-0.5'>
            <div className='px-6 bg-white rounded-t-lg py-10 flex flex-col gap-8'>
                <div className='flex flex-col justify-center items-center gap-2'>
                <img src={cine} alt="" />
                <div>CineOne21 Cinema</div>
                </div>
                <div className='flex justify-between gap-5'>
                    <div>Movie selected</div>
                    <div>{movieData.tittle}</div>
                </div>
                <div className='flex justify-between gap-5'>
                    <div>Tuesday, 07 July 2020</div>
                    <div>13:00pm</div>
                </div>
                <div className='flex justify-between gap-5'>
                    <div>One ticket price</div>
                    <div>$10</div>
                </div>
                <div className='flex justify-between gap-5'>
                    <div>Seat choosed</div>
                    <div>{seatData}</div>
                </div>
            </div>
            <div className='px-6 bg-white rounded-b-lg py-10 flex justify-between'>
                <div>Total Payment</div>
                <div>{`$${seatData.length * 10}`}</div>
            </div>
        </div>
        <Link to="/payment"> <div className='w-96 h-14 rounded-lg bg-orange-600 flex justify-center items-center text-white'>Checkout now</div></Link>
        </div>
    </div>
)
}

export default CardOrder
