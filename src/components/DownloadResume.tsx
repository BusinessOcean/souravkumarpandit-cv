import IconLaptopCode from '@/resource/icons/LaptopCode'
import React from 'react'

export default function DownloadResume() {
    return (
        <button className='btn btn-primary'> <div className='flex items-center gap-4'> Download CV
            <div><IconLaptopCode className='w-6 h-6'></IconLaptopCode></div>
        </div>
        </button>
    )
}
