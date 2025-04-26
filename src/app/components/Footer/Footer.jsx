import React from 'react'

export default function Footer() {
  return (
    <footer className='border-t-[1px] border-t-white/80 py-8 bg-black mt-5'>
      <div className='w-full mx-auto lg:w-[85%]'>
        <div className='text-gray-300 text-center flex justify-center items-center flex-col lg:flex-row gap-3  lg:gap-1'>
          <span>
            {"<Developed By> "}
            <a className='px-3 py-2 rounded-xl border-2 text-white border-[#582259] hover:bg-[#582259] transition-all duration-300' href="https://www.linkedin.com/in/karim-omran-a2055535b/">Karim Omran</a>
          </span>
          <span>{"<All Copy Rights Reserved @2025>"}</span>
        </div>
      </div>
    </footer>
  )
}
