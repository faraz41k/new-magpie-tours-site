import Link from 'next/link'
import React from 'react'

const Policy  = () => {
  return (
    <div className=" flex flex-col gap-8 items-start justify-center py-12 mt-5 font-poppins">
        <div>
        <h1>Booking Policy</h1>
            <p> At Magpie Tours, we strive to make the booking process as seamless and straightforward as possible,
                ensuring that our customers are well-informed and confident in their travel arrangements. Please
                review our booking policy, which aligns with our refund policy to provide a clear understanding of our
                terms and conditions.
            </p>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>1. Booking Confirmation:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>A booking is confirmed once the required deposit has been received.</li>
                    <li>A booking is confirmed once the required deposit has been received.</li>
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>2. Deposit and Payment:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>A deposit of 20% of the total tour cost is required at the time of booking to secure your reservation.</li>
                    <li>The remaining balance must be paid in full by 14 days before the scheduled departure date.</li>
                    <li>Failure to pay the balance by the due date may result in the cancellation of your booking without a refund of the deposit.</li>
                </ul>
            </div>
        </div>


        <div>
            <div>
                <h3 className='underline py-3'>3. Payment Methods:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>We accept bank transfers.</li>
                    <li>All payments must be made in USD.</li>
                </ul>
            </div>
        </div>
        
        <div>
            <div>
                <h3 className='underline py-3'>4. Customer Cancellations:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>If you need to cancel your booking, please refer to our refund policy for detailed information on eligible refunds and cancellation fees.</li>
                    <li>Cancellations must be submitted in writing via email or through our provided communication channels.</li>
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>5. Changes and Modifications:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>Requests for changes or modifications to your booking (such as travel dates,
                        accommodations, or activities) must be made in writing..</li>
                    <li>We will do our best to accommodate your requests, but changes may be subject to
                    availability and additional fees.</li>
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>6. Magpie Tours Cancellations:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>In the event that we must cancel a tour due to unforeseen circumstances, you will be
offered a choice between rescheduling your tour or receiving a full refund, as outlined in
our refund policy.</li>
                    
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>7. Health and Safety Requirements:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>Customers are required to inform us of any medical conditions, dietary restrictions, or other special needs at the time of booking.</li>
                    <li>We reserve the right to request a medical certificate if deemed necessary for participation in certain activities.</li>
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>8. Travel Insurance:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>We strongly recommend that all customers purchase comprehensive travel insurance to cover potential risks such as trip cancellations, medical emergencies, accidents and lost
                        or delayed baggage.</li>
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>9. Acceptance of Terms:</h3>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>By making a booking Magpie Tours, you acknowledge that you have read, understood, and agree to abide by our booking and refund policies.</li>
                    
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h3 className='underline py-3'>10. Contact Information:</h3>
                <ul className='flex flex-col gap-2 list-none pb-4'>
                    <li>For any questions or assistance regarding your booking, please contact us at:</li>
                    
                </ul>
                <Link href='/Contact'>
                    <button className='py-3 px-7 bg-black text-white font-poppins border-none rounded-lg'>Contact Us</button>
                </Link>
                
                <p className='underline py-2 font-bold'>By following these guidelines, we aim to ensure a smooth and enjoyable booking experience for all our
                    valued customers. We look forward to being a part of your adventure!</p>
            </div>
        </div>

    </div>
  )
}

export default Policy