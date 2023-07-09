"use client"
import React from 'react';
import Image from 'next/image';
import IconLaptopCode from '@/resource/icons/LaptopCode';
import InfoTile from '@/components/InfoTile';
import SkillPercentageRaiting from '@/components/SkillPercentageRaiting';
import ExtraSkills from '@/components/ExtraSkills';
import DownloadResume from '@/components/DownloadResume';
import { urlFor } from '../../../sanity/sanity-utils';
import { useAppDataContext } from '@/context/AppDataContext';
import LinkImageIcon from '@/resource/LinkImageIcon';

export default function DrawerPannel() {

    const appdata = useAppDataContext()!

    const social = appdata.social


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

                    {
                        social.map((e: any) => {
                            return (<div key={e.alt} className='flex items-center justify-center p-1 rounded-full hover:scale-110 w-9 h-9 bg-slate-100'  >
                                <LinkImageIcon social={e}></LinkImageIcon>
                            </div>)
                        })

                    }


                </div>

            </div>
            <div className=' divider'></div>

            <div className='flex flex-col gap-2 '>
                {appdata.extrakeyvalue.map((e: any) => { return (<InfoTile key={e._id} label={e.label} value={e.value} />) })}
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
