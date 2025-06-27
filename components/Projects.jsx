import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { personalDetails } from '@/data'

function Projects() {
    return (
        <div className="flex flex-col gap-[5px] mb-10 md:mb-20" id="projects">
            <h3 className="font-bold text-2xl mb-5">Projects</h3>
            <BentoGrid className="max-w-4xl mx-auto overflow-hidden">
                {personalDetails.projects.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        link={item.link}
                        status={item.status}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
                ))}
            </BentoGrid>
        </div>
    )
}

export default Projects