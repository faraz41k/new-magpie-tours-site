

import Accordion from '@/components/Accordion'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen mx-auto px-12 py-4 flex flex-col justify-start items-center'>
      <h1 className='font-poppins py-4'>Frequently Asked Questions</h1>
      
      <Accordion title="Where is magpie tours based?" answer="We are based in Alidabad, a city in Hunza Valley, Gilgit-Baltistan, in the northern mountainous
                        region of Pakistan." /> 
      <Accordion title="Is magpie tours registered and a licensed tour agency?" answer="Yes, Magpie Tours is registered with the SECP (Securities and Exchange Commission of Pakistan)
                        as a travel agency and licensed by the Department of Tourism Services to legally operate as a
                        travel agency in Pakistan." /> 
      <Accordion title="Apart from the itinerary on this website, can you arrange or customize a trip for us?" answer="Yes, Magpie Tours can customize all types of cultural, heritage, trekking, climbing, skiing trips
                        according to your requirements and schedule. Please contact us via email or Whatsapp to
                        discuss how to tailor your trip!" />
      <Accordion title="What currency can we do the deposit in, and how to transfer the money?" answer="Magpie Tours accepts deposit transfers to our company bank account in Pakistan. You can use
                        your own bank or online platforms such as Wise to conduct the transfer. The remaining
                        payment can be paid as cash in US Dollars or Euros upon arrival." /> 
      <Accordion title="When is the best time to visit Pakistan?" answer="Due to the differences in weather in the plains and mountainous regions, it is best to plan your
                        visit to the northern mountain areas (Gilgit-Baltistan) between April to October. Spring and
                        Autumn offers beautiful blossoms or foliage. For the other areas of Pakistan (Lower Indus
                        Valley, Sindh and Punjab), it is best to visit in the winter season, between November to
                        Februrary. Please keep in mind that the monsoon season is between July to August." /> 
      <Accordion title="I'm a solo traveler. Can you help me with an invitation letter for visa application?" answer="According to the government regulations, you need to take up the services of a travel agency
                        for them to issue invitation letters. Even if you want to keep your trip flexible and independent,
                        you might still need help with lodging or car/jeep/camping gear rentals in the mountains. We
                        are happy to help you customize a trip according to your budget." /> 
      <Accordion title="We are joining your group and have applied for visa to Pakistan with your invitation letter,
                        but we have not heard back from the consulate after a long time. Can you help us?" answer="Yes, please contact us immediately on Whatsapp. We will try our best to help you get the visa
                        before your flight." /> 
      <Accordion title="What kind of clothes should I prepare for the trip to Pakistan?" answer="As the weather in the northern mountain areas (Gilgit-Baltistan) between April to October is
                        prone to change, bring layers suitable for hiking, from quick dry short sleeves, thin long sleeves
                        and trousers, a light rain jacket, and a warm outer layer. You can wear sandles and shoes
                        suitable for walking on unpaved terrains, and slippers to change into for evenings.
                        Summer in other parts of Pakistan, where you will land for an international flight, will be very
                        hot. Be prepared with light breezy long sleeves and trousers to protect from the sun. Winters
                        will get chilly, so add to the above with more warm outer layers." /> 
    </div>
  )
}

export default page