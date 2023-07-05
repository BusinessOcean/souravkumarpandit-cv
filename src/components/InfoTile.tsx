import React from 'react'

export default function InfoTile({ label, value }: { label: string, value: string }) {
    return (
        <div className='flex justify-between'>

            <div className='text-sm  text-blacky-300 pr-5'>{label}:</div>
            <div className='text-sm font-semibold text-blacky-400'>{value}</div>
        </div>
    )
}
