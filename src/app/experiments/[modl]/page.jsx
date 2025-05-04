"use client"
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import Heading from '@/app/components/Heading/Heading';
import PythonEditor from '@/app/components/PythonEditor/PythonEditor';

export default function Modl() {
  const [code , setCode] = useState('');

  const router = useRouter()

  useEffect(()=>{
    if(!experiments.includes(modlName)){
      router.replace('/404')
    }
  },[])

  const experiments = ["multiple plug","robot arm","robot head"]

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
    experiments.includes(modlName) ?
    <section className='py-7'>
      <Heading heading={modlName} />
      <p className='text-gray-500 text-center'>Unleash your creativity and write the code like a legend! 💻🔥</p>
      <PythonEditor code={code} setCode={setCode} />
      <div className='w-[95%] lg:w-[80%] mx-auto'>
        <button onClick={()=>{SendCode(code)}} className='cursor-pointer my-3 py-2 px-3 rounded-xl border-2 border-[#F18DF2] text-white shadow transition-all duration-300 hover:bg-[#F18DF2]'>Send Code</button>
      </div>
    </section>
    :
    null
  )
}
