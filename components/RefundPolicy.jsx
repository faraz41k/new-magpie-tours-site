import Link from 'next/link'
import React from 'react'

const RefundPolicy = () => {
  return (
    <div className=" flex flex-col gap-8 items-start justify-center py-12 mt-5 font-poppins">
        <div>
        <h1>Refund Policy</h1>
            <p> At Magpie Tours, we are committed to providing unforgettable experiences that exceed your
                expectations. However, we understand that circumstances may arise that require cancellations or
                adjustments to your adventure plans. Please review our refund policy outlined below:
            </p>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>1. Booking Confirmation and Deposit:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>A booking is considered confirmed once the required deposit or full payment is received.</li>
                    <li>Deposits are non-refundable unless otherwise stated in specific tour packages.</li>
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>2. Cancellation by Customer:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>Cancellations made 45 prior to the scheduled departure date are eligible for a refund.</li>
                    <li>Refunds for cancellations made within 30 days of the departure date may be subject to
a cancellation fee, depending on the tour package.</li>
                    <li>No refunds will be issued for cancellations made less than 30 days before the scheduled
departure date.</li>
                </ul>
            </div>
        </div>


        <div>
            <div>
                <h3 className='underline py-3'>3. Cancellation by Magpie Tours:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>In the rare event that we must cancel a tour due to unforeseen circumstances such as
                        extreme weather, natural disasters, or insufficient bookings, you will be notified as soon
                        as possible.</li>
                    <li>In such cases, you will be offered the choice of rescheduling your tour or receiving a full
                        refund of the amount paid.</li>
                </ul>
            </div>
        </div>
        
        <div>
            <div>
                <h3 className='underline py-3'>4. Refund Process:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>All refund requests must be made in writing via email or through our official communication channels.</li>
                    <li>Refunds will be processed within 21 days of receiving the cancellation request.</li>
                    <li>Refunds will be issued using the same method of payment used for the original booking.</li>
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>5. Unused Services:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>No refunds will be provided for any unused portion of a tour once it has commenced, including but not limited to accommodations, meals, transportation, or activities.</li>
                    
                </ul>
            </div>
        </div>


        <div>
            <div>
                <h3 className='underline py-3'>6. Exceptions:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>In exceptional cases such as medical emergencies or other extenuating circumstances, we may review refund requests on a case-by-case basis.</li>
                    
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>7. Travel Insurance:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>We highly recommend that all travelers purchase comprehensive travel insurance to cover unexpected events that may lead to cancellations, interruptions, or delays in their travel plans.</li>
                    
                </ul>
            </div>
        </div>

        <div>
            <div className='py-4' >
                <h3 className='underline py-3'>8. Changes to Itinerary:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>Magpie Tours reserves the right to modify or adjust tour itineraries, accommodations, transportation, or activities due to factors beyond our control. In such cases, we will make every effort to provide suitable alternatives or compensation where applicable.</li>
                    
                </ul>
            </div>

                <Link  href='/Contact'>
                    <button className='py-3 px-7 bg-black text-white font-poppins border-none rounded-lg'>Contact Us</button>
                </Link>
            
                <p className='underline py-2 font-bold'>By booking a tour with Magpie Tour, you agree to abide by the terms and conditions outlined in this
                        refund policy.
                    For any further inquiries or assistance, please don&#39;t hesitate to contact us.</p>
        </div>

        
    </div>
  )
}

export default RefundPolicy