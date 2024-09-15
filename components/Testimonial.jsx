"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";

import { client } from '../sanity/sanity/sanity-utils'; 
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}






// const TestimonialData = [
//     {
//         img:"/female1.jpg",
//         quote: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you.",
//         name: "Kelly Watson",
//         country:"Texas, U.S"
//     },

//     {
//         img:"/female2.jpg",
//         quote: " I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all.",
//         name: "Jule muller",
//         country:"Hamburg, Germany"
//     },

//     {
//         img:"/male.jpg",
//         quote: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you.",
//         name: "Javier Costa",
//         country:"Granada, Spain"
//     },
// ]




const Testimonial =  ({reviews}) => {




    const [current,setCurrent] = useState(0)

    const length = reviews.length;

    const previous = ()=>{
        setCurrent(current === 0 ? length - 1: current-1)
    }

    const next = ()=>{
        setCurrent(current === length-1 ? 0 : current + 1)
    }

  return (
<div className='w-full py-6'>
    <div className='py-4 font-poppins text-33xl text-center flex flex-col justify-center items-center font-semibold'>
        
        {/* <div className='w-1/2 border-b-4 border-solid border-orange-600'/> */}
        </div>

    <section className=' w-full mx-auto flex items-center bg-cover bg-center justify-center h-[70vh] my-auto bg-blue-950  py-10 px-12 backdrop-blur-sm bg-whitesmoke-200/20' style={{backgroundImage: 'url(/landscapes.JPG)'}}>
            <div className='max-w-[1300px] mx-6'>  
            {reviews.map((review,index)=>
                index === current && 
                <div key={index} className=''>

                       <div className='relative pt-14 px-4 '>
                            <h2 className='text-[18px] text-white/90 font-poppins font-light mx-4'>{review.remarks}</h2>
                                <FaQuoteLeft className='w-9 h-9 font-bold absolute left-0 top-0 text-orange-100/30'/>
                                <FaQuoteRight className='w-9 h-9 font-bold absolute left-[200px] top-[100px] text-orange-100/30'/>
                        </div>

                       
                        <div className='flex gap-8 py-5 items-center justify-center md:justify-start'>
                            <img className='border-2 border-orange-400 p-2 rounded-full object-center object-cover' src={urlFor(review.Userimage).width(200).url()} height={150} width={150} alt='img' />
                            <div className=''>
                                <p className='text-white/90 py-1 font-bold text-3xl'>{review.user_name}</p>
                                <p className='text-gray-300/90 py-1 font-poppins'>{review.country}</p>
                                
                            </div>
                        </div>

                        <div className='flex gap-2 justify-end mb-6'>
                            <div onClick={previous} className='bg-black p-2  hover:bg-slate-400  cursor-pointer'>
                                 <IoIosArrowBack className='text-white'/>
                            </div>
                            
                            <div onClick={next} className='bg-black p-2 hover:bg-slate-400  cursor-pointer'>
                                 <IoIosArrowForward className='text-white'/>
                            </div>
                        </div>

                </div>
            )}
    </div>
    </section>
</div>
    
  )
}

export default Testimonial