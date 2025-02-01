import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FiCalendar } from "react-icons/fi";
import { useForm } from 'react-hook-form';
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Navbar from '../component/Navbar';
import { API_URL } from '../config/api-config';


function AdminPage() {
    const [movie, setMovie] = useState([])
    const [info, setInfo] = useState({})
    const {handleSubmit, register} = useForm()

React.useEffect(()=>{
    fetch(`${API_URL}/movies`)
    .then(res=>res.json())
    .then(response => {
        setMovie(response.results)
        setInfo(response.page_info)
        console.log(response.page_info)
    })
}, [])
    const renderItem = (value, index) => {
        return (
            <tr key={`list-movie-${value.id}-${index}`}>
                <td>{value.id}</td>
                <td ><img className='h-12 w-10' src={`${API_URL}/movies/image/${value.image}`} alt="" /></td>
                <td>{value.tittle}</td>
                <td>{value.genre}</td>
                <td>{value.release_date}</td>
                <td>{value.Duration}</td>
                <td className='p-5 flex gap-2'>
                    <div className='py-2 px-2 text-black rounded-xl bg-orange-600'><FaEye /> </div>
                    <div className='py-2 px-2 text-black rounded-xl bg-orange-400'><FaPen /></div>
                    <div className='py-2 px-2 text-black rounded-xl bg-red-600'><FaTrash /> </div>
                </td>
            </tr>
        ) 
    }
    const searchMovie = (val) =>{
        const url = new URL(`${API_URL}/movies`)
        url.searchParams.append("search", val.search)
        fetch(url)
        .then(res=>res.json())
        .then(response => {
            setMovie(response.results)
            setInfo(response.page_info)
        })
    }
// React.useEffect(() => {
//     window.scrollTo(0, 0);
// }, []);
return (
    <>
    <Navbar tittle="navbaradmin" name='black' />
    <main className='pt-14 px-20 pb-24 flex justify-center bg-gray-300'>
    <div className='bg-white flex flex-col rounded-2xl gap-10 pt-7 pr-9 pb-10 pl-14'>
        <div className='flex justify-between items-center'>
            <span className='text-2xl font-bold'>List Movie</span>
            <form className='flex gap-3.5' onSubmit={handleSubmit(searchMovie)}>
                <label htmlFor="" >
                <div className='rounded-xl md:flex items-center gap-10 hidden'>
                {/* <FiCalendar className='text-gray-600' /> */}
                {/* <select name="" id="" className='text-base font-semibold bg-transparent text-gray-600 outline-none '> */}
                    {/* <option value="">November 2023</option> */}
                {/* </select> */}
                <input type="text" {...register("search")} placeholder='Search movie...' 
                className='h-full w-full px-5 py-5 rounded-xl box-content border border-black' />
                <button className='hidden'>Submit</button>
                </div>
                </label>
               <Link to="/addmovie" className='h-14 w-36 bg-orange-600 text-white rounded-xl flex justify-center items-center'><FaPlus className='block md:hidden text-2xl mr-5'/>Add Movies</Link>
            </form>
            
            </div>
            <form className='bg-gray-300 rounded-xl py-3.5 px-5 flex items-center gap-10 md:hidden'>
                <FiCalendar className='text-gray-600' />
                <select name="" id="" className='text-base font-semibold bg-transparent text-gray-600 outline-none '>
                    <option value="">November 2023</option>
                </select>
            </form>
        <div>
        <table>
            <thead>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>No</td>
                    <td className='p-5'>Thumbnail</td>
                    <td className='p-5'>Movie Name</td>
                    <td className='p-5'>Category</td>
                    <td className='p-5'>Released Date</td>
                    <td className='p-5'>Duration</td>
                    <td className='p-5'>Action</td>
                </tr>
            </thead>
            <tbody>
                {movie.map(renderItem)}
            </tbody>
        </table>
        </div>
        <div className='flex gap-2 justify-center'>
        {[...Array(info.total_page)].map((_, index) => (
        <button className='text-white bg-orange-600 rounded-lg flex justify-center items-center py-1 px-3.5' key={index}>{index + 1}</button>
        ))}
            {/* <button className='text-gray-600 bg-orange-600 rounded-lg flex justify-center items-center py-1 px-3.5'>1</button> */}
            {/* <button className='text-gray-600 bg-gray-300 rounded-lg flex justify-center items-center py-1 px-3.5'>3</button> */}
            {/* <button className='text-gray-600 bg-gray-300 rounded-lg flex justify-center items-center py-1 px-3.5'>4</button> */}
        </div>
    </div>
    </main>
    </>
)
}

export default AdminPage
