import React from 'react'
import logo from '../assets/imagelogo.png'
import edu from '../assets/ebv.svg'
import cine from '../assets/Cine.svg'
import hiflix from '../assets/hiflix.svg'
import fb from '../assets/facebook.svg'
import ig from '../assets/instagram.svg'
import twit from '../assets/twitter.svg'
import yt from '../assets/youtube.svg'

function Footer() {
return (
    <div>
    <footer className='flex flex-col gap-12 px-6 md:px-32 py-12'>
    <div className='flex justify-center md:gap-0 gap-10 md:justify-between md:flex-row flex-col'>
        <div className='flex flex-col'>
        <img className='w-40' src={logo} alt="" />
        <div className='w-72'>Stop waiting in line. Buy tickets
        conveniently, watch movies quietly.</div>
        </div>
        <div className='flex flex-col gap-3.5 text-sm'>
        <div className='text-base font-bold '>Explore</div>
        <div className='flex flex-row md:flex-col gap-3.5 flex-wrap' >
        <div>Cinemas</div>
        <div>Movies List</div>
        <div>Notification</div>
        <div>My Tikets</div>
        </div>
        </div>
        <div className='flex flex-col gap-3.5 text-sm'>
        <div className='text-base font-bold'>Our Sponsor</div>
        <div className='flex md:flex-col flex-row gap-5 flex-wrap'>
        <img className='w-32' src={edu} alt="" />
        <img className='w-44' src={cine} alt="" />
        <img className='w-20' src={hiflix} alt="" />
        </div>
        </div>
        <div className='flex flex-col gap-3.5 text-sm pr-16'>
        <div className='text-base font-bold'>Follow us</div>
        <div className='flex md:flex-col flex-row'>
        <div className='flex gap-4'>
            <img src={fb} alt="" />
            <span className='hidden md:block' >Tickitz Cinema id</span>
        </div>
        <div className='flex gap-4'>
            <img src={ig} alt="" />
            <span className='hidden md:block' >tickitz.id</span>
        </div>
        <div className='flex gap-4'>
            <img src={twit} alt="" />
            <span className='hidden md:block' >tickitz.id</span>
        </div>
        <div className='flex gap-4'>
            <img src={yt} alt="" />
            <span className='hidden md:block' >Tickitz Cinema id</span>
        </div>
        </div>
        </div>
    </div>
    <div className='text-left md:text-center'>© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
    </div>
  )
}

export default Footer
