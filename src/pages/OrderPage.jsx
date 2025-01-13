import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import {Link} from 'react-router-dom'
import Spider from '../assets/spider.svg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import CardOrder from '../component/CardOrder';
import { IoArrowDown } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import cine from '../assets/Cine.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addSeat } from '../redux/reducers/movie';

function OrderPage() {
const [isShow, Setshow] = React.useState(false)
const [isClick, setClick] = React.useState(false)
const [seat, setSeat] = React.useState('')
const movieData = useSelector(state=>state.movie.movie)
const dispatch = useDispatch()
// Menggunakan state untuk melacak kursi yang sudah dipilih
const [selectedSeats, setSelectedSeats] = React.useState([]);

// Fungsi untuk menangani pemilihan kursi


// Fungsi untuk memeriksa apakah kursi sudah dipilih
console.log(movieData)
// const [seat, setSeat] = React.useState("")
const getSeat = (val)=>{
    if (!selectedSeats.includes(val)) {
        setSelectedSeats([...selectedSeats, val]); // Menambahkan kursi yang dipilih
    }
    dispatch(addSeat(val))
}

const isSeatSelected = (seat) => selectedSeats.includes(seat);
// const param = useParams()
React.useEffect(() => {
    
    window.scrollTo(0, 0);
}, []);
return (
    <>
    <Navbar tittle="navbarhome" />
    {isShow && (
        <>
        <div className='absolute w-screen h-[2030px] opacity-80 bg-black'></div>
        <div className=' flex flex-col gap-11 top-[700px] left-36 absolute'>
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
                    <div>C4, C5, C6</div>
                </div>
            </div>
            <div className='px-6 bg-white rounded-b-lg py-10 flex justify-between'>
                <div>Total Payment</div>
                <div>$30</div>
            </div>
        </div>
        <Link to="/payment"> <div className='w-96 h-14 rounded-lg bg-orange-600 flex justify-center items-center text-white'>Checkout now</div></Link>
        </div>
        </>
    )

    }
    <main className='px-32 pt-8 pb-32 gap-8 flex flex-col justify-center items-center bg-gray-300'>
        <div className='flex items-center gap-4'>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className='bg-green-800 aspect-square rounded-full w-14 text-white flex justify-center items-center'><IoCheckmark className='h-7 w-7'/></div>
            <div>Dates And Time</div>
            </div>
            <div className='border-t-2 border-dashed border-black w-16'></div>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className='bg-orange-400 aspect-square rounded-full w-14 text-white flex justify-center items-center'>2</div>
            <div>Seat</div>
            </div>
            <div className='border-t-2 border-dashed border-black w-16'></div>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className='bg-gray-500 aspect-square rounded-full w-14 text-white flex justify-center items-center'>3</div>
            <div>Payment</div>
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='flex flex-col px-6 pb-16 pt-10 bg-white rounded-md gap-8'>
                <div className='flex flex-col md:flex-row md:justify-start md:items-start justify-center items-center border-gray-400 border py-3.5 px-6 gap-3.5'>
                    <div className='overflow-hidden w-full h-96 md:w-48 md:h-28 rounded'>
                        <img className='w-full' src={movieData.movie_image} alt={movieData.tittle} />
                    </div>
                    <div className='flex flex-col gap-3.5'>
                        <div className='text-4xl md:text-2xl font-semibold'>{movieData.tittle}</div>
                        <div className='flex gap-2 justify-center md:justify-start' >
                            {movieData.genre.split(",").slice(0,2).map(val=>(
                                <div className='px-5 h-8 bg-gray-400 rounded-3xl flex justify-center items-center' >{val}</div>
                             ))}
                        </div>
                        <div className='flex md:flex-row flex-col items-center md:gap-44 gap-5 md:justify-between'>
                            <div className='text-2xl md:text-base'>Regular - 13:00 PM</div>
                            <Link to="/homepage"><div className='w-28 h-8 flex justify-center items-center bg-orange-400 rounded-2xl text-black hover:bg-orange-600'>Change</div></Link>
                        </div>
                    </div>
                </div>
                <span className='text-2xl font-bold'>Choose Your Seat</span>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <span className='text-sm text-gray-500 font-semibold'>Screen</span>
                    <div className='border border-gray-500 rounded-3xl  w-screen max-w-lg h-1 ml-6'></div>
                    <div className='flex justify-between'>
                        <div className='h-full w-0.5 bg-green-500 md:hidden block' />
                        <div className='grid grid-cols-8 gap-1.5'>
                            <button className='invisible md:visible' >A</button>
                            <button onClick={()=>getSeat("A1 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A1 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A1 ,")}></button>
                            <button onClick={()=>getSeat("A2 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A2 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A2 ,")} ></button>
                            <button onClick={()=>getSeat("A3 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A3 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A3 ,")} ></button>
                            <button onClick={()=>getSeat("A4 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A4 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A4 ,")} ></button>
                            <button onClick={()=>getSeat("A5 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A5 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A5 ,")} ></button>
                            <button onClick={()=>getSeat("A6 ,")} className='w-7 aspect-square bg-gray-700 cursor-not-allowed rounded' ></button>
                            <button onClick={()=>getSeat("A7 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A7 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A7 ,")} ></button>
                            <button className='invisible md:visible' >B</button>
                            <button onClick={()=>getSeat("B1 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B1 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B1 ,")} ></button>
                            <button onClick={()=>getSeat("B2 ,")} className='w-7 aspect-square bg-gray-700 cursor-not-allowed rounded' ></button>
                            <button onClick={()=>getSeat("B3 ,")} className='w-7 aspect-square bg-gray-700 cursor-not-allowed rounded' ></button>
                            <button onClick={()=>getSeat("B4 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B4 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B4 ,")} ></button>
                            <button onClick={()=>getSeat("B5 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B5 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B5 ,")} ></button>
                            <button onClick={()=>getSeat("B6 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B6 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B6 ,")} ></button>
                            <button onClick={()=>getSeat("B7 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B7 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B7 ,")} ></button>
                            <button className='invisible md:visible' >C</button>
                            <button onClick={()=>getSeat("C1 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C1 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C1 ,")} ></button>
                            <button onClick={()=>getSeat("C2 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C2 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C2 ,")} ></button>
                            <button onClick={()=>getSeat("C3 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C3 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C3 ,")} ></button>
                            <button onClick={()=>getSeat("C4 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C4 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C4 ,")} ></button>
                            <button onClick={()=>getSeat("C5 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C5 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C5 ,")} ></button>
                            <button onClick={()=>getSeat("C6 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C6 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C6 ,")} ></button>
                            <button onClick={()=>getSeat("C7 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C7 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C7 ,")} ></button>
                            <button className='invisible md:visible' >D</button>
                            <button onClick={()=>getSeat("D1 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D1 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D1 ,")} ></button>
                            <button onClick={()=>getSeat("D2 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D2 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D2 ,")} ></button>
                            <button onClick={()=>getSeat("D3 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D3 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D3 ,")} ></button>
                            <button onClick={()=>getSeat("D4 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D4 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D4 ,")} ></button>
                            <button onClick={()=>getSeat("D5 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D5 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D5 ,")} ></button>
                            <button onClick={()=>getSeat("D6 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D6 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D6 ,")} ></button>
                            <button onClick={()=>getSeat("D7 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D7 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D7 ,")} ></button>
                            <button className='invisible md:visible' >E</button>
                            <button onClick={()=>getSeat("E1 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E1 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E1 ,")} ></button>
                            <button onClick={()=>getSeat("E2 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E2 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E2 ,")} ></button>
                            <button onClick={()=>getSeat("E3 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E3 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E3 ,")} ></button>
                            <button onClick={()=>getSeat("E4 ,")} className='w-7 aspect-square bg-gray-700 cursor-not-allowed rounded' ></button>
                            <button onClick={()=>getSeat("E5 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E5 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E5 ,")} ></button>
                            <button onClick={()=>getSeat("E6 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E6 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E6 ,")} ></button>
                            <button onClick={()=>getSeat("E7 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E7 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E7 ,")} ></button>
                            <button className='invisible md:visible' >F</button>
                            <button onClick={()=>getSeat("F1 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F1 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F1 ,")} ></button>
                            <button onClick={()=>getSeat("F2 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F2 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F2 ,")} ></button>
                            <button onClick={()=>getSeat("F3 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F3 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F3 ,")} ></button>
                            <button onClick={()=>getSeat("F4 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F4 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F4 ,")} ></button>
                            <button onClick={()=>getSeat("F5 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F5 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F5 ,")} ></button>
                            <button onClick={()=>getSeat("F6 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F6 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F6 ,")} ></button>
                            <button onClick={()=>getSeat("F7 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F7 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F7 ,")} ></button>
                            <button className='invisible md:visible' >G</button>
                            <button onClick={()=>getSeat("G1 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G1 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G1 ,")} ></button>
                            <button onClick={()=>getSeat("G2 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G2 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G2 ,")} ></button>
                            <button onClick={()=>getSeat("G3 ,")} className='w-7 aspect-square bg-gray-700 cursor-not-allowed rounded' ></button>
                            <button onClick={()=>getSeat("G4 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G4 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G4 ,")} ></button>
                            <button onClick={()=>getSeat("G5 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G5 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G5 ,")} ></button>
                            <button onClick={()=>getSeat("G6 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G6 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G6 ,")} ></button>
                            <button onClick={()=>getSeat("G7 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G7 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G7 ,")} ></button>
                            <button></button>
                            <button className='md:flex items-end justify-center hidden' >1</button>
                            <button className='md:flex items-end justify-center hidden' >2</button>
                            <button className='md:flex items-end justify-center hidden' >3</button>
                            <button className='md:flex items-end justify-center hidden' >4</button>
                            <button className='md:flex items-end justify-center hidden' >5</button>
                            <button className='md:flex items-end justify-center hidden' >6</button>
                            <button className='md:flex items-end justify-center hidden' >7</button>
                        </div>
                        <div className='grid grid-cols-8 gap-1.5'>
                            <button></button>
                            <button onClick={()=>getSeat("A8 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A8 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A8 ,")}></button>
                            <button onClick={()=>getSeat("A9 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A9 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A9 ,")}></button>
                            <button onClick={()=>getSeat("A10 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A10 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A10 ,")}></button>
                            <button onClick={()=>getSeat("A11 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A11 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A11 ,")}></button>
                            <button onClick={()=>getSeat("A12 ,")} className='w-7 aspect-square bg-gray-700 cursor-not-allowed  rounded'></button>
                            <button onClick={()=>getSeat("A13 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A13 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A13 ,")}></button>
                            <button onClick={()=>getSeat("A14 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("A14 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("A14 ,")}></button>
                            <button></button>
                            <button onClick={()=>getSeat("B8 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B8 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B8 ,")}></button>
                            <button onClick={()=>getSeat("B9 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B9 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B9 ,")}></button>
                            <button onClick={()=>getSeat("B10 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B10 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B10 ,")}></button>
                            <button onClick={()=>getSeat("B11 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B11 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B11 ,")}></button>
                            <button onClick={()=>getSeat("B12 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B12 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B12 ,")}></button>
                            <button onClick={()=>getSeat("B13 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B13 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B13 ,")}></button>
                            <button onClick={()=>getSeat("B14 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("B14 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("B14 ,")}></button>
                            <button></button>
                            <button onClick={()=>getSeat("C8 ,")}  className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C8 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C8 ,")}></button>
                            <button onClick={()=>getSeat("C9 ,")}  className='w-7 aspect-square bg-gray-700 cursor-not-allowed rounded'></button>
                            <button onClick={()=>getSeat("C10 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C10 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C10 ,")}></button>
                            <button onClick={()=>getSeat("C11 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C11 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C11 ,")}></button>
                            <button onClick={()=>getSeat("C12 ,")} className='w-7 aspect-square bg-gray-700 cursor-not-allowed rounded'></button>
                            <button onClick={()=>getSeat("C13 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C13 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C13 ,")}></button>
                            <button onClick={()=>getSeat("C14 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("C14 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("C14 ,")}></button>
                            <button></button>
                            <button onClick={()=>getSeat("D8 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D8 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D8 ,")}></button>
                            <button onClick={()=>getSeat("D9 ,")} className='w-7 aspect-square bg-gray-700  cursor-not-allowed rounded'></button>
                            <button onClick={()=>getSeat("D10 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D10 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D10 ,")}></button>
                            <button onClick={()=>getSeat("D11 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D11 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D11 ,")}></button>
                            <button onClick={()=>getSeat("D12 ,")} className='w-7 aspect-square bg-gray-700 cursor-not-allowed  rounded'></button>
                            <button onClick={()=>getSeat("D13 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D13 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D13 ,")}></button>
                            <button onClick={()=>getSeat("D14 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("D14 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("D14 ,")}></button>
                            <button></button>
                            <button onClick={()=>getSeat("E8 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E8 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E8 ,")}></button>
                            <button onClick={()=>getSeat("E9 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E9 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E9 ,")}></button>
                            <button onClick={()=>getSeat("E10 ,")} className='w-16 h-7 bg-pink-300 col-span-2 cursor-not-allowed rounded'></button>
                            <button onClick={()=>getSeat("E11 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E11 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E11 ,")}></button>
                            <button onClick={()=>getSeat("E12 ,")} className='w-7 aspect-square bg-gray-700 cursor-not-allowed rounded'></button>
                            <button onClick={()=>getSeat("E13 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("E13 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("E13 ,")}></button>
                            <button></button> 
                            <button onClick={()=>getSeat("F8 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F8 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F8 ,")}></button>
                            <button onClick={()=>getSeat("F9 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F9 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F9 ,")}></button>
                            <button onClick={()=>getSeat("F10")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F10 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F10 ,")}></button>
                            <button onClick={()=>getSeat("F11")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F11 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F11 ,")}></button>
                            <button onClick={()=>getSeat("F12")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F12 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F12 ,")}></button>
                            <button onClick={()=>getSeat("F13")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F13 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F13 ,")}></button>
                            <button onClick={()=>getSeat("F14")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("F14 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("F14 ,")}></button>
                            <button></button>
                            <button onClick={()=>getSeat("G8 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G8 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G8 ,")}></button>
                            <button onClick={()=>getSeat("G9 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G9 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G9 ,")}></button>
                            <button onClick={()=>getSeat("G10 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G10 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G10 ,")}></button>
                            <button onClick={()=>getSeat("G11 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G11 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G11 ,")}></button>
                            <button onClick={()=>getSeat("G12 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G12 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G12 ,")}></button>
                            <button onClick={()=>getSeat("G13 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G13 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G13 ,")}></button>
                            <button onClick={()=>getSeat("G14 ,")} className={`w-7 aspect-square  hover:bg-slate-400 rounded ${isSeatSelected("G14 ,") ? 'bg-blue-700 cursor-not-allowed' : 'bg-gray-200'}`} 
                            disabled={isSeatSelected("G14 ,")}></button>
                            <button></button>
                            
                            <button className='md:flex justify-center items-end hidden'>8</button>
                            <button className='md:flex justify-center items-end hidden'>9</button>
                            <button className='md:flex justify-center items-end hidden'>10</button>
                            <button className='md:flex justify-center items-end hidden'>11</button>
                            <button className='md:flex justify-center items-end hidden'>12</button>
                            <button className='md:flex justify-center items-end hidden'>13</button>
                            <button className='md:flex justify-center items-end hidden'>14</button>
                        </div>
                    </div>
                        <div className='w-full md:hidden flex justify-between pl-9'>
                        <div className='w-56 h-0.5 bg-orange-400' ></div>
                        <div className='w-60 h-0.5 bg-orange-400' ></div>
                        </div>
                </div>
                <span className='text-lg font-semibold'>Seating key</span>
                <div className='flex justify-between w-80 text-2xl md:hidden'>
                    <div className='flex gap-2 items-center'>
                    <div><IoArrowDown/></div>
                    <div>A - G</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                    <div><IoArrowForward /></div>
                    <div>1 - 14</div>
                    </div>
                </div>
                <div className='flex gap-20 md:gap-10 text-sm md:w-full w-96 flex-wrap'>
                    <div className='flex gap-4 items-center'>
                    <div className='md:w-7 w-10 aspect-square bg-gray-200 rounded'></div>
                    <div className='text-2xl'>Available</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='md:w-7 w-10 aspect-square bg-blue-700 rounded'></div>
                        <div className='text-2xl'>Selected</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='md:w-7 w-10 aspect-square bg-pink-300 rounded'></div>
                        <div className='text-2xl'>Love nest</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='md:w-7 w-10 aspect-square bg-gray-700 rounded'></div>
                        <div className='text-2xl'>Sold</div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 md:hidden'>
                    <div className='flex justify-between'>
                    <div>Choosed</div>
                    <div>C4</div>
                    </div>
                    <div className='flex justify-between'>
                        <select className='w-64 h-14 bg-gray-200 rounded-xl px-6'  name="" id="">
                            <option value="">C</option>
                        </select>
                        <select className='w-64 h-14 bg-gray-200 rounded-xl px-6' name="" id="">
                            <option value="">4</option>
                        </select>
                    </div>
                    <button className='w-full h-14 border border-orange-300 rounded-2xl'>Add new seat</button>
                </div>
            </div>
            <CardOrder/>
        </div>
        <button onClick={()=>Setshow(!isShow)} className='ml-[-20px] block md:hidden py-4 rounded-lg text-lg font-semibold text-white px-[270px] bg-orange-500'>Submit</button>
    </main>
    <Footer/>
    </>
)
}

export default OrderPage
