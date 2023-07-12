import IconLaptopCode from '@/resource/icons/LaptopCode'
import React from 'react'
import { getExtraSkills } from '../../sanity/sanity-query'

export default async function ExtraSkills() {
    const skillTags = await getExtraSkills()

    return (
        <div className='w-52'>
            <h3 className='pb-3 font-bold text-blacky-400'> {"Extra Skills"}</h3>
            <div className='    flex flex-wrap flex-grow space-x-2'>
                {skillTags.map((e: any) => {
                    return (
                        <div key={e._key}>
                            <div className='badge  badge-secondary'>

                                <h5 className='text-sm text-blacky-100'>{e.label}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
