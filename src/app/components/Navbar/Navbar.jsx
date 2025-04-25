"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { BsList } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";
import { usePathname } from 'next/navigation';
import GettingStarted from '../Home/GettingStarted/GettingStarted';

export default function Navbar() {
    const [toggel , setToggel] = useState(false)

    const path = usePathname()

    const NavLinks = [
        {path:"/" , content :"Home"},
        {path:"/experiments" , content :"Experiments"},
        {path:"/contact-us" , content :"Contact us"},
        {path:"/book" , content :"Book"},
    ]

  return (
    <>
    <nav className={`sticky top-0 start-0 end-0 py-4 z-10 border-b-[1px] border-white/95 bg-black`}>
        <div className='w-full mx-auto lg:w-[85%] px-4 flex justify-between items-center relative'>
            <Link className='text-[#F18DF2] font-bold text-3xl lg:text-5xl' href="/">Ai Lap</Link>
            <ul onClick={(e)=>{if(e.target.tagName === "A"){setToggel(false)}}} className={`text-white flex flex-col lg:flex-row items-center gap-5 lg:w-auto absolute lg:static top-full start-0 bottom-0 overflow-hidden lg:h-auto bg-black lg:bg-transparent mt-2 lg:mt-0 h-[calc(100vh-80px)] py-2 transition-all duration-500 ${toggel ? "w-full" : "w-0"}`}>
                {
                    NavLinks.map((link)=>(<li key={link.path} className={`relative pb-1 before:bg-[#F18DF2] before:bottom-0 before:start-0 before:w-0 hover:before:w-[85%] ${path === link.path ? "before:w-[85%]" : null} before:transition-all before:duration-300 before:h-[1px] before:absolute`}><Link href={link.path}>{link.content}</Link></li>))
                }
            </ul>
            <GettingStarted className={'hidden lg:block'} />
            <button onClick={()=>{setToggel(!toggel)}} className='text-white lg:hidden text-2xl'>
                {
                    toggel ? <RiCloseLargeLine /> : <BsList />
                }
            </button>
        </div>
    </nav>
    </>
  )
}
