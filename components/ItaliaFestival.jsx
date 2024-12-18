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
                <h1  className='text-5xl font-semibold pb-3 font-poppins' id='Overview'>Riepilogo</h1>
                <p className='font-poppins'>
                    Il popolo Kalash, conosciuto anche come Kalasha, risiede nel distretto di Chitral, nella provincia di Khyber, nelle
                    tre valli di Rumbur, Brumbret e Birir. Questa comunità minoritaria conta solamente 4000 abitanti. Gli studiosi hanno analizzato le pratiche religiose dei Kalash come una fusione dell&lsquo;antico induismo e delle tradizioni pre-
                    islamiche. Durante l&lsquo;anno, si tengono diversi festival Kalash, tra cui tre particolarmente popolari tra i visitatori:</p>
                <ul className='gap-2 flex flex-col pt-6 pl-2 pb-6'>
                    <li className='text-gray-black font-poppins font-semibold'>Joshi Spring Festival (13-16 maggio): Questo festival celebra l&apos;avvento della primavera. La gente indossa
                    abiti nuovi&lsquo; le donne si adornano e le ragazze danzano e cantano sulle colline. Le case vengono addobbate
                    e il latte viene raccolto dalle mucche. Si svolgono rituali speciali per i bambini di un anno e per le loro madri.</li>
                    <li className='text-gray-black font-poppins font-semibold'>
                    Uchal Festival (20-21 agosto): Questa festa celebra il raccolto. Le persone indossano abiti tradizionali&lsquo;
                    cantano&lsquo; ballano e ringraziano la natura per aver donato orzo e grano. Vengono preparati cibi speciali come
                    formaggio&lsquo; latticello e pane di mais.
                    </li>
                    <li className='text-gray-black font-poppins font-semibold'>
                    Chaumas Festival (15-22 dicembre): È il più grande festival Kalash&lsquo; che si tiene per due settimane intorno
                    al solstizio d&apos;inverno&lsquo; segnando la fine dell&apos;anno agricolo con musica&lsquo; danze e sacrifici di capre. Questo
                    evento è dedicato al dio Balimain&lsquo; che proviene dalla mitica patria dei Kalash. Per onorare i loro antenati&lsquo; si
                    svolgono rituali speciali in cui i ragazzi impersonano gli antichi. La cerimonia principale si tiene presso un
                    albero speciale chiamato Indrunkot&lsquo; legato a Indr&lsquo; il dio delle mucche e fratello di Balimain.
                    </li>

                </ul>

                <p className='font-poppins'> Questo itinerario vi condurrà da Islamabad a Chitral&lsquo; attraverso un suggestivo viaggio panoramico nella valle
                    dello Swat. Vi immergerete in due giorni di festeggiamenti nella valle dei Kalash&lsquo; vivendo esperienze
                    indimenticabili della loro cultura. Seguirà un incantevole e avventuroso viaggio in auto verso Mastuj e il lago
                    Khalti&lsquo; dove potrete ammirare fiumi scintillanti e gustare trote di montagna fresche. La strada proseguirà verso
                    la mozzafiata valle di Hunza&lsquo; dove avrete l&apos;opportunità di esplorare i storici forti di Baltit e Altit&lsquo; ammirare le
                    acque color smeraldo del lago Attabad e i maestosi coni di Passu. Godetevi una giornata rilassante dedicata allo
                    shopping di souvenir nei vicoli di Karimabad&lsquo; prima di concludere con una cena speciale a 2700 metri di
                    altitudine presso il punto panoramico di Duikar. Il viaggio terminerà a Islamabad&lsquo; dove potrete esplorare la città&lsquo;
                    gustare deliziosi piatti e conservare i ricordi dei vibranti festival Kalash e della magnifica bellezza del Pakistan
                    settentrionale.</p>

            </div>

            
            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-1  font-poppins'>Itinerario giornaliero</h1>
                <h3 className='text-[24px] font-light underline  pb-3 font-poppins'>Itinerario di 14 giorni: Chilum Joshi Festival di Kalash i.e festa di primavera&lsquo; 13-16
                    maggio</h3>
                <div className='list-none'>
                    <ul className='list-none'>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 1: </span> Arrivo all&apos;aeroporto internazionale di Islamabad.</li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 2: </span> viaggio in auto verso Swat i.e 240 km&lsquo; 3 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 3: </span> viaggio in auto fino a Chitral i.e 245 km&lsquo; 7 ore  </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 4: </span> 1° giorno di festival i.e 30 km&lsquo; 1 ora e 30 minuti &lsquo; pernottamento nella valle di Kalash </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 5: </span> 2° giorno di festival i.e 30 km&lsquo; 1 ora e 30 minuti &lsquo; pernottamento nella valle di Kalash </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 6: </span> trasferimento a Mastuj i.e 145 km&lsquo; 5 ore </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 7: </span> viaggio al lago Khalti i.e 140 km&lsquo; 4 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 8: </span> viaggio panoramico in auto tra fiumi e montagne (210 km&lsquo; 5 ore) fino alla Valle di Hunza </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 9: </span> Mattina di riposo&lsquo; pomeriggio escursione ai forti di Hunza</li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 10:</span>  escursione al lago Attabad e all&apos;Upper Hunza</li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 11:</span>  giornata di relax&lsquo; acquisto di souvenir&lsquo; esperienza del tramonto e cena speciale a 2700 metri. </li>
                      <li   className='font-poppins text-[30px]  md:text-[20px] '><span className='font-semibold font-poppins'> Giorno 12:</span>  da Hunza a Naran i.e 315 km&lsquo; 6 ore e 30 minuti </li>
                      
                    </ul>
                        
                    
                    
                    
                </div>
                
            </div>

            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-1  font-poppins'>Itinerario giornaliero</h1>
                <h3 className='text-[24px] font-light underline  pb-3 font-poppins'>Itinerario di 14 giorni: Uchal Festival i.e festival estivo&lsquo; 20-22 agosto </h3>
                <div className='list-none'>
                    
                <ul className='list-none'>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 1: </span> Arrivo all aeroporto internazionale di Islamabad. </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 2: </span> viaggio in auto verso Swat i.e 240 km&lsquo; 3 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 3: </span> trasferimento a Chitral i.e 245 km&lsquo;&lsquo; 7 ore </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 4: </span> 1° giorno di festival i.e 30 km&lsquo; 1 ora e 30 minuti &lsquo; pernottamento nella valle
                      di Kalash </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 5: </span> 2° giorno di festival i.e 30 km&lsquo; 1 ora e 30 minuti &lsquo; pernottamento nella valle
                      di Kalash </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 6: </span> trasferimento a Mastuj i.e 145 km&lsquo; 5 ore  </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 7: </span> viaggio al lago Khalti i.e 140 km&lsquo; 4 ore e 30 minuti  </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 8: </span> viaggio panoramico in auto tra fiumi e montagne i.e 210 km&lsquo; 5 ore  fino alla
                      Valle di Hunza </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 9: </span> Mattina di riposo&lsquo; pomeriggio escursione ai forti di Hunza</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 10:</span>  escursione al lago Attabad e all Upper Hunza</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 11:</span>  giornata di relax &lsquo; acquisto di souvenir &lsquo; esperienza del tramonto e cena
                      speciale a 2700 metri.</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 12:</span>  da Hunza a Naran i.e 315 km &lsquo; 6 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 13:</span>  arrivo a Islamabad nel pomeriggio i.e 280 km 6 ore  Pernottamento a Islamabad</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 14:</span>  check-out dall hotel a metà giornata &lsquo; escursione pomeridiana a Islamabad e trasferimento in aeroporto dopo cena.</li>
                    </ul>
                   
                    
                    
                </div>
                
            </div>

            <div className='px-[60px] flex flex-col flex-wrap max-w-6xl' id='Itinery'>
                <h1 className='text-[28px] font-semibold pb-1  font-poppins'>Itinerario giornaliero</h1>
                <h3 className='text-[24px] font-light underline  pb-3 font-poppins'>Itinerario di 9 giorni: Kalash Choimus Festival i.e festival invernale&lsquo; 15-22 dicembre</h3>
                <div className='list-none'>
                    
                    <ul className='list-none'>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 1:</span>  Arrivo allaeroporto internazionale di Islamabad.</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 2:</span> viaggio in auto verso Swat i.e 240 km&lsquo; 3 ore e 30 minuti</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 3:</span> viaggio in auto fino a Chitral i.e 245 km&lsquo; 7 ore</li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 4:</span> intera giornata dedicata al festival 30 km&lsquo; 1 ora e 30 minuti&lsquo;
                      pernottamento nella valle di Kalash </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 5:</span> escursione a Chitral  </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 6:</span> viaggio verso Swat i.e 140 km&lsquo; 4 ore e 30 minuti </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 7:</span> pernottamento a Peshawar </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 8:</span> ritorno a Islamabad i.e 2 ore&lsquo; escursione pomeridiana </li>
                      <li   className='font-poppins text-[30px] md:text-[20px]'><span className='font-semibold font-poppins'>Giorno 9:</span> check-out dell hotel a mezzogiorno&lsquo; escursione pomeridiana a Islamabad&lsquo;
                      trasferimento all aeroporto dopo cena.</li>

                    </ul>
                    
                    
                    
                </div>
                
            </div>
            

            <div ref={myRef}  className='px-[60px] max-w-6xl' id='Services'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>Note per il viaggio</h1>
                <div className='list-none'>
                    
                    <p  className='font-poppins'><GoDotFill/>Durante il viaggio, il tempo medio di guida sarà di circa 5 ore, con un massimo di 7 ore al
                     giorno. È consigliabile prepararsi adeguatamente portando con sé le seguenti attrezzature:
                     buone scarpe da trekking, una giacca leggera antipioggia e strati di abbigliamento adatti alle
                     varie condizioni meteorologiche che si incontreranno lungo il percorso. Inoltre, un zaino
                     resistente sarà utile per trasportare acqua e gli effetti personali, insieme a una borraccia per
                     mantenere l'idratazione. </p>
                    <p  className='font-poppins'><GoDotFill/>Le condizioni delle strade in queste regioni montuose possono variare, il che potrebbe causare
                     ritardi nei tempi di percorrenza. Nel caso di blocco stradale imprevisto che impedisca il
                     proseguimento del viaggio, ci occuperemo dell&apos;organizzazione dell&apos;alloggio e dei pasti durante
                     il periodo supplementare. Tuttavia, vi chiederemo di coprire le spese aggiuntive per i giorni
                     extra. </p>
                    <p  className='font-poppins'><GoDotFill/>È altamente consigliabile stipulare un&apos;assicurazione sanitaria dal proprio Paese di origine che
                    copra le spese mediche in caso di emergenza durante il viaggio. </p>
                    <p  className='font-poppins'><GoDotFill/>Eventuali servizi aggiuntivi non inclusi nell&apos;itinerario o modifiche al programma durante il tour
                    comporteranno costi aggiuntivi, i quali verranno discussi anticipatamente con la guida. </p>
                    
                    
                </div>
                {/* &apos; */}
            </div>

            <div   className='px-[60px] max-w-6xl' id='Services'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>Servizi inclusi:</h1>
                <div className='list-none'>
                
                <p  className='font-poppins'><GoDotFill/>Sistemazioni ordinate e pulite in
                    hotel/guest house/rifugi di legno, secondo
                    le disponibilità della regione </p>
                <p className='font-poppins'><GoDotFill/>Tutti i trasporti via terra (mini-bus,
                    landcruiser/jeep); </p>
                <p  className='font-poppins'><GoDotFill/>Tutte le sistemazioni per la notte sono a
                    due letti, la maggior parte con Wi-Fi e acqua calda, come disponibile nelle zone di montagna </p>
                <p  className='font-poppins'><GoDotFill/>Guida professionale autorizzata; </p>
                <p  className='font-poppins'><GoDotFill/>Tre pasti e acqua minerale; </p>
                <p  className='font-poppins'><GoDotFill/>Biglietti d&apos;ingresso ai siti storici dell&apos;itinerario </p>
                <p  className='font-poppins'><GoDotFill/>Pedaggi. </p>
                
                </div>
                
            </div>
            

            <div  className='px-[60px] max-w-6xl' id='Notes'>
                <h1 className='text-5xl font-semibold pb-3 font-poppins'>Servizi non inclusi:</h1>
                <div className='list-none flex flex-col gap-2'>
                
                <p  className='font-poppins'><GoDotFill/>Biglietto aereo internazionale </p>
                <p  className='font-poppins'><GoDotFill/>Assicurazione di viaggio </p>
                <p  className='font-poppins'><GoDotFill/>Visto pakistano (possiamo fornire assistenza con i documenti necessari per la richiesta) </p>
                <p  className='font-poppins'><GoDotFill/>Mance per le guide e gli autisti </p>
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