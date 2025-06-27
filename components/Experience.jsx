import { personalDetails } from '@/data'
function Experience() {
    return (
        <div className="mb-10 md:mb-20">
            <h3 className="font-bold text-2xl mb-5">Experience</h3>
            <div className="flex flex-col gap-5">
                {personalDetails.experiences.map((item, index) => {
                    return <ExperienceBox key={index} place={item.place} position={item.position} duration={item.duration} description={item.description} technology={item.technology} />
                })}
            </div>
        </div>
    )
}
function ExperienceBox({ position, place, duration, description, technology }) {
    return (
        <div className="flex flex-col gap-5 rounded-xl p-5 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md transition duration-200 overflow-hidden">
            <div className='flex flex-col md:flex-row justify-between md:items-center border-b border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-white mb-4 pb-2 capitalize tracking-wide'>
                <div className="text-lg font-semibold  ">
                    {position} - {place}
                </div>
                <div className='text-sm'>{duration}</div>
            </div>
            <div className="text-center md:text-justify max-w-prose text-zinc-700 dark:text-zinc-300 mb-2">
                {description}
            </div>
            <div className='flex flex-wrap items-center justify-center md:justify-start gap-4'>
                {technology.map((item, index) => {
                    return <div key={index} className='px-3 py-[6px] text-sm rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200'>{item}</div>
                })}
            </div>
        </div>
    )
}
export default Experience