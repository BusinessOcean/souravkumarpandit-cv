import React, { Component } from 'react'
import Image from 'next/image';
import BannerPattern from '../../../images/banner_pattern.svg'
import DrawerPannel from './DrawerPannel';
export default function Banner() {
  return (
    <div className='w-full relative' >
      <Image
        className='absolute z-0'
        src={BannerPattern}
        alt="banner-bg-pattern"
        priority

        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />

      <div className='z-1 flex flex-row relative'>
        <div className='pt-24 pb-24 pl-16 basis-4/6'>
          <h1 className='text-4xl font-bold leading-normal '>I’m Sourav Kumar Pandit<br />
            <span className='text-yellowes '>Full Stack</span> Developer.</h1>

          <h5 className='leading-5 text-blacky-300' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Et, volutpat feugiat
            placerat lobortis. Natoque rutrum semper
            sed suspendisse nunc lectus.</h5>
          <button className='my-6 btn btn-info'>Hire Me</button>
        </div>

        <div className='flex items-center justify-center basis-2/6'>
          <div className='rounded-md w-11 h-11 bg-blacky-600'>

          </div>
        </div>
      </div>

    </div>
  )
}
