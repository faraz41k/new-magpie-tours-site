import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";




const Card = () => {
  return (
    <div
    class="max-w-[350px] mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-whitesmoke-100 shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" src='/lake.jpg'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src='female1.jpg'/>
    </div>
    <div class="text-center mt-2 py-3">
        <h2 class="font-semibold font-poppins">Irfan Karim</h2>
        <p class="text-gray-500 font-poppins">CEO, Magpie Tours</p>
    </div>
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-center gap-4">
        <li class="flex flex-col items-center justify-around">
            <Link href=''><FaFacebook className='h-6 w-6 font-bold'/></Link>
        </li>
        <li class="flex flex-col items-center justify-around">
        <Link href=''><FaInstagramSquare className='h-6 w-6 font-bold'/></Link>
        </li>
        
    </ul>
    
</div>
  )
}

export default Card