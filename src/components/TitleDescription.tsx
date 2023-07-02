import { PortableText } from '@portabletext/react';
import React, { ReactNode } from 'react'
import { PortableTextBlock } from "sanity";

export default function TitleDescription({ title, description, content }: TitleDescriptionProps) {
    return (
        <div className='flex flex-col items-center '>
            <h2 className='py-2 text-2xl font-bold text-center text-blacky-400'>{title}</h2>
            <div className='max-w-lg font-normal text-center text-blacky-300' >

                {

                    (content != null) ?
                        <PortableText value={content!} />
                        :
                        <h4 className='max-w-lg font-normal text-center text-blacky-300'>{description}</h4>

                }
            </div>


        </div>
    )
}


interface TitleDescriptionProps {
    title: string,
    description?: string
    content?: PortableTextBlock[]
}