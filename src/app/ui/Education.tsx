import ItemListTile from '@/components/ItemListTile';
import TitleDescription from '@/components/TitleDescription'
import React from 'react'

export default function Education() {
    return (
        <div>
            <TitleDescription title='Education' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor 
        do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'></TitleDescription>

            <div className='flex flex-col pt-6 '>
                {items.map((number) => {
                    return (<div className='px-12 pt-6 text-center bg-white border rounded pb-9' key={number}><ItemListTile /></div>);
                })}


            </div>
        </div>
    )
}


const items = [1, 2, 3, 4, 5]