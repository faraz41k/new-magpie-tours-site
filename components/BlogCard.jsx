import React from 'react'



import { client } from "@/sanity/sanity/sanity-utils";
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const BlogCard = ({name,article,author,image}) => {
  return (
    <Link href=''>
    <div>
      
        
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                className='object-cover h-3/4'
                src={urlFor(image).height(300).width(400).url()}
                alt="Post" />
            </figure>
            <div className="card-body">
                <h3 className="">
                {name}
                </h3>
                <div className=" text-gray-500"></div>
                <p>{author}</p>
                <div className="card-actions justify-end">
                
                </div>
            </div>
        </div>
    </div>
</Link>
  )
}

export default BlogCard