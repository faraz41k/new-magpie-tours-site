import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getExpMuchuchish, getExpK2, getExpKoranKoh,getExpKunyang } from '@/sanity/sanity/sanity-utils' 

export const metadata = {
  title: 'Muchuchishh Climbing Expedition',
  description: "Embark on a challenging Muchuchish climbing expedition with Magpie Tours, the specialists in mountaineering. Conquer this unclimbed peak with expert guides and exceptional support. Book your adventure today!"
}



const  ProductDetail = async () => {
  const ExpK2 =await getExpK2()
  const K2Exp = ExpK2[0]
  const cardName1= K2Exp.name
  const cardDetail1 = K2Exp.overview
  const cardImage1= K2Exp.cardimage
  const url1= K2Exp.url

  const ExpKoranKoh = await getExpKoranKoh()
  const KoranKoh = ExpKoranKoh[0]
  const cardName2= KoranKoh.name
  const cardDetail2 = KoranKoh.overview
  const cardImage2= KoranKoh.cardimage
  const url2= KoranKoh.url

  const ExpKunyang =await getExpKunyang()
  const Kunyang = ExpKunyang[0]
  const cardName3= Kunyang.name
  const cardDetail3 = Kunyang.overview
  const cardImage3= Kunyang.cardimage
  const url3=Kunyang.url

  

  const ExpMuchuchish = await getExpMuchuchish()
  
  const data = ExpMuchuchish[0]
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