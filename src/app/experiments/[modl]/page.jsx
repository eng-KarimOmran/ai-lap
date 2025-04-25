"use client"
import React, { useState } from 'react'
import { useParams } from 'next/navigation';
import Heading from '@/app/components/Heading/Heading';

export default function Modl() {
  const [code , setCode] = useState('');

  const params = useParams()
  const modl = params.modl
  const modlName = modl.split("-").join(' ')

  function SendCode(code){
    if(code !== ""){

      const blob = new Blob([code], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = "Code-" + modl + ".txt";
      a.click();

      URL.revokeObjectURL(url);
      setCode("")
    }
  }

  return (
    <section className='py-7'>
      <Heading heading={modlName} />
      <p className='text-gray-500 text-center'>Unleash your creativity and write the code like a legend! 💻🔥</p>
      <textarea value={code} onChange={(e)=>{setCode(e.target.value)}} className="mx-auto block my-3 w-[95%] lg:w-[80%] h-[300px] p-4 rounded-xl border-2 border-[#F18DF2] focus:outline-none resize-none shadow-lg text-gray-100" placeholder="Let's turn your ideas into code! 💡🧠"></textarea>
      <div className='w-[95%] lg:w-[80%] mx-auto'>
        <button onClick={()=>{SendCode(code)}} className='cursor-pointer my-3 py-2 px-3 rounded-xl border-2 border-[#F18DF2] text-white shadow transition-all duration-300 hover:bg-[#F18DF2]'>Send Code</button>
      </div>
    </section>
  )
}
