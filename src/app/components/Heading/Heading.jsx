import React from 'react'

export default function Heading({heading}) {
  return (
    <div className='text-center'>
        <h2 className="mb-1 text-3xl font-bold text-white capitalize">{heading}</h2>
        <div className="h-[2px] w-[50px] bg-[#05C7F2] inline-block"></div>
    </div>
  )
}
