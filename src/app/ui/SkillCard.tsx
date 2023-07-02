import IconLaptopCode from '@/resource/icons/LaptopCode'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '../../../sanity/sanity-utils'
type LabelProps = {
    title: string
    image: any
}

export default function SkillCard({ title, image }: LabelProps) {
    return (
        <div className='flex flex-col self-center place-items-center text-blacky-300 h-20'>
            {/* <IconLaptopCode className='w-20 h-20 text-yellowes'></IconLaptopCode> */}
            <Image
                className='w-full h-20 object-contain'
                src={urlFor(image).url()}
                alt={image}
                width="0"
                height="0"
                unoptimized={true}
                style={{ "backgroundBlendMode": 'screen' }}
            />
            {/* <img alt={title} src={image} >  </img> */}
            {/* <h3>{title}</h3> */}
            {/* <p>blog, e-commerce</p> */}
        </div>
    )
}
