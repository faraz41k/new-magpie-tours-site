import About from '@/components/About'
import Card from '@/components/Card'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen mx-auto px-12 py-6'>
        <About/>
        <div className='py-4 flex flex-col flex-wrap'>
          {/* <div>
            <h2 className='font-poppins px-2 '>Our Team</h2>
            <div className='border-b-2 border-black'></div>
          </div>
          <div className='flex md:flex-col'>
          <Card/>
          <Card/>  
          </div> */}
          
        </div>
        

    </div>
  )
}

export default page