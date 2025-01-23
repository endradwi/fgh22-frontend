import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { IoIosSearch } from "react-icons/io";
import Newslatter from '../component/Newslatter'
import { IoMdArrowRoundForward } from "react-icons/io";
import MovieCard from '../component/MovieCard'
import { useForm } from 'react-hook-form';

function Home() {
const [search, setSearch] = useState()
const {handleSubmit, register} = useForm()
const [info, setInfo] = useState({})
React.useEffect(()=>{
    fetch("http://localhost:8888/movies")
    .then(res=>res.json())
    .then(response => {
        setSearch(response.results)
        setInfo(response.page_info)
        // console.log(response.page_info)
    })
}, [])

// const renderItem = () => {
    // return (
        // <MovieCard layout={"grid grid-cols-5"}/>
    // ) 
// }

const getmovie =(search, page) =>{
    const url = new URL("http://localhost:8888/movies")
    url.searchParams.append("search", search)
    url.searchParams.append("page", page)
    fetch(url)
    .then(res=>res.json())
    .then(response => {
        setSearch(response.results)
        console.log(response.results)
        // setInfo(response.page_info)
    })
}
console.log(search)
// console.log(setSearch)
return (
    <>
    <Navbar tittle="navbarhome" />
    <div className='bg-[url(./assets/bg.svg)] w-screen h-96 bg-cover bg-center overflow-hidden '>
    <div className='w-screen h-96 bg-cover bg-black absolute  opacity-50'></div>
        <div className='flex gap-3 flex-col relative py-36 px-32'>
        <div className='text-lg text-white font-bold'>LIST MOVIE OF THE WEEK</div>
        <div className='text-5xl font-medium max-w-screen-sm text-white'>Experience the Magic of Cinema: Book Your Tickets Today</div>
        </div>
    </div>
    <main className='px-32 py-12 flex flex-col gap-12'>
    <div className='flex gap-5 '>
        <div>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit(getmovie)}>
                <label htmlFor="">Cari Event</label>
                <div className='border border-gray-300 rounded-xl flex pt-5 pb-6 pl-5 gap-5'>
                <IoIosSearch className='w-8 h-8' />
                <input type="text" placeholder='Search Movie...'{...register("search")}/>
                <button className='hidden'>Submit</button>
                </div>
            </form>
        </div>
        <div className='flex flex-col gap-6'>
            <div>Filter</div>
            <div className='flex gap-3'>
                  {/* <div className='flex gap-5 justify-center text-center text-white'> */}
                <span className='py-2.5 px-6 bg-orange-500 text-gray-300 rounded-lg'>Thriller</span>
                <span className='py-2.5 px-6 text-gray-300 rounded-lg'>Horror</span>
                <span className='py-2.5 px-6 text-gray-300 rounded-lg'>Romantic</span>
                <span className='py-2.5 px-6 text-gray-300 rounded-lg'>Adventure</span>
                <span className='py-2.5 px-6 text-gray-300 rounded-lg'>Sci-fi</span>
            </div>
        </div>
    </div>
    <div className='flex flex-col gap-8'>
    <div className='flex justify-center max-h-full w-full'>
    {/* {search.map(()=>(<MovieCard layout={"grid grid-cols-5"}/>))}       */}
    {/* {search.map((val)=>val)} */}
    </div>
    {/* <div className='flex flex-row-reverse gap-6 flex-wrap overflow-x-scroll justify-between'>
        <MovieCard/>        
    </div>
    <div className='flex gap-6 flex-wrap overflow-x-scroll justify-between'>
        <MovieCard/>        
    </div>
    <div className='flex flex-row-reverse gap-6 flex-wrap overflow-x-scroll justify-between'>
        <MovieCard/>        
    </div>
    <div className='flex gap-6 flex-wrap overflow-x-scroll justify-between'>
        <MovieCard/>        
    </div> */}
        <div className='flex justify-center gap-5'>
            {/* {[...Array(info.totalpage)].map((_, index)=> (
                    <button key={index} onClick={() => getmovie(getValues("search"), index+1)} disabled={index+1 === info.currentpage} className='flex w-10 h-10  bg-abu rounded-full justify-center items-center disabled:bg-orenMuda'>{index + 1}</button>
                  ))} */}
            <div className='bg-orange-400 aspect-square w-14 rounded-full flex justify-center items-center' >1</div>
            <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' >2</div>
            <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' >3</div>
            <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' >4</div>
            <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' ><IoMdArrowRoundForward className='h-8 w-8'/></div>
        </div>
    </div>
    <Newslatter/>
    </main>
    <Footer/>
    </>
)
}

export default Home
