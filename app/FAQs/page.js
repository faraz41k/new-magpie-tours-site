

import Accordion from '@/components/Accordion'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen mx-auto px-12 py-4 flex flex-col justify-start items-center'>
      <h1 className='font-poppins py-4'>Frequently Asked Questions</h1>
      
      <Accordion title="Where is magpie tours based?" answer="We are based in Hunza valley northern region of Pakistan." /> 
      <Accordion title="Is magpie tours registered and a licensed tour agency?" answer="Yes magpie tours is registered with SECP as a travel agency and licensed by DTS and can legally operate as a travel agency in Pakistan." /> 
      <Accordion title="What type of travel does magpie tours deal in?" answer="Magpie tours deals in inbound travel plans to Pakistan." /> 
      <Accordion title="What types of tours are arranged and managed by magpie tours?" answer="Magpie tours offer travel management for cultural and heritage trips, trekking groups, climbing expeditions, skiing groups, tailored trips and customised trip to Pakistan." />
      <Accordion title="Who can contact magpie tours?" answer="Every individual or groups from all around the world can contact magpie tours for bookings of all types of trips offered on our website." /> 
    </div>
  )
}

export default page