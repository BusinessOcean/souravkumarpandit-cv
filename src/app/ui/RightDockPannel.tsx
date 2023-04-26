import SelectableIcon from '@/components/SelectableIcon'
import React from 'react'

export default function RightDockPannel() {
    return (
        <div className='sticky top-0 bottom-0 right-0 z-50 items-center content-center flex-none h-screen p-5 overflow-auto text-center bg-white shadow-sm hide-scroll-bar hover:shadow-lg'>

            <div className='relative'>
                <SelectableIcon></SelectableIcon>
            </div>

            <div className='flex flex-col items-center content-center justify-center object-center gap-3 h-[calc(100%-48px)]'>
                {items.map((e) => {
                    return (<div key={e} className=''>
                        <SelectableIcon></SelectableIcon>
                    </div>)
                })}
            </div>
        </div>
    )
}

const items = [1, 2, 3, 4, 5, 6, 7]

