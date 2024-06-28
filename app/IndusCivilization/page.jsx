import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getGandaharaCivil, getHistoryPak, getIndusCivilization } from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'Indus Valley Civilization',
  description: "Explore ancient and UNESCO heritage sites across Pakistan with Magpie Tours. Discover the rich history, cultural treasures, and architectural marvels that define Pakistan&#39;s heritage. Join us for an unforgettable journey through time. Book your cultural adventure today!"
}



const  ProductDetail = async () => {
  const GandaharaCivil =await getGandaharaCivil()
  const Gandahara = GandaharaCivil[0]
  const cardName1= Gandahara.name
  const cardDetail1 = Gandahara.overview
  const cardImage1= Gandahara.cardimage
  const url1=Gandahara.url

  const IndusCivil= await getIndusCivilization()
  const Indus = IndusCivil[0]
  const cardName2= Indus.name
  const cardDetail2 = Indus.overview
  const cardImage2= Indus.cardimage
  const url2=Indus.url

  const History =await getHistoryPak()
  const PakHistory = History[0]
  const cardName3= PakHistory.name
  const cardDetail3 = PakHistory.overview
  const cardImage3= PakHistory.cardimage
  const url3=PakHistory.url

  const IndusCivilization = await getIndusCivilization()
  
  const data = IndusCivilization[0]
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