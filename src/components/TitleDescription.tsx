import React, { ReactNode } from 'react'

export default function TitleDescription({ title, description }: TitleDescriptionProps) {
    return (
        <div className='flex flex-col items-center '>
            <h2 className='py-2 text-2xl font-bold text-center text-blacky-400'>{title}</h2>
            <h4 className='max-w-lg font-normal text-center text-blacky-300'>{description}</h4>
        </div>
    )
}


interface TitleDescriptionProps {
    title: string,
    description: string
}