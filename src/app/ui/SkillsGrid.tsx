import TitleDescription from '@/components/TitleDescription'
import React from 'react'
import SkillCard from './SkillCard';
import { getSkills } from '../../../sanity/sanity-query';

export default async function SkillsGrid() {
    const skills = await getSkills()

    return (
        <div className='w-full '>
            <TitleDescription
                title={skills.title} description={skills.description} />

            <div className='grid self-center grid-cols-3 gap-5 pt-6 place-content-center'>
                {skills.content.map((item: any) => {
                    return (<div className='px-12 pt-6 text-center bg-white border rounded pb-9' key={item._key}>
                        <SkillCard title={item.title} image={item.image} />
                    </div>);
                })}


            </div>

        </div>
    )
}


// const items = [1, 2, 3, 4, 5, 6]