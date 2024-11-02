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






const ItaliaFestival = ({
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
                Il popolo Kalash`&lsquo;` conosciuto anche come Kalasha`&lsquo;` risiede nel distretto di Chitral`&lsquo;` nella provincia di Khyber`&lsquo;` nelle
                tre valli di Rumbur`&lsquo;` Brumbret e Birir. Questa comunità minoritaria conta solamente 4000 abitanti. Gli studiosi
                hanno analizzato le pratiche religiose dei Kalash come una fusione dell`&apos;`antico induismo e delle tradizioni pre-
                islamiche. Durante l`&apos;`anno`&lsquo;` si tengono diversi festival Kalash`&lsquo;` tra cui tre particolarmente popolari tra i visitatori::</p>
                <ul className='gap-2 flex flex-col pt-6 pl-2 pb-6'>
                    <li className='text-gray-black font-poppins font-semibold'>Joshi Spring Festival (13-16 maggio): Questo festival celebra l`&apos;`avvento della primavera. La gente indossa
                    abiti nuovi`&lsquo;` le donne si adornano e le ragazze danzano e cantano sulle colline. Le case vengono addobbate
                    e il latte viene raccolto dalle mucche. Si svolgono rituali speciali per i bambini di un anno e per le loro madri.</li>
                    <li className='text-gray-black font-poppins font-semibold'>
                    Uchal Festival (20-21 agosto): Questa festa celebra il raccolto. Le persone indossano abiti tradizionali`&lsquo;`
                    cantano`&lsquo;` ballano e ringraziano la natura per aver donato orzo e grano. Vengono preparati cibi speciali come
                    formaggio`&lsquo;` latticello e pane di mais.
                    </li>
                    <li className='text-gray-black font-poppins font-semibold'>
                    Chaumas Festival (15-22 dicembre): È il più grande festival Kalash`&lsquo;` che si tiene per due settimane intorno
                    al solstizio d`&apos;`inverno`&lsquo;` segnando la fine dell`&apos;`anno agricolo con musica`&lsquo;` danze e sacrifici di capre. Questo
                    evento è dedicato al dio Balimain`&lsquo;` che proviene dalla mitica patria dei Kalash. Per onorare i loro antenati`&lsquo;` si
                    svolgono rituali speciali in cui i ragazzi impersonano gli antichi. La cerimonia principale si tiene presso un
                    albero speciale chiamato Indrunkot`&lsquo;` legato a Indr`&lsquo;` il dio delle mucche e fratello di Balimain.
                    </li>

                </ul>

                <p className='font-poppins'> Questo itinerario vi condurrà da Islamabad a Chitral`&lsquo;` attraverso un suggestivo viaggio panoramico nella valle
                    dello Swat. Vi immergerete in due giorni di festeggiamenti nella valle dei Kalash`&lsquo;` vivendo esperienze
                    indimenticabili della loro cultura. Seguirà un incantevole e avventuroso viaggio in auto verso Mastuj e il lago
                    Khalti`&lsquo;` dove potrete ammirare fiumi scintillanti e gustare trote di montagna fresche. La strada proseguirà verso
                    la mozzafiata valle di Hunza`&lsquo;` dove avrete l`&apos;`opportunità di esplorare i storici forti di Baltit e Altit`&lsquo;` ammirare le
                    acque color smeraldo del lago Attabad e i maestosi coni di Passu. Godetevi una giornata rilassante dedicata allo
                    shopping di souvenir nei vicoli di Karimabad`&lsquo;` prima di concludere con una cena speciale a 2700 metri di
                    altitudine presso il punto panoramico di Duikar. Il viaggio terminerà a Islamabad`&lsquo;` dove potrete esplorare la città`&lsquo;`
                    gustare deliziosi piatti e conservare i ricordi dei vibranti festival Kalash e della magnifica bellezza del Pakistan
                    settentrionale.</p>

            </div>

            
            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-1  font-poppins'>Itinerary At Glance The Kalash Chilum Joshi Spring Festival</h1>
                <h3 className='text-[24px] font-light underline  pb-3 font-poppins'>Itinerario di 14 giorni: Chilum Joshi Festival di Kalash i.e festa di primavera`&lsquo;` 13-16
                    maggio</h3>
                <div className='list-none'>
                    <ul className='list-none'>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 1: Arrivo all`&apos;`aeroporto internazionale di Islamabad.</li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 2: viaggio in auto verso Swat i.e 240 km`&lsquo;` 3 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 3: viaggio in auto fino a Chitral i.e 245 km`&lsquo;` 7 ore  </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 4: 1° giorno di festival i.e 30 km`&lsquo;` 1 ora e 30 minuti `&lsquo;` pernottamento nella valle di Kalash </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 5: 2° giorno di festival i.e 30 km`&lsquo;` 1 ora e 30 minuti `&lsquo;` pernottamento nella valle di Kalash </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 6: trasferimento a Mastuj i.e 145 km`&lsquo;` 5 ore </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 7: viaggio al lago Khalti i.e 140 km`&lsquo;` 4 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 8: viaggio panoramico in auto tra fiumi e montagne (210 km`&lsquo;` 5 ore) fino alla Valle di Hunza </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 9: Mattina di riposo`&lsquo;` pomeriggio escursione ai forti di Hunza</li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 10: escursione al lago Attabad e all`&apos;`Upper Hunza</li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 11: giornata di relax`&lsquo;` acquisto di souvenir`&lsquo;` esperienza del tramonto e cena speciale a 2700 metri. </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '>Giorno 12: da Hunza a Naran i.e 315 km`&lsquo;` 6 ore e 30 minuti </li>
                      
                    </ul>
                        
                    
                    
                    
                </div>
                
            </div>

            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-1  font-poppins'>Itinerary At Glance The Uchal Festival </h1>
                <h3 className='text-[24px] font-light underline  pb-3 font-poppins'>Itinerario di 14 giorni: Uchal Festival i.e festival estivo`&lsquo;` 20-22 agosto </h3>
                <div className='list-none'>
                    
                <ul className='list-none'>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 1: Arrivo all aeroporto internazionale di Islamabad. </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 2: viaggio in auto verso Swat i.e 240 km`&lsquo;` 3 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 3: trasferimento a Chitral i.e 245 km`&lsquo;`&lsquo;` 7 ore </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 4: 1° giorno di festival i.e 30 km`&lsquo;` 1 ora e 30 minuti `&lsquo;` pernottamento nella valle
                      di Kalash </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 5: 2° giorno di festival i.e 30 km`&lsquo;` 1 ora e 30 minuti `&lsquo;` pernottamento nella valle
                      di Kalash </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 6: trasferimento a Mastuj i.e 145 km`&lsquo;` 5 ore  </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 7: viaggio al lago Khalti i.e 140 km`&lsquo;` 4 ore e 30 minuti  </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 8: viaggio panoramico in auto tra fiumi e montagne i.e 210 km`&lsquo;` 5 ore  fino alla
                      Valle di Hunza </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 9: Mattina di riposo`&lsquo;` pomeriggio escursione ai forti di Hunza</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 10: escursione al lago Attabad e all Upper Hunza</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 11: giornata di relax `&lsquo;` acquisto di souvenir `&lsquo;` esperienza del tramonto e cena
                      speciale a 2700 metri.</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 12: da Hunza a Naran i.e 315 km `&lsquo;` 6 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 13: arrivo a Islamabad nel pomeriggio i.e 280 km 6 ore  Pernottamento a Islamabad</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 14: check-out dall hotel a metà giornata `&lsquo;` escursione pomeridiana a Islamabad e trasferimento in aeroporto dopo cena.</li>
                    </ul>
                   
                    
                    
                </div>
                
            </div>

            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-1  font-poppins'>Itinerary At Glance The Choimus Festival</h1>
                <h3 className='text-[24px] font-light underline  pb-3 font-poppins'>Itinerario di 9 giorni: Kalash Choimus Festival i.e festival invernale`&lsquo;` 15-22 dicembre</h3>
                <div className='list-none'>
                    
                    <ul className='list-none'>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 1: Arrivo allaeroporto internazionale di Islamabad.</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 2: viaggio in auto verso Swat i.e 240 km`&lsquo;` 3 ore e 30 minuti</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 3: viaggio in auto fino a Chitral i.e 245 km`&lsquo;` 7 ore</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 4: intera giornata dedicata al festival 30 km`&lsquo;` 1 ora e 30 minuti`&lsquo;`
                      pernottamento nella valle di Kalash </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 5: escursione a Chitral  </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 6: viaggio verso Swat i.e 140 km`&lsquo;` 4 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 7: pernottamento a Peshawar </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 8: ritorno a Islamabad i.e 2 ore`&lsquo;` escursione pomeridiana </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'>Giorno 9: check-out dell hotel a mezzogiorno`&lsquo;` escursione pomeridiana a Islamabad`&lsquo;`
                      trasferimento all aeroporto dopo cena.</li>

                    </ul>
                    
                    
                    
                </div>
                
            </div>
            

            <div ref={myRef}  className='px-[60px] max-w-6xl' id='Services'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>NOTE</h1>
                <div className='list-none'>
                    {services.map((item,index)=>(
                        <p key={index} className='font-poppins'><GoDotFill/> {item}</p>
                    ))}
                    
                    
                </div>
                
            </div>

            <div   className='px-[60px] max-w-6xl' id='Services'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>Servizi inclusi:</h1>
                <div className='list-none'>
                {notIncluded.map((item,index)=>(
                        <p key={index} className='font-poppins'><GoDotFill/> {item}</p>
                    ))}
                </div>
                
            </div>
            

            <div  className='px-[60px] max-w-6xl' id='Notes'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>Servizi non inclusi:</h1>
                <div className='list-none flex flex-col gap-2'>
                {notes.map((item,index)=>(
                        <p key={index} className='font-poppins'><GoDotFill/> {item}</p>
                    ))}
                </div>
                
            </div>
            
            <div className='flex flex-col  justify-start px-[60px] w-full max-w-6xl  mb-4'>
                <h3 className='text-5xl font-semibold pb-3 font-poppins'>Mappa del tour  </h3>
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

export default ItaliaFestival