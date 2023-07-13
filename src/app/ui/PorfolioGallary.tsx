import PortFolioTabs from '@/components/PortFolioTabs'
import TitleDescription from '@/components/TitleDescription'
import React from 'react'
import Image from 'next/image';
import { getGallaryImages } from '../../../sanity/sanity-query';
import { urlFor } from '../../../sanity/sanity-utils';

export default async function PorfolioGallary() {
    const gallarys = await getGallaryImages()
    console.log(gallarys)
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
                    gallarys.map((e: any) => {
                        return (<div className='text-center rounded aspect-square bg-yellowes' key={e._key}>

                            <Image key={e._id} alt={e.image.alt} className=' aspect-square w-1/3-,'
                                src={urlFor(e.image).url()} width="500" height="500"   ></Image>
                        </div>);
                    })
                }
            </div>
        </>
    )
}


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
