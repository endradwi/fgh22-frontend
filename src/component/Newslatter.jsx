import React from 'react'
import shape from '../assets/shape.svg'

function Newslatter() {
return (
<div>
<div className='px-40 py-20 bg-orange-600 rounded-2xl max-w-md md:max-w-none ml-14 md:ml-0 flex flex-col items-center gap-12'>
        <div className='text-5xl text-white font-normal text-center'>Subscribe to our newsletter</div>
        <form className='flex gap-3 relative flex-col md:flex-row'>
            <label htmlFor="name"></label>
            <input  className='py-4 px-5 outline-none rounded bg-transparent border-white border placeholder-white text-white' type="text" id='name' name='name' placeholder='First name' />
            <label htmlFor=""></label>
            <input  className='py-4 px-5 outline-none rounded bg-transparent border-white border placeholder-white text-white' type="email" id='email' name='email' placeholder='Email address'/>
            <button className='py-4 px-11 bg-white rounded-lg text-orange-700' >Click Me</button>
            <img className='absolute right-[-500px] bottom-[-80px]' src={shape} alt="" />
        </form>
    </div> 
</div>
)
}

export default Newslatter
