import React from 'react'

export default function ItemListTile() {
    return (
        <>
            <div className='flex flex-row text-start text-blacky-400'>
                <div className=' basis-2/5 w-44'>
                    <div className='pb-4'>University of Toronto</div>
                    <div className='align-middle '>Student <span className='px-2 py-1 ml-2 text-xs rounded-md bg-yellowes'>Jan 1016 - Dec 2021</span></div>
                </div>
                <div className='basis-3/5'>
                    <div className='pb-4'>Certificate of web training</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
                        quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.
                        Molestie risus enim neque eget dui.</div>
                </div>
            </div>
        </>
    )
}
