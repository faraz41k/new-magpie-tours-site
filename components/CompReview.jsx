import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CompReview = () => {
  return (
    <div className='bg-black  w-full flex items-center justify-evenly gap-2'>
        <div className='p-2 w-1/4'>
            <Link href='/'>
            <Image src='/trustpilot.svg' height={100} width={100} alt='logo-imgs'/>
            </Link>
            
        </div>

        {/* <div className='p-2 w-1/4'> 
            <Link href='/' target='_blank'>
            <Image src='/trustpilot.svg' height={100} width={100} alt='logo-imgs'/>
            </Link>
            
        </div> */}

        <div className='p-2 w-1/4'>
            <Link href='/' target='_blank'>
            <Image src='/tripadvisor.svg' height={100} width={100} alt='logo-imgs'/>
            </Link>
            
        </div>

        <div className='p-2 w-1/4'>
            <Link href='https://www.instagram.com/magpietourspakistan?igsh=MWc0bzcxNWhqOGx3Nw%3D%3D&utm_source=qrwww.instagram.com/magpietourspakistan?igsh=MWc0bzcxNWhqOGx3Nw%3D%3D&utm_source=qr' target='_blank'>
            <Image src='/instagram-2.svg' height={100} width={100} alt=''/>
            </Link>
            
        </div>
    </div>
  )
}

export default CompReview