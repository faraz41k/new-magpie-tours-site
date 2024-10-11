import React from 'react'

const page = () => {
  return (
    <div className='  px-8 py-10 my-[100px] font-poppins'>
        <div className='mx-auto flex flex-col gap-8 py-8'>
            {/* top */}

            <div className='text-left py-8'>
                <p className='text-[40px] font-poppins font-thin leading-[4px] md:text-3xl'>Title of Blog post will be here ....</p>
                <p className=' px-2 text-sm text-blue-600 underline'>Irfan Karim</p>
                <p className='text-[8px] text-black px-2'>11/12/2024</p>
            </div>
            <div className='w-full py-4'>
                <img src="/girls.jpg" alt="girls"  style={{height:'65vh',objectFit:'cover',alignContent:"center" }}  className='w-full h-[25%]   object-cover rounded-lg '/>
                <p className='text-[6px] text-gray-400 pt-0 mt-0 italic underline'>Two yankee girls having a great time in mountains  </p>
            </div>

            <div className=' py-8'>
                <div>
                    <p className='text-black '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nesciunt eos cumque error sed quas aut nobis deserunt incidunt, deleniti excepturi quaerat quis expedita vel nam. Quo, temporibus laudantium tempore quis saepe iusto, libero error magni in, repellat cupiditate quos ab vel magnam veniam sapiente iure ipsa nemo officiis ad commodi praesentium eveniet? Aliquam, accusamus. Earum, omnis. Porro nobis id iusto natus fugit adipisci quae, assumenda fuga eligendi reiciendis ullam? Quas modi, iusto quae quidem quia ea incidunt nobis minus assumenda aut beatae temporibus voluptates est libero tenetur quisquam, aspernatur reiciendis. Repellendus consequatur harum architecto eaque quaerat. Vero eius autem sint ipsum minus ratione expedita aliquid, molestias nihil enim, impedit nemo ullam laudantium mollitia quidem beatae. Autem voluptate laborum veritatis numquam adipisci velit beatae earum exercitationem consectetur, at blanditiis nobis amet aut officia quia nesciunt. Consectetur aliquid sed nobis? Accusamus porro veniam voluptates laboriosam aut, culpa harum aliquid possimus. Dolor natus facere iste veniam voluptatibus laudantium sed nam doloribus numquam. Ullam quam voluptates minus eligendi voluptate, in blanditiis alias quia cum distinctio eaque architecto, molestiae velit, iste at. In accusantium quaerat velit nam suscipit cupiditate obcaecati cumque, eligendi molestiae ipsam illum voluptas. Culpa quae esse perferendis voluptates maxime obcaecati dolore?</p>
                </div>

                <div>
                <div className='py-4'> 
                    <img src="/lake.jpg" alt="girls" style={{height:'60vh',objectFit:'cover',alignContent:"center" }}  className='w-full h-auto object-cover rounded-lg'/>
                    <p className='italic underline'>img desscription here</p>
                </div>
                </div>

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nesciunt eos cumque error sed quas aut nobis deserunt incidunt, deleniti excepturi quaerat quis expedita vel nam. Quo, temporibus laudantium tempore quis saepe iusto, libero error magni in, repellat cupiditate quos ab vel magnam veniam sapiente iure ipsa nemo officiis ad commodi praesentium eveniet? Aliquam, accusamus. Earum, omnis. Porro nobis id iusto natus fugit adipisci quae, assumenda fuga eligendi reiciendis ullam? Quas modi, iusto quae quidem quia ea incidunt nobis minus assumenda aut beatae temporibus voluptates est libero tenetur quisquam, aspernatur reiciendis. Repellendus consequatur harum architecto eaque quaerat. Vero eius autem sint ipsum minus ratione expedita aliquid, molestias nihil enim, impedit nemo ullam laudantium mollitia quidem beatae. Autem voluptate laborum veritatis numquam adipisci velit beatae earum exercitationem consectetur, at blanditiis nobis amet aut officia quia nesciunt. Consectetur aliquid sed nobis? Accusamus porro veniam voluptates laboriosam aut, culpa harum aliquid possimus. Dolor natus facere iste veniam voluptatibus laudantium sed nam doloribus numquam. Ullam quam voluptates minus eligendi voluptate, in blanditiis alias quia cum distinctio eaque architecto, molestiae velit, iste at. In accusantium quaerat velit nam suscipit cupiditate obcaecati cumque, eligendi molestiae ipsam illum voluptas. Culpa quae esse perferendis voluptates maxime obcaecati dolore?</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default page