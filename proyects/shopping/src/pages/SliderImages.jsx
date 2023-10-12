import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderImages.css'

import Banner01 from '../assets/banner-1.jpg'
import Banner02 from '../assets/slide2.jpg'
import Banner03 from '../assets/slider3.mp4'
export const SliderImages = () => {
  const slides = [
    {
      image: Banner01,
      title: 'slide01',
    },
    {
      image: Banner02,
      title: 'slide02',
    },
    {
      image: Banner03,
      title: "slide03",
    },
  ];
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  const BtnShop = () => {
    return (
      <button className='flex mt-5'>
        <a href="" className='text-white  rounded-sm  font-bold  px-10 py-3 uppercase bg-black'>Shop now</a>
      </button>
    )
  }
  const Slide01 = () => {
    return (
      <div className='absolute  flex justify-center w-full h-full flex-col left-4 top-0 pl-10 max-md:left-0 '>
        <h2 className='  font-bold  text-4xl max-lg:text-2xl text-black font-mono  flex gap-3'>
          buy 2 get
          <strong className='text-blue-500 bg-white  font-bold px-5 text-4xl max-lg:text-2xl'>
            1 free
          </strong>
        </h2>
        <h1 className='text-white  font-bold   text-7xl max-lg:text-5xl'>Fashionable</h1>
        <h5 className='text-white  font-bold   text-5xl max-lg:text-3xl'>Collection</h5>
        <p className='text-white  font-bold   py-3'>Get free Shipping on alll orders over $20 </p>
        <BtnShop />
      </div>
    )
  }

  const Slide02 = () => {
    return (
      <div className='absolute flex items-end justify-center w-full h-full flex-col right-14 max-md:right-0 top-0 pr-10 '>
        <h3 className='text-gray-700  font-bold  uppercase text-3xl max-lg:text-2xl'>comming son</h3>
        <h1 className='text-black  font-bold   text-5xl max-lg:text-3xl'>Riody Birthday</h1>
        <h5 className='text-blue-500  font-bold   text-9xl max-lg:text-5xl'>Sale</h5>
        <p className='text-gray-800   text-xl font-thin w-80 text-end max-lg:text-base max-lg:font-light py-3'>Up to 70%  off on all products online & Free shipping over %90</p>
        <BtnShop />
      </div>
    )
  }
  const Slide03 = () => {
    return (
      <div className='absolute top-0 flex items-center justify-center w-full h-full flex-col '>
        <span className='flex items-center justify-center w-full h-full flex-col bg-blue-500 opacity-50'>
          <h1 className='text-white uppercase font-bold text-3xl max-md:text-2xl'>check our out</h1>
          <h5 className='text-white uppercase font-bold text-5xl max-md:text-3xl'>summer season's</h5>
          <p className='text-white text-2xl font-thin w-4/12 max-md:w-3/4 text-center py-3 max-lg:text-xl'>Up to 50% off on all products online & Free shipping on all orders over $120</p>
        </span>
        <div className='flex mt-5 absolute bottom-14  '>
          <BtnShop />
        </div>

      </div>

    )

  }
  return (
    <Slider {...settings} className='overflow-hidden'>
      {slides.map((slide, index) => (
        <div key={index} className='relative 2xl:h-[630px] h-[446px] w-full  flex items-center justify-center overflow-hidden hover:cursor-pointer transition-colors duration-300 ease-in-out z-10' id={`slider-images-container-${index}`} >
          {slide.image.includes('.mp4') ? (
            <video loop autoPlay muted playsInline className='h-full  max-md:object-cover ' >
              <source src={slide.image} type="video/mp4" />
            </video>
          ) : (
            <img src={slide.image} alt={slide.title} className='h-full w-full max-lg:object-cover max-sm:object-left' />
          )}
          {
            slide.title === 'slide01' ? <Slide01 /> : slide.title === 'slide02' ? <Slide02 /> : <Slide03 />
          }
        </div>
      ))}
    </Slider>
  )
}
