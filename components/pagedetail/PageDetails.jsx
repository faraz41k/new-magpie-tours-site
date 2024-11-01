"use client"

import React, { useEffect, useRef, useState } from 'react'
import Sidebox from '../SideBox/Sidebox'
import CardContainer from '../sections/CardCarousel'
import Review from '../Review'
import { GoDotFill } from "react-icons/go";




import { client } from '@/sanity/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}





const PageDetail = ({
      overview,
      Itenary,
      services,
      notIncluded,
      notes,
      map,
      duration,
      activity,
      guide,
      destination,
      calender,
      cardname1,
      cardname2,
      cardname3,
      details1,
      details2,
      details3,
      image1,
      image2,
      image3,
      price,
      url1,
      url2,
      url3,
      langO,
      langIt,
      langMap,
      langInc,
      langNinc,
      langNote
    }) => {
    const [visible,setVisible] = useState(false)
    const myRef = useRef()
    

    
    
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=> {
            const entry = entries[0]
            setVisible(entry.isIntersecting)
            
        })
        observer.observe(myRef.current)
    },[])

    const [fixed, setFixed]= useState(false)
    
    function FixedSideBar() {
        if( window.scrollY >= 700  ){
            setFixed(true)
        }else{
            setFixed(false)
        }
        window.addEventListener("scroll", FixedSideBar)
    }

  return (
    <div  className='max-container items-start grid grid-cols-5 justify-center lg:flex  lg:flex-col lg:items-center '>
        {/* right */}

    <div className='max-w-full col-span-4 lg:xlg:order-2 '>
        {/* Bar desk*/}
        
        {/* bar Mob */}
        {/* <div className='min-h-11  bg-teal-800  py-5  flex justify-evenly items-center shadow-lg '>
            <a className='no-underline text-3xl text-white hover:text-teal-400' href=""><GrOverview className='text-black h-7 w-7'/></a>
            <a className='no-underline text-3xl text-white hover:text-teal-400' href=""><FaPersonHiking className='text-black h-7 w-7'/></a>
            <a className='no-underline text-3xl text-white hover:text-teal-400' href=""><FaPersonWalkingLuggage className='text-black h-7 w-7'/></a>
            <a className='no-underline text-3xl text-white hover:text-teal-400' href=""><TbNotes className='text-black h-7 w-7'/></a>
        </div> */}

        {/* details */}

        <div  className='  flex flex-col items-start justify-center pt-8 lg:xlg:pt-28 gap-[100px] pb-8' >
            <div className='px-[60px] max-w-6xl'>
                <h1  className='text-5xl font-semibold pb-3 font-poppins' id='Overview'>{langO ? 'Riepilogo' : 'Overview'}</h1>
                <p className='font-poppins'>{overview}</p>
            </div>

            
            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-3 font-poppins'>{langIt ? 'Itinerario giornaliero' : 'Itinerary At Glance'}</h1>
                <div className='list-none' >
                    {Itenary.map((item,ind)=>(
                        <>
                        <li  key={ind} className='font-poppins text-[26px] md:text-[20px] sm:text-[18px]'> {item}</li>
                        <br/>
                        </>
                    ))}
                </div>
                    
                    
                
            </div>
            

            <div ref={myRef}  className='px-[60px] max-w-6xl' id='Services'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>{langInc ? 'Servizi inclusi': 'Services Included'}</h1>
                <div className='list-none'>
                    {services.map((item,index)=>(
                        <p key={index} className='font-poppins'><GoDotFill/> {item}</p>
                    ))}
                    
                    
                </div>
                
            </div>

            <div   className='px-[60px] max-w-6xl' id='Services'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>{langNinc ? 'Servizi non inclusi' : 'Services Not Included'}</h1>
                <div className='list-none'>
                {notIncluded.map((item,index)=>(
                        <p key={index} className='font-poppins'><GoDotFill/> {item}</p>
                    ))}
                </div>
                
            </div>
            

            <div  className='px-[60px] max-w-6xl' id='Notes'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>{langNote ? 'Note per il viaggio' : 'Notes For the Trip'}</h1>
                <div className='list-none flex flex-col gap-2'>
                {notes.map((item,index)=>(
                        <p key={index} className='font-poppins'><GoDotFill/> {item}</p>
                    ))}
                </div>
                
            </div>
            
            <div className='flex flex-col  justify-start px-[60px]  w-full max-w-6xl  mb-4'>
                <div className='w-full'>
                <h3 className='text-5xl font-semibold pb-3 font-poppins'>{langMap ? 'Mappa del tour' : 'Tour Map'}</h3>
                    <img src={urlFor(map).url()}  className='object-cover w-full '  />
                </div>
            </div>
            

            <div  className='flex items-center justify-center flex-col px-[60px] sm:px-[20px] max-w-6xl '>
                <div className='font-poppins  text-[30px] font-semibold  py-10 text-center  overflow-hidden'>You May Also Like</div>
                 <CardContainer
                    cardname1={cardname1}
                    cardname2={cardname2}
                    cardname3={cardname3}
                    details1={details1}
                    details2={details2}
                    details3={details3}
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    url1={url1}
                    url2={url2}
                    url3={url3}
                    />
            </div>

            <div  className='w-full'>
                <h3 className='font-poppins text-[40px] text-stone-900 pb-4'>Submit Your Review</h3>
                <Review/>
            </div>

        </div>
    </div>
        {/* left */}
        <div className ={visible ? 'fixed items-center h-full  top-24 right-6  w-1/4 lg:xlg:relative lg:xlg:md:inline-block  lg:xlg:z-3 lg:xlg:space-x-5 lg:xlg:w-full lg:xlg:px-5 lg:xlg:order-1 lg:xlg:ml-4' : 'inline-block'}>
            
                <Sidebox
                duration={duration} price={price} activity={activity} guide={guide} destination= {destination} calender={calender}
                />
            
        </div>
        
        
    </div>
  )
}

export default PageDetail


// country /nationality
// first name last name
// whatsapp