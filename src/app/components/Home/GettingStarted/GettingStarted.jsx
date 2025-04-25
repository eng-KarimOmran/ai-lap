import React from 'react'

export default function GettingStarted({className}) {
  return (
    <a href='/experiments' className={`my-3 p-2 rounded-xl border-2 border-[#F18DF2] text-white shadow transition-all duration-300 hover:bg-[#F18DF2] ${className}`}>{"Getting Started >"}</a>
  )
}
