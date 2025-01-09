import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../component/Navbar'
import { FaEye } from "react-icons/fa";
import CardProfile from '../component/CardProfile';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addProfile } from '../redux/reducers/profile';


function Profile() {
const dispatch = useDispatch()
const token = useSelector(state=>state.auth.token)
const profile = useSelector(state=>state.profile.data)
// console.log(profile)
const {register, handleSubmit} =useForm({
    defaultValues: {
        firstname: profile.first_name,
        lastname: profile.last_name,
        phonenumber: profile.last_name,
        email: profile.email
    }
})
const headers = {
'Content-type' : 'multipart/form-data',
}

if (token) {
    headers["Authorization"] = `Bearer ${token}`
}


const onsubmit = (value) =>{
    const formData = new FormData
    console.log(value)
    console.log(formData)
    fetch ("http://localhost:8888/profile", {
        method: "PATCH",
        body: formData,
        headers
    })
    dispatch(addProfile(value))
}
React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);
return (
    <>
    <Navbar tittle="navbarprofile" />
    <div className='bg-white pt-6 flex md:hidden justify-center gap-14  rounded-lg'>
        <div className='border-b-orange-500 border-b-2 pb-6'>Account Settings</div>
        <Link to="/orderhistory">Order History</Link>
    </div>
    <main className='pt-14 px-20 pb-24 flex gap-8 justify-center bg-gray-300'>
    <CardProfile />
    <div className='hidden md:flex flex-col gap-12'>
        <div className='bg-white pt-6 flex gap-14 pl-12 pr-[487px] rounded-lg'>
            <div className='border-b-orange-500 border-b-2 pb-6'>Account Settings</div>
            <Link to="/orderhistory">Order History</Link>
        </div>
        <form className='flex flex-col gap-10' onSubmit={handleSubmit(onsubmit)}>
        <div className='bg-white pt-6 pb-16 flex flex-col gap-12  px-8 rounded-lg'>
            <div className='flex flex-col gap-4'>
            <span>Details Information</span>
            <hr></hr>
            </div>
                <fieldset className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-3'>
                <label htmlFor="firstname">First Name</label>
                <div>
                    {profile.first_name !== "" ? <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' 
                    type="text" {...register('firstname', {required:true})} id='firstname' placeholder={profile.first_name}/> : <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' 
                    type="text" {...register('firstname', {required:true})} id='firstname' placeholder='first name'/>}
                </div>
                </div>
                <div className='flex flex-col gap-3'>
                <label htmlFor="lastname">Last Name</label>
                <div>
                    {profile.last_name !== "" ? <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' 
                    type="text" {...register('lastname', {required:true})} id='lastname' placeholder={profile.last_name}/> : <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' 
                    type="text" {...register('lastname', {required:true})} id='lastname' placeholder='last name'/>}
                </div>
                </div>
                <div className='flex flex-col gap-3'>
                <label htmlFor="">E-mail</label>
                <div>
                    <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44 placeholder:text-gray-800' 
                    type="text" placeholder={profile.email}/>
                </div>
                </div>
                <div className='flex flex-col gap-3'>
                <label htmlFor="phonenumber">Phone Number</label>
                <div className='py-5 pl-6 border rounded-xl border-gray-300 flex gap-5'>
                    <span className='border-r-2 border-r-gray-300 pr-5 text-gray-300'>+62</span>
                    {profile.phone_number !== "" ? <input className=' outline-none' type="tel"  
                    {...register('phonenumber', {required:true})} id='phonenumber' placeholder={profile.phone_number}/> : <input className=' outline-none' type="tel"  
                    {...register('phonenumber', {required:true})} id='phonenumber' placeholder='82174589324'/>}
                </div>
                </div>
                </fieldset>
        </div>
        <div className='bg-white pt-6 pb-16 flex flex-col gap-12  px-8 rounded-lg'>
            <div className='flex flex-col gap-4'>
            <span>Account and Privacy</span>
            <hr />
            </div>
            
                <fieldset className='flex gap-8'>
                <div className='flex flex-col gap-3'>
                <label htmlFor="">New Password</label>
                <div className='flex py-5 w-96 border rounded-xl border-gray-300 justify-between px-7'>
                    <input className=' outline-none' type="text" placeholder='Write your password'/>
                    <FaEye className='h-7 w-7 text-gray-400'/>
                </div>
                </div>
                <div className='flex flex-col gap-3'>
                <label htmlFor="">Confirm Password</label>
                <div className='flex py-5 w-96 border rounded-xl border-gray-300 justify-between px-7'>
                    <input className='outline-none' type="text" placeholder='Confirm your password'/>
                    <FaEye className='h-7 w-7 text-gray-400'/>
                </div>
                </div>
                </fieldset>
            
        </div>
        <button className='bg-orange-400 hover:bg-orange-600 text-white w-80 h-14 flex justify-center items-center rounded-xl'> 
            Update changes</button>
        </form>
    </div>
    </main>
    </>
)
}

export default Profile
