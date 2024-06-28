import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getFairyMeadowsShimshal,getNagmaValley,getRushLakePassu,getShishperMeadows } from '@/sanity/sanity/sanity-utils'


export const metadata = {
  title: 'Fairy Meadows &amp; Shimshal Valley ',
  description: "Experience thrilling jeep rides to Shimshal and Fairy Meadow with Magpie Tours. Explore the last valleys of Pakistan and marvel at the 9th highest mountain in the world. Join us for an unforgettable adventure through breathtaking landscapes. Book your journey today!"
}


const  ProductDetail = async () => {
  const ShishperMeadows =await getShishperMeadows()
  const ShishperMeadow= ShishperMeadows[0]
  const cardName1= ShishperMeadow.name
  const cardDetail1 = ShishperMeadow.overview
  const cardImage1= ShishperMeadow.cardimage
  const url1 = ShishperMeadow.url

  const NagmaValley = await getNagmaValley()
  const NagmaVal = NagmaValley[0]
  const cardName2= NagmaVal.name
  const cardDetail2 = NagmaVal.overview
  const cardImage2= NagmaVal.cardimage
  const url2 = NagmaVal.url

  const RushLakePassu =await getRushLakePassu()
  const RushLakePass = RushLakePassu[0]
  const cardName3= RushLakePass.name
  const cardDetail3 = RushLakePass.overview
  const cardImage3= RushLakePass.cardimage
  const url3 = RushLakePass.url

  const FairyMeadowsShimshal = await getFairyMeadowsShimshal()
  
  const data = FairyMeadowsShimshal[0]
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