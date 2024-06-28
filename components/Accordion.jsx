"use client"


import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";





const Accordion = ({title, answer}) => {
  const [accord, setAccord] =useState(false)
  return (
    <div className=" w-full md:w-full  xlg:w-2/3">
        
            <button onClick={()=>setAccord(!accord)} className='flex justify-between w-full py-6 px-4 rounded-lg border-none items-center'>
            <span className='text-[24px] text-gray-black font-poppins md:text-[18px] '>{title}</span>
              {accord ? <FaMinusCircle className='text-[24px]  mx-2 text-gray-700'/> : <FaPlusCircle className='text-[24px] text-gray-700'/>  }
            </button>

              <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-700 text-lg px-2 py-2 ${accord ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className='overflow-hidden text-[20px] py-2'>{answer}</div>
              </div>
      
        
    </div>
  )
}

export default Accordion