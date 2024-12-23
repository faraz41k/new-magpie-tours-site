import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CompReview = () => {
  return (
    <div className='bg-blue-950  w-full flex items-center justify-center gap-2 md:sm:justify-evenly'>
        <div className='p-2 w-1/5'>
            <Link href='https://www.trustpilot.com/review/magpietours.com.pk' target='_blank'>
            <Image src='/trustpilot.svg' height={90} width={90} alt='logo-imgs'/>
            </Link>
            
        </div>

        {/* <div className='p-2 w-1/4'> 
            <Link href='/' target='_blank'>
            <Image src='/trustpilot.svg' height={100} width={100} alt='logo-imgs'/>
            </Link>
            
        </div> */}

        <div className='p-2 w-1/5'>
            <Link href='https://www.tripadvisor.com/Attraction_Review-g469409-d23781847-Reviews-Magpie_Tours_Pakistan-Hunza_Gilgit_Baltistan.html' target='_blank'>
            <Image src='/tripadvisor.svg' height={90} width={90} alt='logo-imgs'/>
            </Link>
            
        </div>

        <div className='p-2 w-1/5'>
            <Link href='https://www.instagram.com/magpietourspakistan?igsh=MWc0bzcxNWhqOGx3Nw%3D%3D&utm_source=qrwww.instagram.com/magpietourspakistan?igsh=MWc0bzcxNWhqOGx3Nw%3D%3D&utm_source=qr' target='_blank'>
            <Image src='/instagram-2.svg' height={70} width={70} alt=''/>
            </Link>
            
        </div>
    </div>
  )
}

export default CompReview