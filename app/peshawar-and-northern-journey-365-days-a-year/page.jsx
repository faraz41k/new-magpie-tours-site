import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getAlpineFloraDiscovery, getKKHSilkRoute, getKalashFestivals, getPeshawarNorth } from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'Peshawar and Northern Journey',
  description: "Discover the beauty of Peshawar, Swat, Gilgit, and Hunza year-round with Magpie Tours. Explore rich cultural heritage, stunning landscapes, and vibrant local traditions on this comprehensive journey through Pakistans most iconic regions. Book your adventure today!"
}



const  ProductDetail = async () => {
  const KalashFestivals =await getKalashFestivals()
  const KalashFestivalsData = KalashFestivals[0]
  const cardName1= KalashFestivalsData.name
  const cardDetail1 = KalashFestivalsData.overview
  const cardImage1= KalashFestivalsData.cardimage
  const url1 =KalashFestivalsData.url

  const FloraDiscovery =await getAlpineFloraDiscovery()
  const floraDiscovery = FloraDiscovery[0]
  const cardName2= floraDiscovery.name
  const cardDetail2 = floraDiscovery.overview
  const cardImage2= floraDiscovery.cardimage
  const url2 =floraDiscovery.url



  const SilkRoute =await getKKHSilkRoute()
  const SilkRouteData = SilkRoute[0]
  const cardName3= SilkRouteData.name
  const cardDetail3 = SilkRouteData.overview
  const cardImage3= SilkRouteData.cardimage
  const url3 =SilkRouteData.url

  
  const PeshawarNorth = await getPeshawarNorth()
  const data = PeshawarNorth[0]
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