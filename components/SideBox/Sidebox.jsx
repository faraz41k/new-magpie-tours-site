import Link from 'next/link';
import React from 'react'

import { FaStar } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaPersonWalking } from "react-icons/fa6";
import Review from '../Review';






const Sidebox = ({duration, activity,guide,destination,calender,price}) => {
  return (
    <div className=' lg:xlg:text-center lg:xlg:w-full  md:flex-col  flex flex-col gap-10 ml-5  justify-center items-center mx-auto pt-8 mr-5 md:gap-5 lg:grid lg:grid-cols-3 lg:mb-8 lg:justify-center
    md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 '>
        {/* buttons */}
        <div className='w-full lg:col-span-5'>
                <Link href='/Contact'>
                <button className='px-4 py-4 text-[16px] font-poppins bg-black hover:bg-black/90 text-white rounded-lg border-none w-full cursor-pointer'>Book Now</button>
                </Link>
           
        </div>
        <div className='md:flex md:gap-2 md:justify-between  w-full xlg:flex xlg:flex-col xlg:gap-2 md:col-span-5'>
            <Link href='/Contact'>
            <button className="btn btn-outline text-gray-black px-8 shadow-md font-poppins md:w-full w-full">Enquire</button>
            </Link>
            <button className="btn btn-success text-whitesmoke-100 px-8 shadow- font-poppins md:w-full">USD {price} $</button>
        </div>

        {/* rating */}
        <div className=' flex flex-col gap-1 justify-center items-center lg:flex lg:flex-col md:col-span-5'>
            <div className='flex gap-1'>
                <FaStar className='text-orange-400/100 h-10 w-10'/>
                <FaStar className='text-orange-400/100 h-10 w-10'/>
                <FaStar className='text-orange-400/100 h-10 w-10'/>
                <FaStar className='text-orange-400/100 h-10 w-10'/>
                <FaStar className='text-orange-400/100 h-10 w-10'/>
            </div>

            <Link href='/#reviews' target='_blank'><h3>Reviews</h3></Link>
        </div>

        

        {/* details */}
        <div className='flex flex-col justify-start gap-3  py-10 px-10 w-full lg:col-span-5  rounded-lg md:text-start sm:w-full'>
            <p className='uppercase font-poppins text-3xl font-normal text-black rounded-lg '><FaLocationDot/> {destination}</p>
            <p className='uppercase font-poppins text-3xl font-normal text-black rounded-lg '><FaRegClock/> {duration} </p>
            <p className='uppercase font-poppins text-3xl font-normal text-black rounded-lg '><RiCompassDiscoverLine/> {activity}</p>
            <p className='uppercase font-poppins text-3xl font-normal text-black rounded-lg '><FaCompass/> {guide}</p>
            <p className='uppercase font-poppins text-3xl font-normal text-black rounded-lg '><FaRegCalendarAlt/> {calender} </p>
        </div>


        
        
    </div>
  )
}

export default Sidebox