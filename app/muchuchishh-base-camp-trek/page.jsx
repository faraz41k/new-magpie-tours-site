import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getK2Broadpeak, getMuchuchishh, getPatondasTrek, getShishperMeadows,  } from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'Muchuchishh Basecamp Trek',
  description: "Embark on an advanced trek to the base camp of Muchuchish, an unclimbed peak in Pakistan with Magpie Tours. Explore unforgettable terrains and less-traveled paths, experiencing the pristine beauty of this hidden gem.Book your extraordinary adventure today!"
}



const  ProductDetail = async () => {
  const ShishperMeadows =await getShishperMeadows()
  const ShishperMeadow= ShishperMeadows[0]
  const cardName1= ShishperMeadow.name
  const cardDetail1 = ShishperMeadow.overview
  const cardImage1= ShishperMeadow.cardimage
  const url1 = ShishperMeadow.url

  const K2Broadpeak = await getK2Broadpeak()
  const K2Broadpk = K2Broadpeak[0]
  const cardName2= K2Broadpk.name
  const cardDetail2 = K2Broadpk.overview
  const cardImage2= K2Broadpk.cardimage
  const url2 = K2Broadpk.url

  const NagmaValley = await getPatondasTrek()
  const NagmaVal = NagmaValley[0]
  const cardName3= NagmaVal.name
  const cardDetail3 = NagmaVal.overview
  const cardImage3= NagmaVal.cardimage
  const url3 = NagmaVal.url

  const Muchuchishh = await getMuchuchishh()
  
  const data = Muchuchishh[0]
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