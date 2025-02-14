import React from 'react'
import {Link} from 'react-router-dom'
import gpay from '../assets/gpay.svg'
import gopay from '../assets/gopay.svg'
import bca from '../assets/bca.svg'
import dana from '../assets/dana.svg'
import bri from '../assets/bri.svg'
import ovo from '../assets/ovo.svg'
import visa from '../assets/visa.svg'
import paypal from '../assets/paypal.svg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { IoCheckmark } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentM } from '../redux/reducers/movie';

function OrderPage() {
const [isShow, Setshow] = React.useState(false)
const movieData = useSelector(state=>state.movie.movie)
const seatData = useSelector(state=>state.movie.seat)
const [PaymentMethod, setPaymentMethod] = React.useState("");
const dispatch = useDispatch()
const setPM = (val) =>{
    if (!PaymentMethod.includes(val)) {
        setPaymentMethod(val); // Menambahkan kursi yang dipilih
    }
    dispatch(addPaymentM(val))
}
const isPaymentSelected = (payment) => PaymentMethod.includes(payment);
React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);
return (
    <>
    <Navbar tittle="navbarhome" />
    <main className='px-32 pt-8 pb-32 gap-8 flex flex-col justify-center items-center bg-gray-300'>
    <div className='flex items-center gap-4'>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className='bg-green-800 aspect-square rounded-full w-14 text-white flex justify-center items-center'><IoCheckmark className='h-7 w-7'/></div>
            <div>Dates And Time</div>
            </div>
            <div className='border-t-2 border-dashed border-black w-16'></div>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className=' bg-green-800 aspect-square rounded-full w-14 text-white flex justify-center items-center'><IoCheckmark className='h-7 w-7'/></div>
            <div>Seat</div>
            </div>
            <div className='border-t-2 border-dashed border-black w-16'></div>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className='bg-orange-400 aspect-square rounded-full w-14 text-white flex justify-center items-center'>3</div>
            <div>Payment</div>
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='flex flex-col px-6 pb-16 pt-10 bg-white rounded-md gap-8'>
                <span>Payment Info</span>
                <form className='flex flex-col gap-8'>
                    <label htmlFor="">DATE & TIME</label>
                    <div>
                        <input className='border-b-2 border-gray-300 w-96 md:w-screen max-w-2xl outline-none pb-2' type="text" placeholder='Tuesday, 07 July 2020 at 02:00pm' />
                    </div>
                    <label htmlFor="">MOVIE TITLE</label>
                    <div>
                        <input className='border-b-2 border-gray-300 w-96 md:w-screen max-w-2xl outline-none pb-2' type="text" value={movieData.tittle}/>
                    </div>
                    <label htmlFor="">CINEMA NAME</label>
                    <div>
                        <input className='border-b-2 border-gray-300 w-96 md:w-screen max-w-2xl outline-none pb-2' type="text" placeholder='CineOne21 Cinema' />
                    </div>
                    <label htmlFor="">NUMBER OF TICKETS</label>
                    <div>
                        <input className='border-b-2 border-gray-300 w-96 md:w-screen max-w-2xl outline-none pb-2' type="text" value={seatData.length + " pieces"}/>
                    </div>
                    <label htmlFor="">TOTAL PAYMENT</label>
                    <div>
                        <input className='border-b-2 border-gray-300 w-96 md:w-screen max-w-2xl outline-none pb-2' type="text" value={`$${seatData.length * 10}`}/>
                    </div>
                    <span>Personal Information</span>
                    <label htmlFor="">Full Name</label>
                    <div>
                        <input className='border border-gray-300 w-96 md:w-screen max-w-2xl outline-none py-5 pl-11' type="text" placeholder='Jonas El Rodriguez' />
                    </div>
                    <label htmlFor="">Email</label>
                    <div>
                        <input className='border border-gray-300 w-96 md:w-screen max-w-2xl outline-none py-5 pl-11' type="email" placeholder='jonasrodri123@gmail.com'/>
                    </div>
                    <label htmlFor="">Phone Number</label>
                    <div className='border border-gray-300 w-96 md:w-screen max-w-2xl outline-none py-5 pl-11 flex gap-6'>
                        <span className='border-r-2 border-gray-300 pr-5 text-gray-400'>+62</span>
                        <input type="tel" placeholder='81445687121'/>
                    </div>
                </form>
                <span>Payment Method</span>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <div className={`py-3 rounded-md border border-gray-300 flex justify-center items-center hover:bg-gray-500 ${isPaymentSelected("Gpay") ? "bg-slate-700 cursor-not-allowed" : ""}`}
                    disable={isPaymentSelected("Gpay")} 
                    onClick={()=>setPM("Gpay")}>
                        <img src={gpay} alt="" />
                    </div>
                    <div className={`py-3 rounded-md border border-gray-300 flex justify-center items-center hover:bg-gray-500 ${isPaymentSelected("Visa") ? "bg-slate-700 cursor-not-allowed" : ""}`}
                    disable={isPaymentSelected("Visa")}  
                    onClick={()=>setPM("Visa")}>
                        <img src={visa} alt="" />
                    </div>
                    <div className={`py-3 rounded-md border border-gray-300 flex justify-center items-center hover:bg-gray-500 ${isPaymentSelected("Gopay") ? "bg-slate-700 cursor-not-allowed" : ""}`}
                    disable={isPaymentSelected("Gopay")} 
                    onClick={()=>setPM("Gopay")}>
                        <img src={gopay} alt="" />
                    </div>
                    <div className={`py-3 rounded-md border border-gray-300 flex justify-center items-center hover:bg-gray-500 ${isPaymentSelected("Paypal") ? "bg-slate-700 cursor-not-allowed" : ""}`}
                    disable={isPaymentSelected("Paypal")} 
                    onClick={()=>setPM("Paypal")}>
                        <img src={paypal} alt="" />
                    </div>
                    <div className={`py-3 rounded-md border border-gray-300 flex justify-center items-center hover:bg-gray-500 ${isPaymentSelected("Dana") ? "bg-slate-700 cursor-not-allowed" : ""}`}
                    disable={isPaymentSelected("Dana")} 
                    onClick={()=>setPM("Dana")}>
                        <img src={dana} alt="" />
                    </div>
                    <div className={`py-3 rounded-md border border-gray-300 flex justify-center items-center hover:bg-gray-500 ${isPaymentSelected("BCA") ? "bg-slate-700 cursor-not-allowed" : ""}`}
                    disable={isPaymentSelected("BCA")} 
                    onClick={()=>setPM("BCA")}>
                        <img src={bca} alt="" />
                    </div>
                    <div className={`py-3 rounded-md border border-gray-300 flex justify-center items-center hover:bg-gray-500 ${isPaymentSelected("BRI") ? "bg-slate-700 cursor-not-allowed" : ""}`}
                    disable={isPaymentSelected("BRI")} 
                    onClick={()=>setPM("BRI")}>
                        <img src={bri} alt="" />
                    </div>
                    <div className={`py-3 rounded-md border border-gray-300 flex justify-center items-center hover:bg-gray-500 ${isPaymentSelected("OVO") ? "bg-slate-700 cursor-not-allowed" : ""}`}
                    disable={isPaymentSelected("OVO")} 
                    onClick={()=>setPM("OVO")}>
                        <img src={ovo} alt="" />
                    </div>
                </div>
                <button onClick={()=>Setshow(!isShow)} className='max-w-2xl h-14 bg-orange-500 text-white font-semibold rounded-xl'>Pay your order</button>
            </div>
        </div>
        {isShow && (
        <div className='w-screen h-[1900px] bg-cover bg-black opacity-80 absolute mt-24  flex justify-center items-center'>
        <div className=' absolute bg-white px-3.5 pt-6 pb-14 flex flex-col gap-5'>
        <button onClick={() =>Setshow(!isShow)}><IoCloseCircle className='text-2xl'/></button>
            <span className='text-3xl font-bold text-center'>Payment Info</span>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <div>No. Rekening Virtual</div>
                    <div>:</div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div>12321328913829724</div>
                    <div className='bg-orange-600 rounded-xl px-5 py-1 text-white hover:bg-orange-300 hover:text-black'>Copy</div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-14'>
                    <div>Total Payment</div>
                    <div>:</div>
                </div>
                <div>$30</div>
            </div>
            <p className='max-w-md'>Pay this payment bill before it is due,<span className='text-red-600'> on June 23, 2023. </span>If the bill has not been paid by the specified time, it will be forfeited</p>
            <Link to="/tiketresult" className='h-14 bg-orange-500 rounded-lg text-white flex justify-center items-center hover:bg-orange-700'> Check Payment</Link>
            <button onClick={() =>Setshow(!isShow)}>Pay Later</button>
        </div>
        </div>
        )}

    </main>
    
    <Footer/>
    </>
)
}

export default OrderPage
