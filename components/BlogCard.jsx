import React from 'react'



import { client } from "@/sanity/sanity/sanity-utils";
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import { blogPost } from '@/sanity/schemas/blogPost';

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const BlogCard = ({name,article,author,image,slug}) => {
  
  
  return (
    <Link href='/' className='cursor-pointer no-underline'>
    <div>
      
        
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                className='object-cover h-3/4'
                src={urlFor(image).height(300).width(400).url()}
                alt="Post" />
            </figure>
            <div className="card-body">
                <h3 className="no-underline">
                {name}
                </h3>
                <div className=" text-gray-500 "></div>
                <p className='no-underline'>{author}</p>
                <div className="card-actions justify-end">
                
                </div>
            </div>
        </div>
    </div>
</Link>
  )
}

export default BlogCard