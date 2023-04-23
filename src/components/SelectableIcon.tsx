import IconLaptopCode from '@/resource/icons/LaptopCode'
import React from 'react'

export default function SelectableIcon() {
    // <div className="tooltip tooltip-open" data-tip="hello"></div>
    return (
        <div className='flex items-center justify-center w-12 h-12 px-2 text-center rounded-full outline-none tooltip tooltip-info hover:bg-yellowes bg-blacky-200 text-blacky-500'
            data-tip="hello"
        >
            <button className=''>

                <IconLaptopCode className='w-6 h-6' ></IconLaptopCode>
            </button>
        </div>
    )
}


