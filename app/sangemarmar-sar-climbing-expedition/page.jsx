import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getExpSangemarmar, getExpMuchuchish,getExpBroeadPeak,getExpKoranKoh } from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'Sangemar Mar Sar Climbing Expedition',
  description: "Join Magpie Tours for a thrilling Sangemar Mar Peak climbing expedition in the Hunza region. Experience expert-guided mountaineering, breathtaking views, and unparalleled adventure in Pakistan&#39;s stunning landscapes. Book your climb today!"
}



const  ProductDetail = async () => {
  const ExpMuchuchish =await getExpMuchuchish()
  const Muchuchish = ExpMuchuchish[0]
  const cardName1= Muchuchish.name
  const cardDetail1 = Muchuchish.overview
  const cardImage1= Muchuchish.cardimage
  const url1=Muchuchish.url

  const ExpBroeadPeak = await getExpBroeadPeak()
  const BroeadPeak = ExpBroeadPeak[0]
  const cardName2= BroeadPeak.name
  const cardDetail2 = BroeadPeak.overview
  const cardImage2= BroeadPeak.cardimage
  const url2=BroeadPeak.url

  const ExpKoranKoh =await getExpKoranKoh()
  const KoranKoh = ExpKoranKoh[0]
  const cardName3= KoranKoh.name
  const cardDetail3 = KoranKoh.overview
  const cardImage3= KoranKoh.cardimage
  const url3=KoranKoh.url

  const ExpSangemarmar = await getExpSangemarmar()
  
  const data = ExpSangemarmar[0]
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