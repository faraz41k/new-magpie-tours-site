"use client"


import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'



import { client } from '@/sanity/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}




const Modal = ({isVisible, onClose , sliderImages}) => {
    if(!isVisible) return null

    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') onClose()
    }

  return (
    <div className='fixed inset-0 bg-transparent z-50 md:w-full bg-opacity-20 backdrop-blur-lg flex  justify-center items-center' id='wrapper' onClick={handleClose} > 
        <div className=' flex flex-col w-screen bg-transparent'>
           <button onClick={()=>onClose()} className='text-white text-xl bg-transparent border-none cursor-pointer p-4 place-self-end'> X</button>
            <div className='bg-white  rounded-lg w-full bg-inherit'>
                <Slider sliderImages={sliderImages}/>
            </div>
        </div>
    </div>
  )
}

export default Modal






const Slider = ({title, sliderImages}) => {
    
    
      const [index, setIndex]= useState(0);
    
      const prevSlide = ()=> {
        const   isFirstSlide = index === 0;
        const   newIndex = isFirstSlide ? sliderImages.length - 1 : index -1
        setIndex(newIndex)
      }
    
      const nextSlide = ()=> {
        const   isLastSlide = index === sliderImages.length -1;
        const   newIndex = isLastSlide ? 0 : index +1
        setIndex(newIndex)
      }
    
      const goToSlide = (slideIndex) => {
          setIndex(slideIndex)
      }

      
      console.log(sliderImages, "images");
      // sliderImages[index].url
  return (
    <div >
      
      <div className="max-w-[1400px] h-[620px] md:h-[300px] md:w-full  w-full m-auto pt-2 pb-6 px-2 relative group z-100 bg-transparent rounded-lg ">
       <p className='absolute bottom-[80px] left-[80px] text-33xl text-white font-bold font-poppins  uppercase border-none'>{title}</p>

      <div  style={{backgroundImage: `url(${urlFor(sliderImages[index]).url()})`}}  className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-black/70 text-white cursor-pointer" >
        <BsChevronCompactLeft  onClick={prevSlide} size={30}/>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 bg-black/70 text-white cursor-pointer" >
        <BsChevronCompactRight  onClick={nextSlide} size={30}/>
      </div>

      <div className="flex top-4 justify-center py-2">
          {
            sliderImages.map((slide, slideIndex)=>(
              <div 
              
                onClick={()=> goToSlide(slideIndex)} 
                key={slideIndex} 
                className="text-2xl cursor-pointer">
                  <RxDotFilled className='text-black '/> 
              </div>
            ))
          }
      </div>
    </div>
    </div>
  )
}

