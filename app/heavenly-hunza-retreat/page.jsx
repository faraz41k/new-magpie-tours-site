import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getHunzaRetreat, getKKHSilkRoute, getKalashFestivals, getNorthBlossom } from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'Heavenly Hunza Valley Retreat : "Experience the best of Pakistan with Magpie Tours. From skiing and mountaineering to trekking and climbing, immerse yourself in rich cultural traditions, religious sites, and local cuisine. We provide comprehensive logistics and arrangements for a seamless adventure. Discover Pakistan with us!,Pakistan, surrounded by breathtaking landscapes and serene beauty. Book your rejuvenating escape today!',
  description: 'Experience ultimate relaxation with Magpie Tours&#39; Heavenly Hunza Retreat.Enjoy extended days of tranquility in the stunning Hunza Valley of North Pakistan, surrounded by breathtaking landscapes and serene beauty. Book your rejuvenating escape today!"'
}




const  ProductDetail = async () => {
  const KalashFestivals =await getKalashFestivals()
  const KalashFestivalsData = KalashFestivals[0]
  const cardName1= KalashFestivalsData.name
  const cardDetail1 = KalashFestivalsData.overview
  const cardImage1= KalashFestivalsData.cardimage
  const url1=KalashFestivalsData.url

  const NorthBlossom =await getNorthBlossom()
  const NorthBlossomData = NorthBlossom[0]
  const cardName2= NorthBlossomData.name
  const cardDetail2 = NorthBlossomData.overview
  const cardImage2= NorthBlossomData.cardimage
  const url2=NorthBlossomData.url

  const SilkRoute =await getKKHSilkRoute()
  const SilkRouteData = SilkRoute[0]
  const cardName3= SilkRouteData.name
  const cardDetail3 = SilkRouteData.overview
  const cardImage3= SilkRouteData.cardimage
  const url3=SilkRouteData.url


  const HunzaRetreat = await getHunzaRetreat()
  
  const data = HunzaRetreat[0]
  const sliderImages = data.Slider_Images;
  console.log(data);
  
  return (
    
    <div className=' self-stretch  flex flex-col '>
        <div >
          
            <PageHero banner= {data.cardimage} sliderImages ={sliderImages}  name={data.name}/>
        </div>
        {/* pageGetails */}
        <div>
          <PageNav/>
        </div>

        <div className=''>
          <PageDetails 
           overview={data.overview}
           Itenary={data.Itenary}
           services={data.Services_Included}
           notIncluded ={data.Not_Included}
           notes={data.Notes}
           map= {data.map} 
           activity={data.activities}
           duration={data.duration}
           guide={data.guide}
           destination={data.destination}
           calender={data.calender}
           cardname1 ={cardName1}
           cardname2 = {cardName2}
           cardname3= {cardName3}
           details1={cardDetail1}
           details2={cardDetail2}
           details3={cardDetail3}
           image1={cardImage1}
           image2={cardImage2}
           image3={cardImage3}
           price={data.price}
           url1={url1}
           url2={url2}
           url3={url3}
          />
          
        </div>
        
        
        
        
        
    </div>
  )
}

export default ProductDetail


// static section home 
// review forms
// third party review