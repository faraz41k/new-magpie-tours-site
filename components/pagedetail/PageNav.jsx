import React from 'react'

const PageNav = () => {
  return (
    <div className=' max-h-11 scroll-smooth bg-black  py-5  flex justify-evenly items-center shadow-lg overflow-hidden scroll-pt-48'> 
            
            <button className='btn btn-ghost'>
            <a className='no-underline text-3xl font-poppins font-light text-white hover:text-gray-300' href="#Overview"> Overview</a>
            </button>
            <button className='btn btn-ghost'>
            <a className='no-underline text-3xl font-poppins font-light text-white hover:text-gray-300' href="#Itinery">Itinery</a>
            </button>
            <button className='btn btn-ghost'>
            <a className='no-underline text-3xl font-poppins font-light text-white hover:text-gray-300' href="#Services">Services</a>
            </button>
            <button className='btn btn-ghost'>
            <a className='no-underline text-3xl font-poppins font-light text-white hover:text-gray-300' href="#Notes">Notes for Trip</a>
            </button>
             
        </div>
  )
}

export default PageNav