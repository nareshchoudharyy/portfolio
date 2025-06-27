import React from 'react'
import { personalDetails } from '@/data'
function Skills() {
    return (
        <div className="mb-10 md:mb-20">
            <h3 className="font-bold text-2xl mb-5">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                {Object.entries(personalDetails.skills).map(([category, skillList]) => (
                    <SkillBox key={category} category={category} skills={skillList} />
                ))}
            </div>
        </div>
    )
}
function SkillBox({ category, skills }) {
    return (
        <div className="rounded-xl p-5 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md transition duration-200">
            <div className="text-lg font-semibold capitalize mb-4 pb-2 tracking-wide border-b border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-white">
                {category}
            </div>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="px-3 py-[6px] text-sm rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Skills