import React from 'react';
import MyImage from '../../../images/my_pic.jpeg';
import Image from 'next/image';
import IconLaptopCode from '@/resource/icons/LaptopCode';
import InfoTile from '@/components/InfoTile';
import SkillPercentageRaiting from '@/components/SkillPercentageRaiting';
import ExtraSkills from '@/components/ExtraSkills';
import DownloadResume from '@/components/DownloadResume';
import { urlFor } from '../../../sanity/sanity-utils';

export default function DrawerPannel(props: any) {

    const appdata = props.appdata

    return (
        <div className='sticky top-0 bottom-0 left-0 z-50 flex flex-col flex-none h-screen px-8 overflow-auto bg-white hide-scroll-bar py-14 hover:shadow-lg'>
            <div>

                <div className='w-40 h-40 mb-6 text-center rounded-full ml-14 mr-14 avatar overflow-clip ' >
                    <Image alt={appdata.profileImage.alt} className='w-full, h-full' src={urlFor(appdata.profileImage).url()} width="160" height="160" ></Image>
                </div>
                <div className='text-center'>

                    <h4 className='text-xl font-bold text-blacky-500'>
                        {appdata.cvname}
                    </h4>
                    <h6 className='text-sm text-blacky-300'>
                        {appdata.cvrole}
                    </h6>
                </div>
                <div className='flex justify-between gap-2 my-3 '>
                    <IconLaptopCode className='flex items-center justify-center p-2 rounded-full hover:scale-110 w-9 h-9 bg-yellowes'></IconLaptopCode>
                    <IconLaptopCode className='flex items-center justify-center p-2 rounded-full hover:scale-110 w-9 h-9 bg-yellowes'></IconLaptopCode>
                    <IconLaptopCode className='flex items-center justify-center p-2 rounded-full hover:scale-110 w-9 h-9 bg-yellowes'></IconLaptopCode>
                    <IconLaptopCode className='flex items-center justify-center p-2 rounded-full hover:scale-110 w-9 h-9 bg-yellowes'></IconLaptopCode>
                    <IconLaptopCode className='flex items-center justify-center p-2 rounded-full hover:scale-110 w-9 h-9 bg-yellowes'></IconLaptopCode>
                    <IconLaptopCode className='flex items-center justify-center p-2 rounded-full hover:scale-110 w-9 h-9 bg-yellowes'></IconLaptopCode>
                </div>

            </div>
            <div className=' divider'></div>

            <div className='flex flex-col gap-2 '>
                {items.map((e) => { return (<InfoTile key={e} />) })}
            </div>

            <div className=' divider'></div>
            <SkillPercentageRaiting title='Languages'></SkillPercentageRaiting>
            <div className=' divider'></div>
            <SkillPercentageRaiting title='Skills'></SkillPercentageRaiting>
            <div className=' divider'></div>
            <ExtraSkills title='Extra Skills'></ExtraSkills>
            <div className=' divider'></div>

            <DownloadResume></DownloadResume>





        </div>
    )
}

const items = [1, 2, 3, 4, 5, 6, 7]
