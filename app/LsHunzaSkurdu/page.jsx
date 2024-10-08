import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getHunzaSkurdu,getHunzaRetreat, getNorthBlossom,getKKHSilkRoute } from '@/sanity/sanity/sanity-utils'


export const metadata = {
  title: 'Ultimate Skardu & Hunza',
  description: "Discover the ultimate Skardu and Hunza sightseeing tour with Magpie Tours Pakistan. Experience breathtaking landscapes, rich cultural heritage, and unforgettable adventures. Join travelers from around the globe and explore the stunning beauty of Pakistans most iconic regions. Book your tour today..!"
}



// all the data for product..here
  
const  ProductDetail = async () => {
  const HunzaRetreat =await getHunzaRetreat()
  const HunzaRetreatData = HunzaRetreat[0]
  const cardName1= HunzaRetreatData.name
  const cardDetail1 = HunzaRetreatData.overview
  const cardImage1= HunzaRetreatData.cardimage
  const url1=HunzaRetreatData.url
  
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
  
  const HunzaSkardu = await getHunzaSkurdu()
  const data = HunzaSkardu[0]
  const sliderImages = data.Slider_Images;
  const price=data.price;
  console.log(price,'is price ?');
  
  return (
    
    <div className=' self-stretch  flex flex-col '>
        <div >
          
            <PageHero banner= {data.cardimage} sliderImages ={sliderImages}  name={data.name}/>
        </div>
        {/* pageGetails */}
        <div>
          <PageNav/>
        </div>

        <div >
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