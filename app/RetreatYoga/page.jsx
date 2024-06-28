import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getYogaRetreats, getSkiShopdinPass, getDeosaiBar, getCorporateRetreats } from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'Yoga retreats',
  description: "Join Magpie Tours for yoga retreats in Northern Pakistan. Experience serene landscapes, rejuvenating sessions, and expert guidance. Book your transformative yoga retreat today!"
}



const  ProductDetail = async () => {
  const Product1 =await getYogaRetreats()
  const p1= Product1[0]
  const cardName1= p1.name
  const cardDetail1 = p1.overview
  const cardImage1= p1.cardimage
  const url1=p1.url

  const Product2 = await getSkiShopdinPass()
  const p2 = Product2[0]
  const cardName2= p2.name
  const cardDetail2 = p2.overview
  const cardImage2= p2.cardimage
  const url2=p2.url

  const Product3 = await getCorporateRetreats()  
  const p3 = Product3[0]
  const cardName3= p3.name
  const cardDetail3 = p3.overview
  const cardImage3= p3.cardimage
  const url3=p3.url
  

  
  const GemStoneSafari = await getYogaRetreats()
  const data = GemStoneSafari[0]
  const sliderImages = data.Slider_Images;
  
  
  
 
  
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
          url={data.url}
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