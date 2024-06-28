import React from 'react'
import Testimonial from './Testimonial';


import { getReview } from '../sanity/sanity/sanity-utils'; 

const TestimonialContainer =async () => {

const reviewsData = await getReview()



  return (
    <div className='w-full  '>
        <Testimonial  reviews = {reviewsData}/>
    </div>
  )
}

export default TestimonialContainer
