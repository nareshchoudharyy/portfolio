import React from 'react'
import { personalDetails } from '@/data'

function About() {
    return (
        <div className="flex flex-col gap-[5px] mb-10 md:mb-20">
            <h3 className="font-bold text-2xl mb-5">About</h3>
            <div className="text-[14px] text-center md:text-justify ">
                {personalDetails.about.map((data, index) => {
                    return <div key={index}>{data}</div>
                })}
            </div>
        </div>
    )
}

export default About