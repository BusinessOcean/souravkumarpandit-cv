import SelectableIcon from '@/components/SelectableIcon'
import React, { ReactNode } from 'react'
import { MdDarkMode } from 'react-icons/md';
import {
    FaHome, FaBookReader, FaBriefcase, FaBloggerB,

} from 'react-icons/fa';
import { RiCodeBoxFill, RiContactsBook2Fill } from 'react-icons/ri';
import Link from 'next/link';


export default function RightDockPannel() {

    const navIconsList: Array<{ child: ReactNode, label: string, sectiontag: string }> = [

        {
            child: <FaHome size={18} />,
            label: "Home",
            sectiontag: "#home"
        },

        {
            child: <RiCodeBoxFill size={18} />,
            label: "Skills",
            sectiontag: "#skills"
        },
        {
            child: <FaBookReader size={18} />,
            label: "Education",
            sectiontag: "#education"
        },
        {
            child: <FaBriefcase size={18} />,
            label: "Experience",
            sectiontag: "#experience"
        },
        {
            child: <FaBloggerB size={18} />,
            label: "Achivements",
            sectiontag: "#achivement"
        },
        {
            child: <RiContactsBook2Fill size={18} />,
            label: "Contact",
            sectiontag: "#contact"
        },

    ]

    return (
        <div className='sticky top-0 bottom-0 right-0 z-50 items-center content-center flex-none h-screen p-5 overflow-auto text-center bg-white shadow-sm hide-scroll-bar hover:shadow-lg'>
            <div className='relative'>
                <SelectableIcon label='Theme' sectiontag='theme'> < MdDarkMode /> </SelectableIcon>
            </div>

            <div className='flex flex-col items-center content-center justify-center object-center gap-3 h-[calc(100%-48px)]'>
                {navIconsList.map((e) => {
                    return (<div key={e.label} className=''>
                        <Link href={e.sectiontag} scroll={true} > <SelectableIcon label={e.label} sectiontag={e.sectiontag} > {e.child}</SelectableIcon> </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}


