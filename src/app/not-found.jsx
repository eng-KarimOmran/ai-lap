import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='min-h-[calc(100vh-90px)] bg-black flex items-center justify-center flex-col lg:flex-row'>
      <div className='text-white max-w-[300px]'>
        <img src='/not-found.png' className='w-full' />
      </div>
      <Link href='/' className={`my-3 p-2 rounded-xl border-2 border-[#F18DF2] text-white shadow transition-all duration-300 hover:bg-[#F18DF2]`}>Go to Home</Link>
    </div>
  )
}
