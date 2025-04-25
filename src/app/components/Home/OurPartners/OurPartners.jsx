"use client"
import React, { useState } from 'react'
import Heading from '../../Heading/Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function OurPartners() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    beforeChange: (_, next) => setActiveSlide(next),
    customPaging: (i) => (
      <div 
        className={`w-2 h-2 rounded-full mx-2 ${activeSlide === i ? 'bg-[#F18DF2]' : 'bg-gray-300'} hover:bg-purple-400 transition-colors`} 
      />
    )
  };
    
  const ourPartners = [
    {pathImg:"/batu.png" , path:"https://batechu.com/"},
    {pathImg:"/itClub.jpg" , path:"https://www.facebook.com/p/Information-Technology-Club-100092738074559/"},
  ]

  return (
    <section className='py-7'>
        <Heading heading={"Our Partners"} />
        <div className='max-w-[350px] mx-auto px-2 mt-2'>
          <Slider {...settings} className='text-center'>
            {
              ourPartners.map((ourPartner)=>(
                <div key={ourPartner.path} className='bg-gray-300 rounded-xl overflow-hidden'>
                  <a href={ourPartner.path}>
                    <img className='max-w-[350px] rounded-xl h-[150px] object-center object-cover block' src={ourPartner.pathImg} />
                  </a>
                </div>
              ))
            }
          </Slider>
        </div>
    </section>
  )
}