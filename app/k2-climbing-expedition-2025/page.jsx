import { client, getK2Blog } from '@/sanity/sanity/sanity-utils'
import React from 'react'

import ImageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';



const builder = ImageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}





const page = async () => {
    const BlogPost = await getK2Blog()
    const data = BlogPost
    const image1 = data.postimage1

    console.log(image1);
    
    
  return (
    <div className='max-container  px-8 py-10 my-[100px] font-poppins'>
        <div className='mx-auto flex flex-col gap-8 py-8'>
            {/* top */}

            <div className='text-left py-8'>
                <p className='text-[40px] font-poppins font-thin leading-[2px] md:text-3xl'>{data.postTitle}</p>
                <p className=' px-2 text-sm text-blue-600 underline'>{data.author}</p>
                <p className='text-[8px] text-black px-2'>{data._createdAt}</p>
            </div>
            <div className='w-full py-4'>
            {/* <img
                className='object-cover h-3/4'
                src={urlFor(image1).url()}
                alt="Post" /> */}
            </div>

            <div className='mx-auto py-8 md:w-full w-3/4 '>
                <div className='w-full pb-5 '>
                    <p className='text-black text-[16px]'>
                        {data.intro}
                    </p>
                </div>

                <div>
                <div className='py-4 w-full '> 
                {/* <img
                className='object-cover h-3/4'
                src={urlFor(data.postimage2).url()}
                alt="Post" /> */}
                </div>
                </div>

                <div className='pb-4'>
                    <h4>{data.subHeading1}</h4>
                    <p>
                    {data.article1}
                    </p>
                </div>

                <div className='pb-4'>
                    <h4>{data.subHeading2}</h4>
                    <p>
                    {data.article2}
                    </p>
                </div>

                <div>
                <div className='py-4 w-full '> 
                {/* <img
                className='object-cover h-3/4'
                src={urlFor(data.postimage3).url()}
                alt="Post" /> */}
                </div>
                </div>

                <div className='pb-4'>
                    <h4>{data.subHeading3}</h4>
                    <p>{data.article3}</p>
                </div>

                

                

                

            </div>
        </div>
    </div>
  )
}

export default page