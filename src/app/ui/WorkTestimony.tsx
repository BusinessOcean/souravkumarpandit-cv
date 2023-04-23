import TestimonyCard from '@/components/TestimonyCard';
import TitleDescription from '@/components/TitleDescription'
import React from 'react'
import SkillCard from './SkillCard';

export default function WorkTestimony() {
    return (
        <div className='w-full'>
            <TitleDescription
                title='Recommendations'
                description='Amet minim mollit non deserunt ullamco est sit aliqua 
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            lorem ipsum'/>

            <div className='pt-8 overflow-y-auto hide-scroll-bar'>
                <div className='flex w-0 gap-8'>
                    {[...items, ...items, ...items].map((number) => {
                        return (<div className='px-6 py-6 bg-white ' key={number}> <TestimonyCard></TestimonyCard></div>);
                    })}
                </div>
            </div>

        </div>)
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];