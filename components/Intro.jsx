import React from 'react'
import { personalDetails } from '@/data'
import Link from 'next/link'

function Intro() {
    return (
        <div className="text-center flex flex-col gap-[10px] py-[20px] mg:py-[50px]">
            <h1 className="font-semibold text-3xl lg:text-4xl">
                {personalDetails.name}
            </h1>
            <div className="text-sm">
                Another {personalDetails.age}-year-old developer from {personalDetails.country}.
            </div>
            <div className="text-xs text-center flex justify-center gap-5 *:border-b-[0.5px] *:border-transparent *:transition-all *:delay-50 *:duration-150 *:ease-in">
                {personalDetails.links.map((item, index) => {
                    return <Link href={item.link} className="hover:border-white" key={index}>{item.title}</Link>
                })}
            </div>
        </div>
    )
}

export default Intro