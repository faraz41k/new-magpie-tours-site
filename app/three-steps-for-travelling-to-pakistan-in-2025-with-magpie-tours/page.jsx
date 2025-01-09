import React from 'react'
import { client, getK2Blog } from '@/sanity/sanity/sanity-utils'
import  ImageUrlBuilder  from '@sanity/image-url'

const builder = ImageUrlBuilder(client)

function urlFor(source){
    return builder.image(source)
}


const page = async () => { 
    const blog = await getK2Blog()
    const blogData = blog[0]
  return (
    <div className='max-container lg:w-1/3  px-8 py-10 my-[100px] font-poppins'>
        <div className='mx-auto flex flex-col gap-8 py-8'>
            {/* top */}

            <div className='text-left py-8'>
                <p className='text-[40px] font-poppins font-thin leading-[2px] md:text-3xl'>{blogData.title}</p>
                <p className=' px-2 text-sm text-blue-600 underline'>{blogData.author}</p>
                <p className='text-[8px] text-black px-2'>{blogData._createdAt}</p>
            </div>
            

            <div className='mx-auto py-8 md:w-full w-3/4 '>
                <div className='w-full pb-5 '>
                    <p className='text-black text-[16px]'>
                        {blogData.intro}
                    </p>
                </div>

                

                <div className='pb-4'>
                    <h4 className='text-[24px]  '>{blogData.subHeading1}</h4>
                    <p>
                    {blogData.article1}
                    </p>
                </div>
                <div className='w-full py-4'>
                    <img src={urlFor(blogData.postimage1).url()} alt="girls"  style={{objectFit:'cover',alignContent:"center" }}  className='w-full h-[25%]   object-cover rounded-lg '/>
                
                </div>

                

                <div className='pb-4'>
                    <h4 className='text-[24px]  '>{blogData.subHeading2}</h4>
                    <p>
                   {blogData.article2}
                    </p>
                </div>

                <div>
                <div className='py-4 w-full '> 
                    <img src={urlFor(blogData.postimage2).url()} alt="girls" style={{objectFit:'cover',alignContent:"center" }}  className='w-full h-auto object-cover rounded-lg'/>
                    
                </div>
                </div>
                

                <div className='pb-4'>
                    <h4 className='text-[24px]  '>{blogData.subHeading3}</h4>
                    <p>
                   {blogData.article3}
                    </p>
                </div>
                

                <div className='py-4 w-full '> 
                    <img src={urlFor(blogData.postimage3).url()} alt="girls" style={{objectFit:'cover',alignContent:"center" }}  className='w-full h-auto object-cover rounded-lg'/>
                    
                </div>
                

                

                

            </div>
        </div>
    </div>
  )
}

export default page