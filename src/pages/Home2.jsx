import React, { useState } from 'react'
import {Link, useLocation, useSearchParams} from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { IoIosSearch } from "react-icons/io";
import Newslatter from '../component/Newslatter'
import { IoMdArrowRoundForward } from "react-icons/io";
import MovieCard from '../component/MovieCard'
import { useForm } from 'react-hook-form';
import { API_URL } from '../config/api-config';

function Home() {
const [movie, setmovie] = useState([])
const {handleSubmit, register} = useForm()
const [info, setInfo] = useState(0)
const [_, setSearchParams] = useSearchParams();
const [page, setPage] = React.useState(1);
const [isInitialLoad, setIsInitialLoad] = React.useState(true);
const [selectedGenre, setSelectedGenre] = React.useState("");
const location = useLocation();
const searchForm = useForm();

const fetchMovie = (search, page, limit = 10, genre = "") => {
    const url = new URL(`${API_URL}/movies`);
    const params = new URLSearchParams();

    if (search) {
      url.searchParams.append("search", search);
      params.set("search", search);
    }

    if (page) {
      url.searchParams.append("page", page);
      params.set("page", page);
    }

    url.searchParams.append("limit", limit);
    params.set("limit", limit);

    if (genre) {
      url.searchParams.append("genre", genre);
      params.set("genre", genre);
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setmovie(data.results);
        setInfo(data.page_info);
        setSearchParams(params);
        // console.log(info)
      })
      .catch((err) => console.error("Error fetching movies:", err));
  };

  function getmovie(title) {
    setPage(1);
    fetchMovie(title.search, 1, 10, selectedGenre);
  }

  function handleGenreClick(genre) {
    if (selectedGenre !== genre) {
      setSelectedGenre(genre);
      setPage(1);
      fetchMovie(searchForm.getValues("search"), 1, 10, genre);
    } else {
      setSelectedGenre("");
      setPage(1);
    }
  }
  console.log(info)

  React.useEffect(() => {
    const queryString = new URLSearchParams(location.search);

    if (isInitialLoad) {
      window.scrollTo(0, 0);
      setIsInitialLoad(false); // Tandai bahwa ini bukan load pertama lagi
    }

    fetchMovie(queryString.get("search"), page, 10, selectedGenre);
    if (queryString.get("search")) {
      searchForm.setValue("search", queryString.get("search"));
    }
  }, [location.search, selectedGenre]);
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
            {[
                "Thriller",
                "Horror",
                "Romantic",
                "Adventure",
                "Sci-fi",
                "Drama",
                "Action",
                "Comedy",
              ].map((genre) => (
                <div className="h-16 w-24 flex items-center" key={genre}>
                  <button
                    className={`h-10 w-24 rounded-xl ${
                      selectedGenre === genre
                        ? "bg-secondtix text-maintix"
                        : "hover:bg-secondtix hover:text-maintix"
                    }`}
                    onClick={() => handleGenreClick(genre)}
                  >
                    {genre}
                  </button>
                </div>
              ))}
            </div>
        </div>
    </div>
    <div className='flex flex-col gap-8'>
    <div className='flex justify-center max-h-full w-full'>
    <div className={`grid grid-cols-5 gap-10`}>
            {movie.map((data=>(  
              <div className='flex flex-col'>
                <div className=' group w-64 h-[405px] rounded-xl overflow-hidden relative'>
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
              {/* {props.date && data.release_date.split("T").slice(0,1)} */}
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
    
        <div className='flex justify-center gap-5'>
        {movie.length === 0 ? "0 Result" : `${info.total_data} Result`}
          {[...Array(info.total_page)].map((_, index) => (
            <button
              key={`page-${index + 1}`}
              onClick={() => {
                setPage(index + 1);
                fetchMovie(
                  searchForm.getValues("search"),
                  index + 1,
                  5,
                  selectedGenre
                );
              }}
              className={`w-10 h-10 ${
                page === index + 1
                  ? "rounded-full disabled bg-orange-400 text-maintix cursor-not-allowed"
                  : "rounded-full bg-gray-400 hover:bg-secondtix hover:text-maintix cursor-pointer"
              }`}
            >
              {index + 1}
            </button>
          ))}

        
            {/* <div className='bg-orange-400 aspect-square w-14 rounded-full flex justify-center items-center' >1</div> */}
            {/* <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' >2</div> */}
            {/* <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' >3</div> */}
            {/* <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' >4</div> */}
            {/* <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' ><IoMdArrowRoundForward className='h-8 w-8'/></div> */}
        </div>
    </div>
    <Newslatter/>
    </main>
    <Footer/>
    </>
)
}

export default Home
