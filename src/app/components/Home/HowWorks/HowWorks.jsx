"use client"

import React from 'react'
import Heading from '../../Heading/Heading'
import { motion } from 'motion/react';

export default function HowWorks() {
  return (
  <section className="py-7 bg-[#121212]">
    <Heading heading="How it Works" />
    <ul className="text-xl text-gray-300 p-3 lg:max-w-[75%] mx-auto flex justify-center items-center flex-wrap overflow-hidden flex-col lg:flex-row">
      <motion.li initial={{x:-100}} whileInView={{x:0}} transition={{delay:.1 , duration:.5}} className="w-[50%] text-center py-3 text-nowrap"><span className="text-[#049DD9]">1- </span>Upload your code</motion.li>
      <motion.li initial={{x:-100}} whileInView={{x:0}} transition={{delay:.2 , duration:.5}} className="w-[50%] text-center py-3 text-nowrap"><span className="text-[#049DD9]">2- </span>Monitor the results</motion.li>
      <motion.li initial={{x:-100}} whileInView={{x:0}} transition={{delay:.3 , duration:.5}} className="w-[50%] text-center py-3 text-nowrap"><span className="text-[#049DD9]">3- </span>Test your project safely</motion.li>
      <motion.li initial={{x:-100}} whileInView={{x:0}} transition={{delay:.4 , duration:.5}} className="w-[50%] text-center py-3 text-nowrap"><span className="text-[#049DD9]">4- </span>Record your notes</motion.li>
    </ul>
  </section>
  )
}
