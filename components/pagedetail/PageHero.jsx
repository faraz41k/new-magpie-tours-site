"use client"

import React, { useState } from 'react'
import { GrGallery } from "react-icons/gr";
import Modal from '../modal/Modal'



import { client } from '@/sanity/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}




const PageHero = ({name ,sliderImages,  banner}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="hero min-h-[600px] sm:h-[350px] w-full bg-cover relative self-stretch " style={{backgroundImage: `url(${urlFor(banner).fit('clip').url()})` , backgroundRepeat: 'no-repeat'}}>
        <div className="hero-overlay bg-opacity-30 font-poppins"></div>
          <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md text-center">
              <h1 className="  text-[40px] border-none font-poppins text-white font-bold shadow-inner md:text-[36px]">{name}</h1>
              </div>
              <button onClick={()=> setShowModal(true)} className="btn py-2 px-6 rounded-lg  btn-neutral bg-black text-white  absolute bottom-3 right-3 border-none"><GrGallery /> Gallery</button>
          </div>
      </div>
      <Modal isVisible={showModal} sliderImages={sliderImages} onClose={()=>setShowModal(false)} />
  </>
  )
}

export default PageHero