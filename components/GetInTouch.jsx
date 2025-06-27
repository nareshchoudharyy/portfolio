'use client'
import React, { useState } from 'react'
import { personalDetails } from '@/data'
import { Button } from './ui/stateful-button';
import Link from 'next/link';
function GetInTouch() {
    const [formDetails, setFormDetails] = useState({});
    const handleFormDetails = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value,
        });
    }
    async function handleClick(e) {
        e.preventDefault();
        const { name, email, message } = formDetails;
        if (!name || !email || !message) {
            return false;
        }
        try {
            const response = await axios.post(formUrl, formDetails);
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Submission failed:", error);
            return false;
        }
    };
    return (
        <div className="mb-10 md:mb-20">
            <h3 className="font-bold text-2xl mb-5">Get in touch</h3>
            <div className="flex flex-col md:flex-row">
                <div className="font-thin flex flex-col items-center gap-5">
                    <div className="">Have a project in mind or just want to chat about tech? I'd love to hear from you!</div>
                    <div className="text-sm w-full flex flex-col justify-start gap-2">
                        {
                            personalDetails.contact.map((data, index) => {
                                return <Link href={data.link} key={index}> <div className="flex items-center gap-1">{data.icon} {data.title}</div></Link>
                            })
                        }
                    </div>
                </div>
                <div>
                    <form className="w-full *:w-full *:p-2 *:my-2 md:*:m-2 *:border *:border-gray-300 *:rounded-md *:bg-white dark:*:bg-gray-800 *:text-black dark:*:text-white *:placeholder-gray-500 dark:*:placeholder-gray-400">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            value={formDetails.name || ""}
                            onChange={handleFormDetails}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={formDetails.email || ""}
                            onChange={handleFormDetails}
                        />
                        <textarea
                            name="message"
                            placeholder="Your message here"
                            required
                            value={formDetails.message || ""}
                            onChange={handleFormDetails}
                        ></textarea>
                        <Button type="button" className="bg-black text-white" onClick={handleClick}>Send message</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default GetInTouch