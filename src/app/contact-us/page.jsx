"use client"
import React, { useState } from 'react'
import Heading from '../components/Heading/Heading'

export default function ContactUs() {
    const [ email , setEmail ] = useState("")
    const [ message , setMessage ] = useState("")

    function SendMessage(dataMessage){
        console.log(dataMessage)
    }

  return (
    <section className='py-11'>
        <Heading heading={"Contact Us"} />
        <form onSubmit={()=>{SendMessage({email:email,message:message})}} className='w-[95%] lg:w-[80%] p-3 mx-auto'>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className='border-2 rounded-3xl w-full p-3 outline-0 border-[#582259] text-white my-2' placeholder='Enter The Email:' />
            <textarea onChange={(e)=>{setMessage(e.target.value)}} className='border-2 block w-[85%] lg:w-[60%] p-3 outline-0 border-[#582259] h-[150px] text-white my-2 resize-none' placeholder='Enter The Message:'></textarea>
            <button type='submit' onClick={()=>{SendMessage({email:email,message:message})}} className='cursor-pointer my-3 py-2 px-3 rounded-xl border-2 border-[#F18DF2] text-white shadow transition-all duration-300 hover:bg-[#F18DF2]'>Send Message</button>
        </form>
    </section>
  )
}
