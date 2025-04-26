"use client"
import React from 'react'
import Heading from '../components/Heading/Heading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Book() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        appendDots: dots => (
          <div
            style={{
              backgroundColor: "transparent",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "#F18DF2",
              border: "1px #F18DF2 solid"
            }}
          >
            {(13 - i).toString().replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d])}
          </div>
        )
      };

  return (
    <section className='py-7'>
        <Heading heading={"Book"} />
        <div className='lg:max-w-[50%] max-w-[90%] mx-auto px-2'>
          <Slider {...settings} className='text-center pb-10'>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0001.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0002.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0003.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0004.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0005.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0006.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0007.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0008.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0009.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0010.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0011.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0012.jpg" />
            </div>
            <div className='bg-gray-300 rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl object-center object-cover block' src="/book/Plug_compressed_pages-to-jpg-0013.jpg" />
            </div>
          </Slider>
        </div>
    </section>
  )
}
