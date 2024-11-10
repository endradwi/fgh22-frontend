import React from 'react'
import graph from '../assets/graph.svg'
import Navbar from '../component/Navbar'

function Admin() {
React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);
return (
    <>    
    <Navbar tittle="navbaradmin" name="orange" />
    <main className='pt-14 px-20 pb-24 flex flex-col gap-8 justify-center items-center bg-gray-300'>
    <div className='bg-white pt-10 pl-14 pb-20 pr-24 rounded-xl gap-5 flex flex-col'>
        <span className='text-2xl font-bold'>Sales Chart</span>
        <form className='flex mb-4 gap-5 md:flex-row flex-col'>
            <div className='flex items-center md:flex-row flex-col md:gap-0 gap-3'>
                <label htmlFor=""/>
                <select className='py-2.5 px-5 bg-gray-400 rounded-md mr-2 w-full md:w-52 text-center md:text-left' name="" id="">
                    <option value="">Movies Name</option>
                </select>
                <label htmlFor=""/>
                <select className='py-2.5 pl-5 pr-3.5 bg-gray-400 rounded-md w-full text-center md:text-left' name="" id="">
                    <option value="">Weekly</option>
                </select>
            </div>
            <button className='w-full md:w-28 h-12 bg-orange-200 rounded-md'>Filter</button>
        </form>
        <div className='flex flex-col gap-11'>
        <span className='text-sm font-semibold'>Avengers: End Game</span>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-8 overflow-x-scroll'>
                    <div className='flex flex-col gap-16 items-end text-gray-400'>
                        <div>$800</div>
                        <div>$600</div>
                        <div>$400</div>
                        <div>$200</div>
                        <div>$0</div>
                    </div>
                    <img className='pt-28 w-[1000px]' src={graph} alt="" />
                </div>
                <div className='flex justify-between pl-20 pr-3 text-gray-400 items-end'>
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-white pt-10 pl-14 pb-20 pr-24 rounded-xl gap-5 flex flex-col'>
        <span className='text-2xl font-bold'>Ticket Sales</span>
        <form className='flex mb-4 gap-5 md:flex-row flex-col'>
            <div className='flex items-start md:items-center md:flex-row flex-col md:gap-0 gap-3'>
                <label htmlFor=""/>
                <select className='py-2.5 px-5 bg-gray-400 rounded-md mr-2 w-full text-center md:text-left md:w-56' name="" id="">
                    <option value="">Category</option>
                </select>
                <label htmlFor=""/>
                <select className='py-2.5 pl-5 pr-3.5 bg-gray-400 rounded-md w-full text-center md:text-left md:w-56' name="" id="">
                    <option value="">Location</option>
                </select>
            </div>
            <button className='w-full md:w-28 h-12 bg-orange-200 rounded-md'>Filter</button>
        </form>
        <div className='flex flex-col gap-11'>
        <span className='text-sm font-semibold'>Avengers: End Game</span>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-8 overflow-x-scroll'>
                    <div className='flex flex-col gap-16 items-end text-gray-400'>
                        <div>$800</div>
                        <div>$600</div>
                        <div>$400</div>
                        <div>$200</div>
                        <div>$0</div>
                    </div>
                    <img className='pt-28' src={graph} alt="" />
                </div>
                <div className='flex justify-between pl-20 pr-3 text-gray-400 items-end'>
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                </div>
            </div>
        </div>
    </div>
    </main>
    </>
)
}

export default Admin
