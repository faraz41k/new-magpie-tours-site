
"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const mobLinks= ["Climbing", "Trekking", "Site", "Expeditions" ]
  
  const [openNav, setOpenNav]= useState(false)

  
   const handleNav = () => {
    setOpenNav(!openNav);
  }
  


  return (
    <header className="self-stretch bg-transparent h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-bla font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between relative bg-transparent">
        <Link href='/' className="[text-decoration:none] shrink-0 flex flex-row items-center justify-center gap-[2px] text-[inherit]">
          <Image
            className="relative  object-cover"
            alt=""
            src="/logo.svg"
            height={84}
            width={84}
          />
          <div className="shrink-0 flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">Magpie</div>
            <div className="relative text-sm leading-[16px] font-medium">
              Tours
            </div>
          </div>
        </Link>
        <div className="shrink-0 flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[30px] lg:hidden ">
                  <Link href='/' className="[text-decoration:none] uppercase hover:text-blue-400 relative leading-[22px] font-semibold text-[inherit]">
                    HOME
                  </Link>
                  <Link href='/Climbing' className="[text-decoration:none] uppercase hover:text-blue-400 relative leading-[22px] text-[inherit]">
                    Climbing
                  </Link>
                  <Link href='/Trekking' className="[text-decoration:none] uppercase hover:text-blue-400 relative leading-[22px] text-[inherit]">
                    Trekking
                  </Link>
                  <Link href='/Site' className="[text-decoration:none] uppercase hover:text-blue-400 relative leading-[22px]  text-[inherit]">
                    Site seeing
                  </Link>
                  <Link href='/Expeditions' className="[text-decoration:none] uppercase hover:text-blue-400 relative leading-[22px] text-[inherit]">
                    Expeditions
                  </Link>
                  <Link href='/About' className="[text-decoration:none] uppercase hover:text-blue-400 relative leading-[22px] text-[inherit]">
                    About Us
                  </Link>
                  
                  <Link href='/Contact'>
                      <button className="cursor-pointer px-4 py-2 text-white rounded-full bg-black [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-body-regular-600 text-center inline-block">
                          Contact
                      </button>
                  </Link>
          </div>
          <button onClick={handleNav} className="cursor-pointer [border:none] p-0 bg-[transparent] shrink-0 hidden flex-row items-center justify-center lg:flex">
            <Image 
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
              height={40}
              width={40}
            />
          </button>
        </div>

        <div className={openNav ? "bg-slate-100/90  w-screen left-0 top-0 absolute px-4 py-7 flex flex-col rounded-xl gap-2 sm:hidden " : 'absolute left-[-150%] sm:hidden'}>
          <Image onClick={handleNav} src='/cancel.png' width={25} height={25} alt="img" className="cursor-pointer absolute right-10 top-10 my"/>
          <ul className="flex flex-col justify-center items-start gap-8 list-none ">
            {mobLinks.map((link, index)=>(
              <Link onClick={handleNav} href={`/${link}`} key={index} className=" text-xl my-4 no-underline text-black  border-b  ">
                    {link}
                </Link>
            ))}
          </ul>
          <button  className="px-6 py-2 bg-teal-900 border-none ">
            <Link onClick={handleNav} href='/Contact' className=" uppercase  no-underline text-white  border-b-2 border-white ">Contact</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
