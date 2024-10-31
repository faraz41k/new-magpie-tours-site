import React from 'react'



import { client } from "@/sanity/sanity/sanity-utils";
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const TourCard = ({name,url,image}) => {
  return (
    <Link href={url} className='cursor-pointer no-underline '>
    <div className=' xlg:h-[400px]'>
      
        
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                className='object-cover h-3/4'
                src={urlFor(image).height(300).width(400).url()}
                alt="Post" />
            </figure>
            <div className="card-body pt-2">
                <h3 className="no-underline text-[18px] text-gray-800 font-poppins leading-6 font-medium hover:text-blue-950 hover:underline">
                {name.slice(0,27)}...
                </h3>
                
                
            </div>
        </div>
    </div>
</Link>
  )
}

export default TourCard