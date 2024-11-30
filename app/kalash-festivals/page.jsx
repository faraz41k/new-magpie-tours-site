import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'

import PageNav from '@/components/pagedetail/PageNav'
import FestivalDetail from '@/components/FestivalDetails'



import { getHunzaRetreat, getHunzaSkurdu, getKKHSilkRoute, getKalashFestivals } from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'Kalash Festivals  ',
  description: "Experience the vibrant Kalash Festival with Magpie Tours in Pakistan.Immerse yourself in the rich cultural heritage, unique traditions, and stunning landscapes of the Kalash Valley. Join us for an unforgettable cultural adventure. Book your Kalash Festival tour today!"
}



const  ProductDetail = async () => {
  const HunzaRetreat =await getHunzaRetreat()
  const HunzaRetreatData = HunzaRetreat[0]
  const cardName1= HunzaRetreatData.name
  const cardDetail1 = HunzaRetreatData.overview
  const cardImage1= HunzaRetreatData.cardimage
  const url1=HunzaRetreat.url
  

  const HunzaSkardu = await getHunzaSkurdu()
  const HunzaSkuraduData = HunzaSkardu[0]
  const cardName2= HunzaSkuraduData.name
  const cardDetail2 = HunzaSkuraduData.overview
  const cardImage2= HunzaSkuraduData.cardimage
  const url2=HunzaSkuraduData.url

  const SilkRoute =await getKKHSilkRoute()
  const SilkRouteData = SilkRoute[0]
  const cardName3= SilkRouteData.name
  const cardDetail3 = SilkRouteData.overview
  const cardImage3= SilkRouteData.cardimage
  const url3=SilkRouteData.url

  



  const kalashFestivals = await getKalashFestivals()
  
  const data = kalashFestivals[0]
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
          <FestivalDetail 
          
          services={data.Services_Included}
          notIncluded ={data.Not_Included}
          notes={data.Notes}
          map= {data.map}
          duration={data.duration}
          destination={data.destination}
          guide={data.guide}
          activities={data.activities}
          calender={data.calender}
          cardName1={cardName1}
          cardDetail1={cardDetail1}
          cardImage1={cardImage1}
          cardName2={cardName2}
          cardDetail2={cardDetail2}
          cardImage2={cardImage2}
          cardName3={cardName3}
          cardDetail3={cardDetail3}
          cardImage3={cardImage3}
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