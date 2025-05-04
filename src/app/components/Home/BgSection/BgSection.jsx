import React from 'react'

export default function BgSection() {
  return (      
    <section className="relative bg-fixed bg-center bg-cover h-[200px] w-full" style={{backgroundImage:"url('/fantasy-4219731_1280.jpg')"}}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
    </section>
  )
}
