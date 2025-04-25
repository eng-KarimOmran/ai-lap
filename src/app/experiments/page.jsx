import React from 'react'
import Heading from '../components/Heading/Heading'
import Link from 'next/link'

export default function Experiments() {
    const experiments = [
        {path:"experiments/multiple-plug" , name:'Multiple Plug' , description:"A smart power strip with a modern design, enabling remote device control, energy monitoring, and overload protection." , imgPath:"/multiple-plug.png" , textButton:"Let's go 😆"},
        {path:"experiments/robot-arm" , name:'Robot Arm' , description:"A robotic arm is a multi-jointed mechanical device that can be programmed to perform precise tasks such as assembly and welding in industries." , imgPath:"/android-7697178_1280.jpg" , textButton:"Let's go 💪"},
        {path:"experiments/robot-head" , name:'Robot Head' , description:"The robot head contains sensors and cameras, and it works to collect environmental data and guide the robot's movement." , imgPath:"/ai-7977960_1280.jpg" , textButton:"Let's go 🔥"},
    ]
  return (
    <section className='py-7'>
        <Heading heading={"Experiments"} />
        <div className='flex justify-around py-5 items-center flex-col lg:flex-row gap-7 flex-wrap'>
            {
                experiments.map((experiment)=>(
                    <Link href={experiment.path} key={experiment.path} className='bg-black border-2 border-gray-100 shadow-2xl max-w-[300px] overflow-hidden flex flex-col p-2 rounded-2xl grayscale-50 hover:scale-[1.05] hover:grayscale-0 transition-all duration-300 group'>
                        <img src={experiment.imgPath} className='w-full max-h-[200px] block object-cover rounded-2xl object-center group-hover:rotate-[360deg] transition-all duration-300' />
                        <h2 className='text-white text-3xl font-bold'>{experiment.name}</h2>
                        <p className='w-full text-gray-400'>{experiment.description}</p>
                        <button className='bg-[#587FE2] px-3 py-2 mx-2 rounded-xl text-white my-2'>{experiment.textButton}</button>
                    </Link>
                ))
            }
        </div>
    </section>
  )
}