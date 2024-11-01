import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getNangaparbatRposhi,getFairyMeadowsShimshal,getPatondasTrek,getRushLakePassu } from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'Nangaparbat & Rakaposhi Basecamps Trek ',
  description: "Embark on an epic summer adventure with Magpie Tours, trekking to the base camps of Nanga Parbat and Rakaposhi in Pakistan. Experience breathtaking mountain landscapes, challenging trails, and the thrill of high-altitude trekking. Book your unforgettable trek today!"
}



const  ProductDetail = async () => {
  const FairyMeadowsShimshal =await getFairyMeadowsShimshal()
  const FairyMeadowsShims= FairyMeadowsShimshal[0]
  const cardName1= FairyMeadowsShims.name
  const cardDetail1 = FairyMeadowsShims.overview
  const cardImage1= FairyMeadowsShims.cardimage
  const url1 = FairyMeadowsShims.url

  const NagmaValley = await getPatondasTrek()
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


  const NangaparbatRposhi = await getNangaparbatRposhi()
  
  const data = NangaparbatRposhi[0]
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