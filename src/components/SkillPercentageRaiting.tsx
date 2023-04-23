import React from 'react'

export default function SkillPercentageRaiting({ title }: SkillPercentageRaitingProps) {
    return (
        <div>
            <h3 className='pb-3 font-bold text-blacky-400'> {title}</h3>
            <div className='flex flex-col gap-2 '>
                {items.map((e) => {
                    return (
                        <div key={e}>
                            <div className='flex flex-col'>
                                <div className='flex justify-between text-blacky-300'>
                                    <h5 className='text-sm'>Flutter</h5>
                                    <div>{10 * e + 50}</div>
                                </div>
                                <progress className="w-56 progress progress-primary" value={10 * e + 50} max="100"></progress>

                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
interface SkillPercentageRaitingProps {
    title: string
}

const items = [1, 2, 3, 4, 5]