import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getKalashFestivals, getKKHSilkRoute,getPeshawarNorth } from '@/sanity/sanity/sanity-utils'


export const metadata = {
  title: 'KKH Silk Route South Bound',
  description: "Embark on a tailored tour with Magpie Tours from the Pakistan-China border to Lahore. Journey south through stunning northern landscapes, rich cultural sites, and vibrant cities. Experience the best of Pakistan on this unforgettable adventure. Book your comprehensive tour today!"
}


const  ProductDetail = async () => {

  const KalashFestivals =await getKalashFestivals()
  const KalashFestivalsData = KalashFestivals[0]
  const cardName1= KalashFestivalsData.name
  const cardDetail1 = KalashFestivalsData.overview
  const cardImage1= KalashFestivalsData.cardimage
  const url1 = KalashFestivalsData.url
  
  const PeshawarNorth =await getPeshawarNorth()
  const PeshawarNorthData = PeshawarNorth[0]
  const cardName2= PeshawarNorthData.name
  const cardDetail2 = PeshawarNorthData.overview
  const cardImage2= PeshawarNorthData.cardimage
  const url2 = PeshawarNorthData.url
  
  const SilkRoute =await getKKHSilkRoute()
  const SilkRouteData = SilkRoute[0]
  const cardName3= SilkRouteData.name
  const cardDetail3 = SilkRouteData.overview
  const cardImage3= SilkRouteData.cardimage
  const url3 = SilkRouteData.url

  const KKHSilkRoute = await getKKHSilkRoute()
  
  const data = KKHSilkRoute[0]
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