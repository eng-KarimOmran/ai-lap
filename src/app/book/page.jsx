"use client"
import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading/Heading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Book() {
  const pages = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        appendDots: dots => (<div className='bg-transparent rounded-xl p-2.5'> <ul> {dots} </ul> </div>),
        customPaging: i => (<div className='w-8 text-[#F18DF2] border-[1px] border-[#F18DF2]'>{(13 - i).toString().replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d])}</div>)
      };

  return (
    <section className='py-7'>
        <Heading heading={"Book"} />
        <div className='lg:max-w-[50%] max-w-[90%] mx-auto px-2'>
          {
          isMounted ? (
          <Slider {...settings} className='text-center pb-10'>
            {
              pages.map((page)=>(
                <div key={page} className='bg-gray-300 rounded-xl overflow-hidden'>
                  <img className='w-full rounded-xl object-center object-cover block' src={`/book/Plug_compressed_pages-to-jpg-00${page}.jpg`} />
                </div>
              ))
            }
          </Slider>
          ) : null}
        </div>
    </section>
  )
}
