
export default function SkillPercentageRaiting({ title, skillSets }: SkillPercentageRaitingProps) {

    return (
        <div>
            <h3 className='pb-3 font-bold text-blacky-400'> {title}</h3>
            <div className='flex flex-col gap-2 '>
                {skillSets.map((e: any) => {
                    return (
                        <div key={e._key}>
                            <div className='flex flex-col'>
                                <div className='flex justify-between text-blacky-300'>
                                    <h5 className='text-sm pb-2'>{e.label}</h5>
                                    {/* <div>{e.percent}</div> */}
                                </div>
                                <progress className="w-full progress progress-primary" value={e.percent} max="100"></progress>

                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
interface SkillPercentageRaitingProps {
    title: string
    skillSets: any
}

