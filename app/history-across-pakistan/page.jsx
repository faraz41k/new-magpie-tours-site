import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getHistoryPak,getGandaharaCivil,getIndusCivilization } from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'History Across Pakistan',
  description: "Discover the ancient history and Buddhist civilization sites of Pakistan with Magpie Tours. Explore rich cultural heritage, historical landmarks,and architectural wonders across the country. Join us for an enlightening journey through Pakistan&#39;s storied past. Book your tour today!"
}



const  ProductDetail = async () => {
  const GandaharaCiv =await getGandaharaCivil()
  const Gandahara = GandaharaCiv[0]
  const cardName1= Gandahara.name
  const cardDetail1 = Gandahara.overview
  const cardImage1= Gandahara.cardimage
  const url1=Gandahara.url

  const IndusCivilization = await getIndusCivilization()
  const Indus = IndusCivilization[0]
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


  const HistoryPak = await getHistoryPak()
  
  const data = HistoryPak[0]
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