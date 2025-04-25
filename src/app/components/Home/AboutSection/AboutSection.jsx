"use client"

import React from 'react'
import Heading from '../../Heading/Heading'
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
  <section className="w-full bg-[#121212] py-8">
    <div className="flex flex-col items-center gap-2">
      <Heading heading={"About Us"} />
      <div className="pb-5 w-[80%] shadow-2xl mx-2 rounded-2xl overflow-hidden">
        <motion.p className="text-gray-300 text-center" whileInView={{opacity:1,y:0}} transition={{duration:1}} initial={{opacity:0 , y:"-100%"}}> 
          We are IT students from the Faculty of Industry and Energy, 
          united by a passion for AI and its future impact. Our mission is to make AI education simple, 
          accessible, and engaging for all. Through this platform, we offer interactive tools and resources that empower users to learn, 
          explore, and innovate with confidence.
        </motion.p>
      </div>
    </div>
  </section>
  )
}
