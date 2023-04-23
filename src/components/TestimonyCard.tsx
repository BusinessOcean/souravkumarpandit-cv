import React from 'react'
import RaitingStars from './RaitingStars'

export default function TestimonyCard() {
    return (
        <div className="flex flex-col gap-2 w-[300px]" >
            <div className=''>Great Quality!</div>
            <div className=''> <RaitingStars></RaitingStars></div>
            <div className='' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                <br />    nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</div>
            <div className='flex'>
                <div className='w-12 h-12 text-white bg-black rounded-full avtar'> H</div>
                <div className='pl-4'>
                    <div className='font-bold text-blacky-500'>Tiana Philips</div>
                    <div className=' text-blacky-400'>Photographer</div>
                </div>


            </div>
        </div>
    )
}
