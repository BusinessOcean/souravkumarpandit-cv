import PortFolioTabs from '@/components/PortFolioTabs'
import TitleDescription from '@/components/TitleDescription'
import React from 'react'
import GallaryImage from '@/components/GallaryImage';

export default function PorfolioGallary() {
    return (
        <>
            <TitleDescription title='Portfolio' description='Amet minim mollit non deserunt ullamco est sit 
            aliqua dolor do amet sint. Velit officia consequat duis 
            enim velit mollit. lorem ipsum'></TitleDescription>
            <div>
                <PortFolioTabs></PortFolioTabs>
            </div>

            <div className='grid self-center w-full grid-cols-3 gap-5 pt-6'>
                {
                    items.map((number) => {
                        return (<div className='text-center rounded aspect-square bg-yellowes' key={number}><GallaryImage /></div>);
                    })
                }
            </div>
        </>
    )
}


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]