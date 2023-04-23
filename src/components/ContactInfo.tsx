import IconLaptopCode from '@/resource/icons/LaptopCode'
import React from 'react'

export default function ContactInfo() {
    return (
        <div className='flex flex-col w-full gap-4'>
            {items.map((e) => {
                return (


                    <div key={e} className='flex flex-col items-center bg-white card-body'>
                        <div><IconLaptopCode className='w-16 h-16 p-4 rounded-full bg-yellowes text-blacky-600'></IconLaptopCode></div>
                        {items.map((e) => {
                            return (
                                <div key={e} className='w-full'>
                                    <ContactListItemField></ContactListItemField>
                                </div>
                            )
                        })}
                    </div>

                );
            })}
        </div>
    )
}
const items = [1, 2, 4]


function ContactListItemField() {

    return (

        <div className='flex justify-between '>
            <div className='text-sm text-blacky-400'>Residence:</div>
            <div className='text-sm text-blacky-300'>India</div>
        </div>
    )
}
