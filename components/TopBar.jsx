import React from 'react'

import { GrMailOption } from "react-icons/gr";
import { MdOutlineFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import Link from 'next/link';





const TopBar = () => {
  return (
    <div className=" bg-black py-2 ">
            <div className='max-container px-10 flex  justify-between items-center '>
                <div className='flex items-center justify-between text-white font-poppins'>
                        <SiWhatsapp className='h-8'/>
                        <Link target='_blank' className='no-underline' href='https://wa.me/923554212624?Hello!! How can i help you? '><p className='text-white font-poppins ml-2 md:text-[12px]'>+923554212624</p></Link>
                        
                </div>

                <div className='flex items-center justify-between text-white font-poppins'>
                        <GrMailOption  className=''/>
                        <Link target='_blank' className='no-underline' href='https://mail.google.com/'><p className='ml-2 md:text-[12px] no-underline text-white'>info@magpietours.com.pk</p></Link>
                        
                </div>

                <div className='flex justify-between items-center  text-white font-poppins md:hidden sm:hidden'>
                    <Link target='_blank' className='text-white hover:text-gray-200 ' href=' https://www.facebook.com/profile.php?id=100063772916296'><MdOutlineFacebook className='ml-2 h-6 w-6'  /></Link>
                    <Link target='_blank' className='text-white hover:text-gray-200 ' href=' https://www.instagram.com/magpietourspakistan?igsh=MWc0bzcxNWhqOGx3Nw%3D%3D&utm_source=qr'><BsInstagram className='ml-2 h-5 w-5' /></Link>
                    
                    
                </div>

            </div>
    
    </div>
  )
}

export default TopBar