import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'


export const metadata = {
  title: 'Northern Pakistan Blossoms',
  description: "Experience the enchanting blossoms of Skardu and Hunza with Magpie Tours.Join us in March and April to witness cherry, apple, and apricot blossoms in full bloom. Discover the stunning landscapes and vibrant culture of Pakistan on this unforgettable tour. Book your spring adventure today!"
}


import { getKKHSilkRoute, getNorthBlossom,getPeshawarNorth,getChitralGilgit } from '@/sanity/sanity/sanity-utils'

const SilkRoute =await getKKHSilkRoute()
  const SilkRouteData = SilkRoute[0]
  const cardName1= SilkRouteData.name
  const cardDetail1 = SilkRouteData.overview
  const cardImage1= SilkRouteData.cardimage
  const url1 = SilkRouteData.url

  const PeshawarNorth =await getPeshawarNorth()
  const PeshawarNorthData = PeshawarNorth[0]
  const cardName2= PeshawarNorthData.name
  const cardDetail2 = PeshawarNorthData.overview
  const cardImage2= PeshawarNorthData.cardimage
  const url2 = PeshawarNorthData.url

  const ChitralGilgit =await getChitralGilgit()
  const ChitralGilgitData = ChitralGilgit[0]
  const cardName3= ChitralGilgitData.name
  const cardDetail3 = ChitralGilgitData.overview
  const cardImage3= ChitralGilgitData.cardimage
  const url3 = ChitralGilgitData.url


console.log(cardName1);

  





const  ProductDetail = async () => {

  const NorthBlossom = await getNorthBlossom()
  
  
  const data = NorthBlossom[0]
  const sliderImages = data.Slider_Images;
  console.log(data);
  
  return (
    
    <div className=' self-stretch  flex flex-col '>
        <div >
          
            <PageHero 
            banner= {data.cardimage}
            sliderImages ={sliderImages}
            name={data.name}
           
            
            />
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