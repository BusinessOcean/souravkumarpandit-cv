import React from 'react'
import Image from 'next/image';
import BannerPattern from '../../../images/banner_pattern.svg'
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../../sanity/sanity-utils';
import { useAppDataContext } from '@/context/AppDataContext';

export default function Banner() {

  const appdata = useAppDataContext()!


  return (
    <div className='w-full relative' id="home" >
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
          <h1 className='text-4xl font-bold leading-normal '>I'm {appdata.cvname}<br />
            <span className='text-yellowes '>Full Stack</span> Developer.</h1>

          <h5 className='leading-8 text-blacky-300 pr-14 py-5 ' >
            <PortableText value={appdata.objective} />
          </h5>
          <button className='my-6 btn btn-info'>Hire Me</button>
        </div>

        <div className='flex items-center justify-center basis-2/6'>
          <Image
            className='w-max h-max object-contain'
            src={urlFor(appdata.bannerImage).url()}
            alt={appdata.bannerImage.alt}
            width="0"
            height="0"
            unoptimized={true}
            style={{ "backgroundBlendMode": 'multiply' }}
          />
        </div>
      </div>

    </div>
  )
}
