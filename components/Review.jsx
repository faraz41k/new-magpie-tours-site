"use client"

import React,{useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
 

const Review =  () => {

  


  const reviewRef = useRef()
  const [success, setSuccess]= useState(false)
  const [error, setError]= useState("")
  const [name, setName]= useState("")
  const [country, setCountry] = useState("")
  const [pic, setPic] = useState("")
  const [review, setReview]= useState("")
  
  const setNotification = () => {
    setTimeout(() => {
      setSuccess(false)
    }, 1000);
  }
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d61iszu', 'template_ij6ldpr', reviewRef.current, {
        publicKey: 'fwJoee01LMdk9RRn7',
      })
      .then(
        (res) => {
          console.log('SUCCESS!');
          setSuccess("message sent successfully")

        },
        (error) => {
          console.log('FAILED...', error.text);
          setError("something went wrong. please send direct email via email address given in the top bar")
        },
      );
      setName("")
      setCountry("")
      setPic("")
      setReview("")
      
  };

  return (
    <div className='h-full w-full bg-blue-950 p-4 rounded-xl'>
      <form onSubmit={sendEmail} ref={reviewRef}>

      
        <div className='flex flex-col gap-3 py-2'>
            <div className='flex flex-col gap-2'>
            <label className='font-poppins text-white text-[16px] ' htmlFor="">Name</label>
            <input name='name' value={name} onChange={e=>setName(e.target.value)}  className='py-4 border-none rounded-xl px-2' type='text' placeholder='Name'/>
            </div>
            
            
            <div className='flex flex-col gap-2'>
            <label className='font-poppins text-white text-[16px] ' htmlFor="">Country</label>
            <input name='country' value={country}  onChange={e=>setCountry(e.target.value)} className='py-4 border-none rounded-xl px-2' type='text' placeholder='State/Province, Country'/>
            </div>

            {/* <div className='flex flex-col gap-2'>
            <label value={pic} onChange={e=>setPic(e.target.value)} className='font-poppins text-white text-[16px] ' htmlFor="">Upload Your Picture</label>
            <input name='picture' className='py-4 border-none rounded-xl px-2' type='file' />
            </div> */}
            
            
            <div className='flex flex-col gap-2'>
            <label className='font-poppins text-white text-[16px] ' htmlFor="">Your Experience</label>
            <textarea name="review"  value={review} onChange={e=>setReview(e.target.value)} className='border-none rounded-lg p-2'  placeholder='Write you review here ....' id="" cols="30" rows="10"></textarea>
            </div>
            
        </div>

        <button onClick={setNotification} type='submit' className="btn bg-black border-none text-white hover:text-black">submit</button>
      </form>
      {
            success && 
              (<h4 className='text-green-300 border border-solid rounded-lg font-poppins'>review Sent successfully</h4>)
            
            
          }
    </div>

  )
}

export default Review