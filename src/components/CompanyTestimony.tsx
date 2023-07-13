import React from 'react'
import Image from 'next/image';
import { getCompanys } from '../../sanity/sanity-query';
import { urlFor } from '../../sanity/sanity-utils';

export default async function CompanyTestimony() {
    const companys = await getCompanys()
    return (
        <div className='grid items-center self-center w-full grid-cols-4 gap-5 pt-6 place-items-center'>
            {companys.map((e: any) => {
                return (

                    <Image key={e._id} alt={e.image.alt} className='w-full h-32 aspect-square w-full,'
                        src={urlFor(e.image).url()} width="500" height="500"   ></Image>

                );
            })}
        </div>


    )
}

