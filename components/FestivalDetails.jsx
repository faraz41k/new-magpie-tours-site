"use client"

import React, { useEffect, useRef, useState } from 'react'
import Sidebox from './SideBox/Sidebox'
import CardCarousel from './sections/CardCarousel'
import Review from './Review'
import Image from 'next/image'

import { GoDotFill } from "react-icons/go";

import { client } from '@/sanity/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}






const FestivalDetail = ({
      overview,
      Itenary,
      services,
      notIncluded,
      notes,
      map,
      duration,
      activities,
      guide,
      destination,
      calender,
      cardName1,
      cardName2,
      cardName3,
      cardDetail1,
      cardDetail2,
      cardDetail3,
      cardImage1,
      cardImage2,
      cardImage3,
      url1,
      url2,
      url3,
      
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
                <h1  className='text-5xl font-semibold pb-3 font-poppins' id='Overview'>Overview</h1>
                <p className='font-poppins'>
                        The Kalash people, also known as Kalasha, live in the Chitral district of Khyber Province, in
                        three valleys: Rumbur, Brumbret, and Birir. The Kalasha is a minority community with a
                        population of only around 4000. Scholars have explored Kalasha religious practices as a
                        synthesis of ancient Hinduism and pre-Islamic traditions. There are several Kalasha festivals
                        throughout the year, among which three are the most popular with visitors:</p>
                <ul className='gap-2 flex flex-col pt-6 pl-2 pb-6'>
                    <li className='text-gray-black font-poppins font-semibold'>The Joshi Spring Festival (May 13-16): This festival celebrates the start of spring. People
                        wear new clothes, women dress up, and girls dance and sing on the hills. Houses are
                        decorated, and they gather milk from their cows. Special rituals are held for one-year-old
                        babies and their mothers.</li>
                    <li className='text-gray-black font-poppins font-semibold'>
                        The Uchal Festival (August 20-21): This festival celebrates the harvest. People dress up
                        in traditional attire to sing, dance, and thank nature for giving them barley and wheat.
                        Special foods like cheese, buttermilk, and cornbread are prepared.
                    </li>
                    <li className='text-gray-black font-poppins font-semibold'>
                        The Chaumas Festival (December 15-22): This is the biggest Kalash festival. It takes
                        place for two weeks around the winter solstice, marking the end of the farming year with
                        music, dance, and goat sacrifice. This festival is held for the god Balimain, who comes
                        from the Kalasha mythical homeland. Special rituals are held to honor their ancestors,
                        with young boys pretending to be them. The main ceremony is held at a special tree
                        called Indrunkot, linked to Indr, the god of cows and brother of Balimain.
                    </li>

                </ul>

                <p className='font-poppins'>     This itinerary will first transport you to from Islamabad to Chitral, via a scenic drive through
                        Swat Valley. Immerse in two full days of festivities in the Kalash Valley, and emerge with
                        unforgettable experiences of Kalasha culture. This will be followed by an enchanting and
                        thrilling drive to Mastuj and Khalti Lake, where you can encounter sparkling rivers and eat
                        mountain trout fish. The road continues to the breathtaking Hunza Valley, where you will explore
                        the historical Baltit and Altit forts, marvel at the sapphire waters of Attabad Lake, and the
                        picturesque Passu Cones. Enjoy a relaxing day of souvenir shopping in the lanes of Karimabad
                        before a special 2700m high farewell dinner at the Duikar view point. The journey concludes
                        back in Islamabad, where you can wind down to explore the city and enjoy delicious cuisine
                        while wrapping up cherished memories of the colorful Kalash festivals and the majestic beauty
                        of Northern Pakistan.</p>

            </div>

            
            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-1  font-poppins'>Itinerary At Glance The Joshi Spring Festival</h1>
                <h3 className='text-[24px] font-light underline  pb-3 font-poppins'>12-day itinerary: Kalash Chilum Joshi Festival (spring festival, May13th-16th)
                Fixed departure/joining Dates (May 11th each year, arrival to Islamabad airport)</h3>
                <div className='list-none'>
                    <ul className='list-none'>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 1: Arrival at Islamabad airport, hotel transfer </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 2: Drive to Swat (255 km, 5hrs), ovenight in Swat</li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 3: Drive to kalash (250km, 8hrs), overnight in Kalash Valley </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 4: Explore Bumburet and Rumbur, overnight in kalash valley   </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 5: Drive to Reshun village (90km, 3hrs 40minutes)  </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 6: Drive to Phandar valley (6 hrs and 140km), via shandur national park, overnight phandar  </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 7: Drive to Hunza valley (265km, 7hrs and 30minutes) </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 8: Half day rest Visits to Baltit and Altit fort   </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 9: Excursion of Attabad Lake & upper Hunza, sovenir shopping</li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 10: Hunza to Naran drive (315km 6hr & 30 mints)</li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 11: Afternoon Islamabad arrival (280 km 6hrs) Overnight Islamabad </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Day 12: Mid-day hotel checkout, afternoon excursion of Islamabad and airport transfer after</li>
                      
                    </ul>
                        
                    
                    
                    
                </div>
                
            </div>

            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-1  font-poppins'>Itinerary At Glance The Uchal Festival </h1>
                <h3 className='text-[24px] font-light underline  pb-3 font-poppins'>12-day itinerary: Uchal Festival (summer festival, August 20th - 22nd)
                Fixed departure/joining Dates (August 18th each year, arrival to Islamabad airport)</h3>
                <div className='list-none'>
                    
                <ul className='list-none'>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 1: Arrival at Islamabad airport, hotel transfer </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 2: Drive to Swat (255 km, 5hrs), ovenight in Swat</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 3: Drive to kalash (250km, 8hrs), overnight in Kalash Valley</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 4: Explore Bumburet and Rumbur, overnight in kalash valley   </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 5: Drive to Reshun village (90km, 3hrs 40minutes)  </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 6: Drive to Phandar valley (6 hrs and 140km), via shandur national park, overnight phandar </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 7: Drive to Hunza valley (265km, 7hrs and 30minutes) </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 8: Half day rest Visits to Baltit and Altit fort   </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 9: Excursion of Attabad Lake & upper Hunza, sovenir shopping</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 10: Hunza to Naran drive (315km 6hr & 30 mints)</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 11: Afternoon Islamabad arrival (280 km 6hrs) Overnight Islamabad </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 12: Mid-day hotel checkout, afternoon excursion of Islamabad and airport transfer after </li>
                      
                    </ul>
                   
                    
                    
                </div>
                
            </div>

            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-1  font-poppins'>Itinerary At Glance The Choimus Festival</h1>
                <h3 className='text-[24px] font-light underline  pb-3 font-poppins'>9-day itinerary: Kalash Choimus Festival (winter festival, December 15th – December 22nd)
                Fixed departure/joining Dates (December 13th each year, arrival to Islamabad airport)</h3>
                <div className='list-none'>
                    
                    <ul className='list-none'>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 1: Arrival at Islamabad airport, hotel transfer</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 2: Drive to Swat (255 km, 5hrs), ovenight in Swat</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 3: Drive to kalash (250km, 8hrs), overnight in Kalash Valley</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 4: Explore Bumburet and Rumbur, overnight in kalash valley  </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 5: Drive to Chitral (37 km, 2 hrs.), Excursion of Chitral  </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 6: Drive to Swat (250 km, 7hrs), overnight Swat </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 7: Drive to Peshawar (200km, 3hrs), city excursion, Peshawar overnight </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 8: Drive back to Islamabad (2hrs), with historical excursions </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Day 9: Afternoon excursion of Islamabad city, airport transfer after dinner</li>

                    </ul>
                    
                    
                    
                </div>
                
            </div>
            

            <div ref={myRef}  className='px-[60px] max-w-6xl' id='Services'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>Services Included</h1>
                <div className='list-none'>
                    {services.map((item,index)=>(
                        <p key={index} className='font-poppins'><GoDotFill/> {item}</p>
                    ))}
                    
                    
                </div>
                
            </div>

            <div   className='px-[60px] max-w-6xl' id='Services'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>Services Not Included</h1>
                <div className='list-none'>
                {notIncluded.map((item,index)=>(
                        <p key={index} className='font-poppins'><GoDotFill/> {item}</p>
                    ))}
                </div>
                
            </div>
            

            <div  className='px-[60px] max-w-6xl' id='Notes'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>Notes For the Trip</h1>
                <div className='list-none flex flex-col gap-2'>
                {notes.map((item,index)=>(
                        <p key={index} className='font-poppins'><GoDotFill/> {item}</p>
                    ))}
                </div>
                
            </div>
            
            <div className='flex flex-col  justify-start px-[60px] w-full max-w-6xl  mb-4'>
                <h3 className='text-5xl font-semibold pb-3 font-poppins'>Tour Map</h3>
                <div className='w-full'>
                    <img src={urlFor(map).url()}  className='object-contain w-full max-h-[400px]'  />
                </div>
            </div>
            

            <div  className='flex items-center justify-center flex-col px-[60px] max-w-6xl '>
                <div className='font-poppins  text-[30px] font-semibold  py-10 text-center  overflow-hidden'>You May Also Like</div>
                 <CardCarousel 
                 cardname1={cardName1}
                 cardname2={cardName2}
                 cardname3={cardName3}
                 details1={cardDetail1}
                 details2={cardDetail2}
                 details3={cardDetail3}
                 image1={cardImage1}
                 image2={cardImage2}
                 image3={cardImage3}
                 url1={url1}
                 url2={url2}
                 url3={url3}
                 />
            </div>

            <div  className='w-full'>
                <h3 className='font-poppins text-33xl text-stone-900'>Submit Your Review</h3>
                <Review/>
            </div>

        </div>
    </div>
        {/* left */}
        <div className ={visible ? 'fixed items-center h-full  top-24 right-6  w-1/4 lg:xlg:relative lg:xlg:md:inline-block  lg:xlg:z-3 lg:xlg:space-x-5 lg:xlg:w-full lg:xlg:px-5 lg:xlg:order-1 lg:xlg:ml-4' : 'inline-block'}>
            
                <Sidebox
                duration={duration} activity={activities} guide={guide} destination= {destination} calender={calender}
                />
            
        </div>
        
        
    </div>
  )
}

export default FestivalDetail