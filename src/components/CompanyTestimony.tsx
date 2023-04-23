import React from 'react'

export default function CompanyTestimony() {
    return (
        <div className='grid items-center self-center w-full grid-cols-4 gap-5 pt-6 place-items-center'>
            {items.map((number) => {
                return (<div className='w-32 h-32 aspect-square bg-yellowes ' key={number}>
                </div>);
            })}
        </div>


    )
}


const items = [1, 2, 3, 4];