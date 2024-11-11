import React from 'react'
import { FaEye } from "react-icons/fa";
import logo from '../assets/imagelogo.png'
import BtnLgn from '../component/BtnLgn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addProfile } from '../redux/reducers/profile';
import { authentic } from '../redux/reducers/auth';



const loginFormSchema = yup.object({
    email: yup.string().email('Email Invalid').min(8, 'Your email must be 8 character on length')
    .required('Email is required'),
    password: yup.string().min(8, 'Your email must be 8 character on length')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character')
    .required('Password is required')
})


function Login() {
const dispatch = useDispatch()
const navigate = useNavigate();
const regis = useSelector((state) => state.users.data);
const token = useSelector((state) => state.auth.token);
const {register, handleSubmit, formState:{errors}} =useForm({resolver: yupResolver(loginFormSchema)})
const onSubmit = (value)=>{
    const found = regis.find(user=>user.email === value.email)
    if(!found){
        window.alert('You Must Register')
        navigate('/register')
        return
    } 
    if(value.password !== found.password){
        window.alert('Your Password Invalid')
        return
    }
    dispatch(authentic('login'))
    dispatch(addProfile(value))
    
}
React.useEffect(() => {
    if (token !== '') {
    navigate('/');
    }
}, [token]);


return (
    <>
    <div className='bg-[url(./assets/bg.svg)] relative bg-cover flex flex-col gap-5 w-screen h-full pb-10 justify-center items-center '>
    <div className='w-screen h-[950px] bg-cover bg-black absolute  opacity-50'></div>
    <div className='relative flex flex-col justify-center items-center'>
    <img className='w-76 h-24' src={logo} alt="" />
    <div className='rounded-xl bg-white px-14 pt-7 pb-10 flex flex-col justify-between gap-6 w-full max-w-96 md:max-w-2xl'>
            <div className='text-3xl font-bold'>Welcome Back👋</div>
            <div className='text-lg text-gray-600 max-w-sm'>Sign in with your data that you entered during
            your registration</div>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
            <label className='text-xl' htmlFor="email">Email</label>
            <div className='w-full'>
            <input className={'outline-none w-full text-gray-700 border-gray-400 border box-border rounded py-5 pl-6 pr-56' + 
            (errors.email?.message ? ' border-red-600 placeholder:text-red-400':'')} 
            type="email" id='email' {...register('email', {required:true})} placeholder='Enter your email' />
            </div>            
            <div>
                {errors.email?.message && 
                (<div className='w-full max-w-md bg-red-300 pl-3'>
                <span className=' text-red-700'>{errors.email?.message}</span>
                </div>
                )}
            </div>
            <label className='text-xl' htmlFor="password">Password</label>
            <div className='flex justify-between items-center border-gray-400 border w-full rounded pr-5'>
        <input className={'outline-none text-gray-700 w-full box-border py-5 pl-6 ' + 
            (errors.password?.message ? ' placeholder:text-red-400':'')}  type="password" id='password' {...register('password', {required:true})} placeholder='Enter your password' />
            <FaEye className={'h-7 w-7 text-gray-400'
                + (errors.password?.message ? ' text-red-600' : '')
            }/>
            </div>
            <div>
                {errors.password?.message && 
                (<div className='w-full max-w-md bg-red-300 pl-3'>
                <span className=' text-red-700'>{errors.password?.message}</span>
                </div>
            )}
            </div>
            <span className='text-right text-blue-700 text-base'>Forgot your password?</span>
            <div>
            <button className='bg-orange-400 rounded-lg px-10 w-full max-w-md h-16 hover:bg-orange-700 text-white'>
            Login</button>
            </div>
            </form>
            <div className='flex items-center gap-2'>
                <hr className='border border-gray-300 w-48' />
                <span className='text-xs'>Or</span>
                <hr className='border border-gray-300 w-48' />
            </div>
            <BtnLgn />
        </div>
        </div>
    </div>
    </>
)
}

export default Login
