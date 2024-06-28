import React from 'react'
import SecCard from './SecCard'

import { client } from '@/sanity/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}





const CardContainer = ({
  cardname1,
  cardname2,
  cardname3,
  details1,
  details2,
  details3,
  image1,
  image2,
  image3,
  url1,
  url2,
  url3
  
}) => {
//  console.log(image1);



  return (
    <div className=' max-w-full overflow-hidden mx-8 scroll-smooth  pb-4'>
      {/* card1 */}
        <div className='flex flex-wrap gap-4  items-start justify-evenly'>
             <div  className="card w-80 h-[550px] bg-base-100 shadow-xl cursor-pointer hover:shadow-xl ">
                      <figure className='h-[50%] '>
                        <img src={urlFor(image1).url()} alt="tours" className='object-cover  object-center h-full w-full' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                              {cardname1}
                              <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{details1.slice(0,100)}...</p>
                            <div className="card-actions justify-end">
                              <div className="badge badge-outline">trek</div> 
                              <div className="badge badge-outline">walk</div>
                            </div>
                            <Link className href={`/${url1}`}>
                              <button className='cursor-pointer rounded-lg w-full py-2 hover:bg-teal-950 border-none bg-black text-white font-poppins'>Learn More</button>
                            </Link>
                            
                        </div>
                  </div>
                  {/* card2 */}
                  <div  className="card w-80 h-[550px] bg-base-100 shadow-xl cursor-pointer hover:shadow-xl ">
                      <figure className='h-[50%] '>
                        <img src={urlFor(image2).url()} alt="tours" className='object-cover  object-center h-full w-full' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                              {cardname2}
                              <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{details2.slice(0,100)}....</p>
                            <div className="card-actions justify-end">
                              <div className="badge badge-outline">trek</div> 
                              <div className="badge badge-outline">walk</div>
                            </div>
                            <Link className href={`/${url2}`}>
                              <button className='rounded-lg cursor-pointer w-full py-2 hover:bg-teal-950 border-none bg-black text-white font-poppins'>Learn More</button>
                            </Link>
                        </div>
                  </div>

                  {/* card3 */}
                  <div  className="card w-80 h-[550px] bg-base-100 shadow-xl cursor-pointer hover:shadow-xl ">
                      <figure className='h-[50%] '>
                        <img src={urlFor(image3).url()} alt="tours" className='object-cover  object-center h-full w-full' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                              {cardname3}
                              <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{details3.slice(0,100)}....</p>
                            <div className="card-actions justify-end">
                              <div className="badge badge-outline">trek</div> 
                              <div className="badge badge-outline">walk</div>
                            </div>
                            <Link className href={`/${url3}`}>
                              <button className='cursor-pointer w-full rounded-lg py-2 hover:bg-teal-950 border-none bg-black text-white font-poppins'>Learn More</button>
                            </Link>
                        </div>
                  </div>
            </div>
        
        
        
        
    </div>
  )
}

export default CardContainer