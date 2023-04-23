import IconLaptopCode from '@/resource/icons/LaptopCode'
import React from 'react'

export default function SkillCard() {
    return (
        <div className='flex flex-col self-center place-items-center text-blacky-300'>
            <IconLaptopCode className='w-20 h-20 text-yellowes'></IconLaptopCode>
            <h3>web development</h3>
            <p>blog, e-commerce</p>
        </div>
    )
}
