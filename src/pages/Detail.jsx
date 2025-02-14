import React, { useState } from 'react'
import edu from '../assets/ebv.svg'
import cine from '../assets/Cine.svg'
import hiflix from '../assets/hiflix.svg'
import { IoIosArrowUp } from "react-icons/io";
import {Link, useParams} from 'react-router-dom'
import Spider from '../assets/spider.svg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useDispatch } from 'react-redux';
import * as getMovie  from '../redux/reducers/movie';
import { API_URL } from '../config/api-config';

function Detail() {

const [movie, setmovie] = useState([])
const param = useParams()
const dispatch = useDispatch()

dispatch(getMovie.addMovie({
        movie_image : `${API_URL}/movies/image/${movie.image}` ,
        tittle : movie.tittle,
        genre : movie.genre,
}))

React.useEffect(() => {
    fetch(`${API_URL}/movies/${param.id}`)
    .then(res=>res.json())
    .then(response=>{
        if (response && response.results){
            setmovie(response.results)
            console.log(response.results)
        }
    })
    window.scrollTo(0, 0);
}, [param]);
return (
    <>
    <Navbar tittle="navbarhome" />
    <div className='flex bg-[url(./assets/bg_bioskop.jpeg)] bg-cover bg-center py-36 px-6 md:px-32 relative '>
        <div className='flex md:flex-row flex-col absolute gap-4 w-full max-w-[630px] md:max-w-5xl'>
            <img className='w-48 h-96' src={`${API_URL}/movies/image/${movie.image}`} alt={movie.tittle} />
            <div className='flex flex-col md:gap-48'>
                <div className='flex-1'></div>
                <div className='flex-1 flex flex-col gap-6 justify-center items-center md:justify-start md:items-start'>
                <div className='text-3xl font-bold'>{movie.tittle}</div>
                    <div className='flex gap-2'>
                        {/* {movie.genre.split(",").slice(0,2).map((val)=>( */}
                            <span className='py-1 px-5 rounded-2xl bg-orange-400'>{movie.genre}</span>
                            {/* // ))} */}
                    </div>
                    <div className='grid grid-cols-2 max-w-xl md:max-w-3xl'>
                        <div>
                            <div className='text-sm text-orange-300'>Release date</div>
                            <div className='text-base'>{movie.release_date}</div>
                        </div>
                        <div>
                            <div className='text-sm text-orange-300'> Directed by</div>
                            <div className='text-base'>{movie.author}</div>
                        </div>
                        <div>
                            <div className='text-sm text-orange-300'>Duration</div>
                            <div className='text-base'>{movie.duration}</div>
                        </div>
                        <div>
                            <div className='text-sm text-orange-300'>Casts</div>
                            <div className='text-base'>{movie.actors}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <main className='px-6 md:px-32 pb-12 pt-[1100px] md:pt-72 flex flex-col gap-12'>
    <div className='flex flex-col gap-2 '>
        <span className='text-xl font-semibold'>Synopsis</span>
        <p className='max-w-2xl text-orange-700'>{movie.synopsis}</p>
    </div>
    <div className='flex flex-col gap-9'>
    <div className='text-3xl font-bold hidden md:block'>Book Tickets</div>
    <div className='text-3xl font-bold flex justify-center md:hidden'>Showtimes and Tickets</div>
    <form className='flex md:flex-row flex-col justify-between'>
        <div className='flex flex-col gap-4'>
        <label htmlFor="">Choose Date</label>
        <select className='py-3.5 pl-16 pr-24 bg-gray-200 rounded outline-none' name="" id="">
            <option value="">21/07/20</option>
        </select>
        </div>
        <div className='flex flex-col gap-4'>
        <label htmlFor="">Choose Time</label>
        <select className='py-3.5 pl-16 pr-24 bg-gray-200 rounded outline-none' name="" id="">
                <option value="">08 : 30 AM</option>
        </select>
        </div>
        <div className='md:flex flex-col gap-4 hidden'>
        <label htmlFor="">Choose Location</label>
        <select className='py-3.5 pl-16 pr-24 bg-gray-200 rounded outline-none' name="" id="">
            <option value="">Purwokerto</option>
        </select>
        </div>
        <button className='bg-orange-400 hover:bg-orange-700 px-16 h-12 mt-10 rounded'>Filter</button>
    </form>
    </div>
    <div className=' flex flex-col gap-12'>
        <div className='flex gap-9 justify-center md:justify-start'>
            <span className='hidden md:block' >Choose Cinema</span>
            <span>39 Result</span>
        </div>
        <div className='flex justify-between md:flex-row flex-col gap-20'>
            <div className='border-1 border border-black py-9 px-8 flex flex-col gap-7 '>
            <div className=' flex justify-between items-center'>
            <div className='flex flex-col gap-3'>
            <img className='w-52 h-20' src={edu} alt="" />
            <div className='block md:hidden text-7xl font-bold' >EBV.id</div>
            <div className='block md:hidden font-extralight text-2xl'>Whatever street No.12, South Purwokerto</div>
            </div>
            <IoIosArrowUp className='block md:hidden'/>
            </div>
            <div className='py-10 border-t-2 border-gray-500 flex flex-col gap-7 md:hidden'>
                <span className='text-xl font-semibold'>REGULAR</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
                <span className='text-xl font-semibold'>Gold</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
                <span className='text-xl font-semibold'>Platinum</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
            </div>
            </div>
            <div className='border-1 border border-black py-9 px-8 flex flex-col gap-7 '>
            <div className=' flex justify-between items-center'>
            <div className='flex flex-col gap-3'>
            <img className='w-52 h-20' src={hiflix} alt="" />
            <div className='block md:hidden text-7xl font-bold' >EBV.id</div>
            <div className='block md:hidden font-extralight text-2xl'>Whatever street No.12, South Purwokerto</div>
            </div>
            <IoIosArrowUp className='block md:hidden'/>
            </div>
            <div className='py-10 border-t-2 border-gray-500 flex flex-col gap-7 md:hidden'>
                <span className='text-xl font-semibold'>REGULAR</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
                <span className='text-xl font-semibold'>Gold</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
                <span className='text-xl font-semibold'>Platinum</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
            </div>
            </div>
            <div className='border-1 border border-black py-9 px-8 flex flex-col gap-7 '>
            <div className=' flex justify-between items-center'>
            <div className='flex flex-col gap-3'>
            <img className='w-52 h-20' src={cine} alt="" />
            <div className='block md:hidden text-7xl font-bold' >EBV.id</div>
            <div className='block md:hidden font-extralight text-2xl'>Whatever street No.12, South Purwokerto</div>
            </div>
            <IoIosArrowUp className='block md:hidden'/>
            </div>
            <div className='py-10 border-t-2 border-gray-500 flex flex-col gap-7 md:hidden'>
                <span className='text-xl font-semibold'>REGULAR</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
                <span className='text-xl font-semibold'>Gold</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
                <span className='text-xl font-semibold'>Platinum</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
            </div>
            </div>
            <div className='border-1 border border-black py-9 px-8 flex flex-col gap-7 '>
            <div className=' flex justify-between items-center'>
            <div className='flex flex-col gap-3'>
            <img className='w-52 h-20' src={edu} alt="" />
            <div className='block md:hidden text-7xl font-bold' >EBV.id</div>
            <div className='block md:hidden font-extralight text-2xl'>Whatever street No.12, South Purwokerto</div>
            </div>
            <IoIosArrowUp className='block md:hidden'/>
            </div>
            <div className='py-10 border-t-2 border-gray-500 flex flex-col gap-7 md:hidden'>
                <span className='text-xl font-semibold'>REGULAR</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
                <span className='text-xl font-semibold'>Gold</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
                <span className='text-xl font-semibold'>Platinum</span>
                <div className='flex flex-wrap gap-5'>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >08:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                <div className='py-3 px-6 bg-gray-200 text-gray-500 rounded-3xl' >10:30 AM</div>
                </div>
            </div>
            </div>
        </div>
        <div className='flex justify-center gap-2'>
            <span className='flex justify-center items-center w-10 h-10 bg-orange-400 text-gray-300 rounded-md'>1</span>
            <span className='flex justify-center items-center w-10 h-10 bg-gray-400 text-gray-300 rounded-md'>2</span>
            <span className='flex justify-center items-center w-10 h-10 bg-gray-400 text-gray-300 rounded-md'>3</span>
            <span className='flex justify-center items-center w-10 h-10 bg-gray-400 text-gray-300 rounded-md'>4</span>
        </div>
        <div className='flex justify-center '>
       <Link className='py-4 px-14 bg-orange-500 rounded-xl text-white font-semibold md:block hidden' to="/orderpage">Book Now</Link>
        </div>
    </div>
    </main>
    <Footer/>
    </>
)
}

export default Detail
