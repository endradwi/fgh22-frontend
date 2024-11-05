import React from 'react'
import star from '../assets/star.svg'
import lingkaran from '../assets/ellipse.svg'
import profile from '../assets/profileimg.png'
import ProfilePage from './ProfilePage'

function CardProfile() {
    const [isShow, Setshow] = React.useState(false)
  return (
    <div>
        {isShow &&(
            <>
            <ProfilePage/>
            </>
        )

        }
    <div className='flex flex-col gap-0.5'>
        <div className='bg-white px-10 py-10 rounded-t-lg flex flex-col gap-8 justify-center items-center'>
            <div className='flex gap-40 items-center justify-between'>
                <div>INFO</div>
                <div>. . .</div>
            </div>
            <img className='w-[136px] aspect-square rounded-full' src={profile} alt="" />
            <div className='flex flex-col justify-center items-center gap-1'>
            <div>Jonas El Rodriguez</div>
            <div>Moviegoers</div>
            </div>
        </div>
        <div className='bg-white px-10 py-10 rounded-b-lg md:hidden flex flex-col gap-8'>
            <span>Loyalty Points</span>
            <div className='bg-orange-700 py-5 pl-5 pr-32 rounded-xl flex flex-col gap-5 text-white static'>
                <div>Moviegoers</div>
                <div>320 
                    <span>points</span>
                </div>
                <img className='absolute left-[390px] top-[610px]' src={lingkaran} alt="" />
                <img className='absolute left-[370px] top-[600px]' src={lingkaran} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <div>180 points become a master</div>
                <div className='bg-gray-200 w-64 h-4 rounded-xl'>
                    <div className='bg-orange-600 w-24 h-4 rounded-xl'></div>
                </div>
            </div>
            <button onClick={()=>Setshow(!isShow)} className='border border-orange-400 text-center py-3 rounded-xl block md:hidden'>Edit Profile</button>
        </div>
        <div className='bg-white px-10 py-10 rounded-b-lg hidden md:flex flex-col gap-8'>
            <span>Loyalty Points</span>
            <div className='bg-orange-700 py-5 pl-5 pr-32 rounded-xl flex flex-col gap-5 text-white relative'>
                <div>Moviegoers</div>
                <div>320 
                    <span>points</span>
                </div>
                <img className='absolute right-[-20px] top-[-10px]' src={lingkaran} alt="" />
                <img className='absolute right-[-10px] top-[-30px]' src={lingkaran} alt="" />
                <img className='absolute right-1 top-0' src={star} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <div>180 points become a master</div>
                <div className='bg-gray-200 w-64 h-4 rounded-xl'>
                    <div className='bg-orange-600 w-24 h-4 rounded-xl'></div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardProfile
