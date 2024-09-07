import Hero from "../components/hero"
import FeatureSection from "../components/feature-section"

import LatestTours from "../components/latest-tours"


import ServiceMdel from "../components/ServiceMdel"
import CompReview from "../components/CompReview"
import TestimonialContainer from "../components/TestimonialContainer"

import Head from "next/head"


export const metadata = {
  title: 'Magpie Tours | Experience the best of Pakistan with Magpie Tours. From skiing and mountaineering to trekking and climbing, immerse yourself in rich cultural traditions, religious sites, and local cuisine. We provide comprehensive logistics and arrangements for a seamless adventure. Discover Pakistan with us!',
  description: 'Experience the best of Pakistan with Magpie Tours. From skiing and mountaineering to trekking and climbing, immerse yourself in rich cultural traditions, religious sites, and local cuisine. We provide comprehensive logistics and arrangements for a seamless adventure. Discover Pakistan with us!',
}




export default async function  Home() {
  
  

 


  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start overflow-hidden !scroll-smooth">
        
        <Hero  />
        <FeatureSection />
        <ServiceMdel/>
        <TestimonialContainer/>
        <CompReview/>
        <LatestTours />
        
      </div>
  )
}
