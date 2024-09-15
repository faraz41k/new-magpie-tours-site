import React from 'react'

import { GrUserExpert } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineSafety } from "react-icons/ai";




const ServiceMdel = () => {
  return (
    <div className='w-full bg-gray-300/95 md:h-full py-6 h-[400px] gap-4 px-8 flex flex-col items-center justify-center'>
        
        <div className='flex items-center justify-around gap-8 md:flex-col'>
            <div className='flex flex-col gap-4  text-center  px-6  py-4   items-center justify-center'>
               <div className=' text-[60px]'><GrUserExpert /></div>
               <h3 className='text-[20px] font-poppins underline'>Expert Team</h3> 
               <p className='font-poppins text-[18px]'>Guiding your journey every step of the way</p>
            </div>
            <div className='flex flex-col gap-4  text-center  px-6  py-4    items-center justify-center'>
               <div className=' text-[60px]'><AiOutlineTeam /></div>
               <h3 className='text-[20px] font-poppins underline'>Local Team</h3> 
               <p className='font-poppins text-[18px]'>our local team brings first hand knowledge for an authentic experience</p>
            </div>
            <div className='flex flex-col gap-4  text-center  px-6  py-4    items-center justify-center'>
               <div className=' text-[60px]'><AiOutlineSafety /></div>
               <h3 className='text-[20px] font-poppins underline'>Responsible Team</h3> 
               <p className='font-poppins text-[18px]'>The eco-conscious team, ensuring a balanced planet with care </p>
            </div>
        </div>
    </div>
  )
}

export default ServiceMdel