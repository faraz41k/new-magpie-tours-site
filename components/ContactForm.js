"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [error, setError]= useState("")
  const [success, setSuccess]= useState(false)
  const [email,setEmail]=useState("")
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName]= useState("")
  const [whatsApp, setWhatsApp]= useState("")
  const [country, setCountry]= useState("")
  const [age, setAge]= useState("")
  const [start, setStart]= useState("")
  const [end, setEnd]= useState("")
  const [details, setDetails]= useState("")
  
  const setNotification = () => {
    setTimeout(() => {
      setSuccess(false)
    }, 1000);
  }
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d61iszu', 'template_z11p62k', form.current, {
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
      setEmail('')
      setFirstName('')
      setLastName('')
      setWhatsApp('')
      setAge('')
      setCountry('')
      setStart('')
      setEnd('')
      setDetails('')
      setAge('')
      
  };

  return (
    <div className='max-w-2xl flex flex-col items-center justify-center mx-auto h-full border border-blue-300 shadow-md py-10 bg-slate-200 my-4 rounded-lg'>
        <div className='py-6 text-center w-full px-4'>
          <h3>Contact Form</h3>
          <p>Ask and enquire about anything here. </p>
        </div>
        

        <form className=' flex flex-col gap-4 items-center justify-between font-poppins w-full px-4 ' ref={form} onSubmit={sendEmail}>
          <div className='flex gap-4'>
            <div>
              <label className="input    bg-slate-200 text-left">First Name</label>
              <input type="text" onChange={e=>setFirstName(e.target.value)} value={firstName} name="first_name" className=" text-start grow px-8 py-4  border-none rounded-lg w-full" placeholder="First_Name" />
            </div>

            <div>
              <label className="input    bg-slate-200 text-left">Last Name</label>
              <input type="text" onChange={e=>setLastName(e.target.value)} value={lastName} name="last_name" className=" text-start grow px-8 py-4  border-none rounded-lg w-full" placeholder="Last_Name" />
            </div>

          </div>
          
          
          <div className= 'w-full'>
              <label className="input   bg-slate-200 text-start">Email</label>
              <input type="email" onChange={e=>setEmail(e.target.value)} value={email} name="user_email" className="grow px-8 border-none py-4  rounded-lg w-full" placeholder="email@site.com" />
          </div>
          
          <div className= 'w-full'>
              <label className="input   bg-slate-200 text-start">WhatsApp</label>
              <input type="text" onChange={e=>setWhatsApp(e.target.value)} value={whatsApp} name="user_Whatsapp" className="grow px-8 border-none py-4  rounded-lg w-full" placeholder="+1234567778" />
          </div>
          

          <div className= 'w-full'>
              <label className="input   bg-slate-200 text-start">Country</label>
              <input type="text" onChange={e=>setCountry(e.target.value)} value={country} name="user_country" className="grow px-8 border-none py-4  rounded-lg w-full" placeholder="Japan etc" />
          </div>

          <div className= 'w-full'>
              <label className="input   bg-slate-200 text-start">Age</label>
              <input type="text" value={age} onChange={e=>setAge(e.target.value)} name="user_age" className="grow px-8 border-none py-4  rounded-lg w-full" placeholder="18 years etc" />
          </div>
          

          <div className= 'w-full'>
              <label className="input    bg-slate-200 text-start">Start Date </label>
              <input type="date" onChange={e=>setStart(e.target.value)} value={start} name="Tour_start" className=" text-start grow px-8 py-4  border-none rounded-lg w-full" placeholder="Name" />
          </div>
          

          <div className= 'w-full'>
              <label className="input    bg-slate-200 text-start">End Date </label>
              <input type="date" onChange={e=>setEnd(e.target.value)} value={end} name="Tour_end" className=" text-start grow px-8 py-4  border-none rounded-lg w-full" placeholder="Name" />
          </div>
          
          <div className= 'w-full'>
             <label>Details</label>
                {/* <textarea name="message" /> */}
              <textarea name="message" onChange={e=>setDetails(e.target.value)} value={details} className="textarea textarea-bordered border-none w-full" placeholder="your message"></textarea>
          </div>
          
          {/* <input type="submit" value="Send" /> */}
          <button onClick={setNotification} type="submit" value="Send" className="btn btn-active bg-black text-whitesmoke-100 hover:bg-black/90  w-full">Submit</button>
          {
            success && 
              (<h4 className='text-green-300 border border-solid rounded-lg font-poppins'>Mail Sent successfully</h4>)
            
            
          }
        </form>

    </div>
  );
};



// product page 
// you may like section 
// booking page
// latest tours 
// sanity product schema update
// emailjs form new fields 
// google maps on page page
// data fetching for individual page