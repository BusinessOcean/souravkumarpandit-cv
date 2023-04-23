import BlogTile from '@/components/BlogTile';
import TitleDescription from '@/components/TitleDescription';
import React from 'react'

export default function Blogs() {
    return (
        <>
            <TitleDescription title='Blog' description='Amet minim mollit non deserunt ullamco est sit 
            aliqua dolor do amet sint. Velit officia consequat duis 
            enim velit mollit. lorem ipsum'></TitleDescription>

            <div className='grid self-center grid-cols-3 gap-5 pt-6'>
                {
                    items.map((number) => {
                        return (<div className='text-center bg-white rounded aspect-square' key={number}><BlogTile /></div>);
                    })
                }
            </div>
        </>
    )
}


const items = [1, 2, 3, 4, 5]