"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import GettingStarted from '../GettingStarted/GettingStarted';

export default function HeroSectionHome() {

    const sequence = [
        'Solve Problems', 3000,
        'Innovate Solutions', 3000,
        'predictive analysis', 3000,
        'Improve Life', 3000
    ];

  return (
  <section className="bg-black relative min-h-[calc(100vh-90px)] bg-center bg-cover mt-7 lg:mt-0" style={{backgroundImage:"url('/waves-7111758_1280.jpg')"}}>
    <div className="bg-black/80 absolute inset-0 p-1 flex flex-col lg:flex-row items-center justify-center gap-3">
      <img src="/hello.png" className="max-w-[300px] block border-2 border-[#582259] rounded-2xl" />
      <div className="flex flex-col justify-center gap-5 items-center">
        <div>
          <div className="text-4xl font-extrabold px-2 text-center text-white pb-2">Learn AI for</div>
          <TypeAnimation className="text-4xl font-extrabold text-white px-2 text-center" sequence={sequence} wrapper="span" speed={50} repeat={Infinity} />
        </div>
        <p className="text-gray-300 text-center max-w-[500px]">An advanced educational platform that enables students to develop and test artificial intelligence projects in a secure and controlled environment.</p>
        <GettingStarted className={"w-[150px]"} />
      </div>
    </div>
  </section>
  )
}
