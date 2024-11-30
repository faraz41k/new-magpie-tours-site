import React from 'react'

import PageHero from '../../components/pagedetail/PageHero'
import PageDetails from '../../components/pagedetail/PageDetails'
import PageNav from '@/components/pagedetail/PageNav'



import { getSkiShopdinPass,getPeshawarEilNordPakistan, getKalashFestivalPakistan, getAvventuraNelNordPakistan} from '@/sanity/sanity/sanity-utils'

export const metadata = {
  title: 'Ski Shopdin Pass',
  description: "Ski on Shopdin Pass in Shimshal Valley, Hunza with Magpie Tours. Experience thrilling slopes, stunning views, and expert guidance. Book your ski adventure today!"
}


const  ProductDetail = async () => {
  const PeshawarEilNord =await getPeshawarEilNordPakistan()
  const PeshawarNord= PeshawarEilNord[0]
  const cardName1= PeshawarNord.name
  const cardDetail1 = PeshawarNord.overview
  const cardImage1= PeshawarNord.cardimage
  const url1=PeshawarNord.url

  const AvventuraNelNord = await getAvventuraNelNordPakistan()
  const Avventura = AvventuraNelNord[0]
  const cardName2= Avventura.name
  const cardDetail2 = Avventura.overview
  const cardImage2= Avventura.cardimage
  const url2=Avventura.url

  const KalashFestivalPakistan = await getKalashFestivalPakistan()
  const KalashFestival = KalashFestivalPakistan[0]
  const cardName3= KalashFestival.name
  const cardDetail3 = KalashFestival.overview
  const cardImage3= KalashFestival.cardimage
  const url3=KalashFestival.url
  

  
  const PeshawarEilNordPakistan = await getAvventuraNelNordPakistan()
  const data = PeshawarEilNordPakistan[0]
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
          langO={true}
          langIt={true}
          langMap={true}
          langNote={true}
          langInc={true}
          langNinc={true}
          />
          
        </div>
        
        
        
        
        
    </div>
  )
}

export default ProductDetail


// static section home 
// review forms
// third party review