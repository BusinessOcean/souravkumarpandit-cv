import IconLaptopCode from '@/resource/icons/LaptopCode'
import React from 'react'

export default function ExtraSkills({ title }: ExtraSkillsProps) {
    return (
        <div>
            <h3 className='pb-3 font-bold text-blacky-400'> {title}</h3>
            <div className='flex flex-col gap-2 '>
                {items.map((e) => {
                    return (
                        <div key={e}>
                            <div className='flex items-center gap-4'>
                                <IconLaptopCode className='text-yellowes' />
                                <h5 className='text-sm text-blacky-300'>Git Knowledge,Flutter,Dart</h5>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}


interface ExtraSkillsProps {
    title: string
}

const items = [1, 2, 3, 4, 5]