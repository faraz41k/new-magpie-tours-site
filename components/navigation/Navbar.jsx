"use client"

import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'


import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";









const links = [
    // {
    //     title: 'Home',
    //     url: '/',
    // },

    {
        title: 'Landscapes & Traditions',
        url: '#',
        submenu:[
            {
                title:'Ultimate Skardu & Hunza',
                url:'/LsHunzaSkurdu'
            },

            {
                title:'Heavenly Hunza Valley Retreat',
                url:'/LsHeavenlyHunza'
            },

            {
                title:'Northern Pakistan Blossoms',
                url:'/LsNorthernBlossom'
            },

            {
                title:'KKH Silk Route South Bound',
                url:'/LsKKHSilkRoute'
            },

            {
                title:'Alpine Flora Discovery',
                url:'/LsAlpineFloraDiscovery'
            },

            {
                title:'Kalash Festivals',
                url:'/LsKalashFestivals'
            },
            
            {
                title:'Chitral & Gilgit Road Story',
                url:'/LsChitral&Gilgit'
            },

            {
                title:'Peshawar and Northern Journey',
                url:'/LsPeshawar&North'
            },
            {
                title:'Colors Of The North',
                url:'/LsColorsOfNorth'
            },
        ],
    },

    

    {
        title: 'UNESCO Heritage',
        url: '#',
        submenu:[
            {
                title:'Indus Valley Civilization',
                url:'/IndusCivilization'
            },

            {
                title:'History Across Pakistan',
                url:'/HistoryAcrossPak'
            },

            {
                title:'Gandharan Civilization',
                url:'/GandaharaCivilization'
            },
            
        ],
    },

    // {
    //     title: 'Festivals',
    //     url: '/About',
    //     submenu:[
    //         {
    //             title:'Kalash Festival',
    //             url:'/'
    //         },

    //         {
    //             title:'Hunza Festival',
    //             url:'/'
    //         },

    //         {
    //             title:'Gojal Festival',
    //             url:'/'
    //         },

    //         {
    //             title:'Hopaer Festival',
    //             url:'/'
    //         },
    //     ]
    // },

    {
        title: 'Trekking',
        url: '#',
        submenu:[
            {
                title:'Nangaparbat & Rakaposhi Basecamps Trek',
                url:'/TrekNangaparbat&Rakaposhi'
            },

            {
                title:'Fairy Meadows & Shimshal Valley',
                url:'/TrekFairyMeadows&Shimshal'
            },

            {
                title:'K2 & Broad Peak Basecamp Trek',
                url:'/TrekK2&BroadPeak'
            },

            {
                title:'Nangma Valley Trek Skardu',
                url:'/TrekNagmaValley'
            },

            {
                title:'Rush Lake Trek & Passu Glacier Hike',
                url:'/TrekRushLake&Passu'
            },

            {
                title:'Muchuchishh Basecamp Trek',
                url:'/TrekMuchuChishBaseCamp'
            },
            
            {
                title:'Shishper Meadows Trek & Passu Glacier Hike',
                url:'/TrekShisper&Passu'
            },
        ],
    },

    {
        title: 'Mountaineering',
        url: '#',
        submenu:[
            {
                title:'K-2 Climbing Expedition',
                url:'/ExpK2'
            },

            {
                title:'Broad Peak Climbing Expedition',
                url:'/ExpBroadPeak'
            },

            {
                title:'Nanga Parbat Climbing Expedition',
                url:'/ExpNangaparbat'
            },
            
            {
                title:'Spantik Peak Climbing Expedition',
                url:'/ExpSpantik'
            },

            {
                title:'Muchuchishh Climbing Expedition',
                url:'/ExpMuchuchish'
            },

            {
                title:'Sangemar Mar Sar Climbing Expedition',
                url:'/ExpSangemarmarsar'
            },

            {
                title:'Kunyang Chishh Climbing Expedition',
                url:'/ExpkunyangChish'
            },

            {
                title:'Koran Koh Climbing Expedition',
                url:'/ExpKoranKoh'
            },
        ],
    },

    {
        title: 'Tailored Trips',
        url: '#',
        submenu:[
            {
                title:'Skiing',
                url:'/CtSkiing'
            },

            {
                title:'Gem Hunters Pakistan',
                url:'/CtGemHunters'
            },

            {
                title:'Retreats',
                url:'/CtRetreats'
            },
        ]
    },

    {
            title: 'Partnerships',
            url: '/CtPartners',
            submenu:[
                {
                    title:'Avventura nel nord PAKISTAN',
                    url:'/PtAvventuraNord'
                },
    
                {
                    title:'Peshawar e il nord PAKISTAN',
                    url:'/PtPeshawarNord'
                },
    
                {
                    title:'Kalash festival PAKISTAN',
                    url:'/PtKalashFestival'
                },
            ]
    },
    {
        title: 'Blog',
        url: '/Blog',
    }

]

const Navbar = () => {
    const [mobMenuOpen , setMobMenuOpen]= useState(false)

    const openSideMenu= ()=>{
        setMobMenuOpen(true)
    }

    const closeSideMenu= ()=>{
        setMobMenuOpen(false)
    }

    
  return (
    <div className='mx-auto  h-[100px] flex w-full sm:px-[40px] md:px-[60px] px-[90px]  justify-between items-center py-2 text-sm  shadow-lg sticky  top-[0] [background:white] z-[100] '>
        {/* logo */}
        <section className='items-center  cursor-pointer'>
            <Link href='/'>
            <Image className=' absolute top-[-16px] left-[60px] md:absolute md:left-[30px] md:top-[-8px] rounded-full ' src='/magpieLOGO1.svg' alt='logo' height={120} width={120}/>
            </Link>
        </section>
       
        
        {/* right */}
        <section className='flex items-center justify-between gap-10 '> 
            {/* navlinks */}
            <div className='md:hidden sm:hidden flex z-10 items-center gap-4 transition-all'>
                {
                    
                    links.map((link)=>(
                        link.submenu ? 
                    <div key={link.title} className='list-none '>
                        <div className='relative flex items-center cursor-pointer justify-evenly no-underline text-[14px]  font-poppins text-gray-900 group px-3 py-2 transition-all group-hover:text-blue-900'>
                             {link.title}
                             {link.submenu && <IoIosArrowDown className='rotate-180 transition-all group-hover:rotate-0'/>}
                             {/* dopdown */}
                            {
                                link.submenu && (
                                    <h4 className='border-gray-400 font-medium font-poppins  absolute hover:z-[200] w-fit right-0 top-10 hidden bg-gray-black  flex-col gap-3 rounded-lg shadow-md transition-all group-hover:flex py-5'>
                                            {
                                                link.submenu.map((subLink)=>(
                                                    <Link key={subLink.title} href={subLink.url} className='hover:bg-blue-400 cursor-pointer  flex items-start no-underline pl-6 py-2 pr-8 text-black  hover:text-black gap-2' >
                                                        <span className='whitespace-nowrap  pl-3 text-whitesmoke-100 '>{subLink.title}</span>
                                                        
                                                    </Link>
                                                ))
                                            }
                                            
                                    </h4>
                                )
                            }
                            {/* dropdown */}
                            
                        </div>
                    </div>
                    : <Link key={link.title} className='list-none text-[14px] no-underline  font-poppins  text-gray-900' href={link.url} >{link.title}</Link>
                    ))
                }
                    
            </div>

            {/* buttons */}
            
        </section>

        <div className='flex '>
                <Link className='hidden sm:hidden  md:hidden xlg:inline-block' href='/Contact'>
                        <button className="btn bg-black text-white  border-none rounded-lg transition-all text-[16px] hover:text-gray-black py-2">Contact</button>
                </Link>
                <RxHamburgerMenu onClick={openSideMenu} className='hidden md:inline-block sm:inline-block  h-[24px] w-[24px]'/>
                
        </div>
        {
            mobMenuOpen && <MobMenu closeSideMenu={closeSideMenu} mobMenuOpen={mobMenuOpen}/>
        }
        
    </div>
  )
}

export default Navbar






function MobMenu({closeSideMenu, mobMenuOpen}) {
    
    
    return(
        <div className=' fixed left-0 top-0 hidden md:flex h-full justify-end min-h-screen w-full bg-black/60 ' style={{overflow: 'hidden' }}>
            <div className='h-full md:w-full bg-white px-4 py-4 '>
                <div className='flex justify-end'>
                    <RxCross2 onClick={closeSideMenu} className='cursor-pointer text-5xl'/>
                </div>

            {/* moblinks */}

                <section className='flex items-start justify-between gap-8 overflow-auto h-screen'> 
                    {/* navlinks */}
                    <div className=' flex flex-col items-start justify-center text-start gap-2 transition-all over'>
                        {
                            links.map((link,index)=>(
                            <NavItem link={link} key={index} closeSideMenu={closeSideMenu} />
                            ))
                        }
                            
                    </div>

                    {/* buttons */}
                    
                </section>
                
                <div className='py-2'>
                    <Link className='hidden sm:md:block    xlg:inline-block' href='/Contact'>
                        <button className="btn bg-black text-white w-full px-8 py-1 border-none rounded-lg transition-all hover:text-gray-black ">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}







function NavItem({link,closeSideMenu} ) {
    const [itemOpen, setItemOpen]= useState(false);

    const toggleItems = ()=>{
        setItemOpen(!itemOpen)
    }

    

    return(
        <div key={link.title} className='list-none ' >
                        <Link
                            onClick={toggleItems} 
                             href={link.url}
                             className='relative flex flex-col items-start justify-evenly no-underline font-poppins text-gray-900 group px-1 py-2  group-hover:text-blue-900'>
                             <h5 className='font-poppins text-[20px] flex items-center justify-center  font-thin'>{link.title}
                             {link.submenu && <IoIosArrowDown className={`text-sm transition-all ${itemOpen && "-rotate-180"}`}/>}
                             </h5>
                             
                            {
                                itemOpen &&
                                link.submenu && (
                                    <div className='border-gray-400   bg-white w-[200px] flex-col gap-3 rounded-lg  transition-all flex py-2'>
                                            {
                                                link.submenu.map((subLink)=>(
                                                    <Link onClick={closeSideMenu} key={subLink.title} href={subLink.url} className='hover:bg-slate-100 cursor-pointer flex items-start no-underline pl-6 py-2 pr-8 text-  hover:text-black gap-2' >
                                                        <span className='whitespace-nowrap text-[16px] pl-3 text-gray-black'><span className='text-teal-700 font-bold'>||</span> {subLink.title}</span>
                                                        
                                                    </Link>
                                                ))
                                            }
                                            
                                            

                                            
                                    </div>
                                )
                            }
                            {/* dropdown */}
                            
                        </Link>
                    </div>
    )
}