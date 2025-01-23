import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { addMovie } from '../redux/reducers/movie';

function MovieCard(props) {
  const [image, Setimage] = useState([])
  const dispatch = useDispatch()

  useEffect(()=> {
    fetch('http://localhost:8888/movies')
    .then(res=>res.json())
    .then(response=>{
      Setimage(response.results)})
    
  },[])
  
  return (
    <div>
            <div className={`${props.layout} gap-3`}>
            {image.map((data=>(  
              <div className='flex flex-col'>
                <div className=' group w-[195px] h-[405px] rounded-xl overflow-hidden relative'>
                <img className='w-[264px] h-[405px] absolute' src={`http://localhost:8888/movies/image/${data.image}`} alt={data.tittle} />
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] invisible group-hover:visible absolute flex 
                justify-center items-center flex-col gap-5'>
                <Link to={`/movies/${data.id}`} className='w-44 h-12 bg-orange-600 flex justify-center items-center rounded-lg 
                    text-white border-orange-700 border-2'>Detail</Link>
                    <div className='w-44 h-12  flex justify-center items-center rounded-lg 
                    text-white border-orange-700 border-2'>Buy Tiket</div>
                </div>
              </div>
              <div className='flex justify-start'>
              {data.tittle}</div>
              <div className='text-lg text-blue-700 font-bold'>
              {props.date && data.release_date.split("T").slice(0,1)}
            </div>
              <div className='flex gap-3'>
                  {data.genre.split(",").slice(0,2).map((val)=>(
                    <span className='w-24 h-8 bg-orange-400 rounded-2xl text-white text-xs flex justify-center items-center font-semibold'>
                {val}
                </span>
                  ))}
            </div>
              </div>              
            )))}
            
        </div>
    </div>
  )
}

export default MovieCard
