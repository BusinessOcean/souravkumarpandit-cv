import TitleDescription from '@/components/TitleDescription'
import React from 'react'
import SkillCard from './SkillCard';

export default function SkillsGrid() {
    return (
        <div className='w-full '>
            <TitleDescription
                title='Skills' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos doloribus illo,voluptatum dolorem earum sequi adipisci aliquid, obcaecati eaque
                cum vel porro dolores. Similique qui aliquid optio maiores modi sit!'/>

            <div className='grid self-center grid-cols-3 gap-5 pt-6 place-content-center'>
                {items.map((number) => {
                    return (<div className='px-12 pt-6 text-center bg-white border rounded pb-9' key={number}><SkillCard /></div>);
                })}


            </div>

        </div>
    )
}


const items = [1, 2, 3, 4, 5, 6]