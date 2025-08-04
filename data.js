import { IconBrandLinkedin, IconLink, IconMail, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
export const formUrl = "https://usebasin.com/f/d43db8c5d028";
export const personalDetails = {
    name: "Naresh Choudhary",
    age: "21",
    country: "India",
    contact: [
        {
            icon: <IconPhone />,
            link: "tel:+917231062931",
            title: "+91-7231962931"
        },
        {
            icon: <IconMail />,
            link: "mailto:nareshgorachiya@gmail.com",
            title: "nareshgorachiya@gmail.com"
        },
        {
            icon: <IconBrandLinkedin />,
            link: "https://www.linkedin.com/in/nareshchoudharyy/",
            title: "linkedin.com/in/nareshchoudharyy"
        }],
    about: [
        `Hi, I'm Naresh — a 21-year-old engineering student from MBM University, Jodhpur. I specialize in building modern websites with the MERN stack, especially Next.js.`,
        `I'm passionate about clean design, exploring new tech, and turning ideas into real, user - focused products. Let's connect and build something great together!`
    ],
    links: [{
        title: "LinkedIn",
        link: 'https://www.linkedin.com/in/nareshchoudharyy/',
        newTab: true
    }, {
        title: "GitHub",
        link: 'https://github.com/nareshchoudharyy',
        newTab: true
    }, {
        title: "Twitter",
        link: 'https://x.com/nareshgorachiya',
        newTab: true
    }, {
        title: "Mail",
        link: 'mailto:nareshgorachiya@gmail.com',
        newTab: false
    }, {
        title: "Phone",
        link: 'tel:7231962931',
        newTab: false
    }],
    skills: {
        frontend: ['Html', 'Css', 'Javascript', 'React.js', 'Next.js', "Framer Motion", "TailwindCss", "Bootstrap", "AcertainityUI", "MagicUI", "daisyUI"],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'Postgres', 'ConvexDb', "ClerkAuth", 'JsonWebToken'],
        Tools: ['Github', 'BitBucket', 'Postman']
    },
    projects: [{
        title: "Quick AI",
        description: `QuickAI is a React-based AI tools platform offering image generation, background removal,article writing, resume review, and community features with user authentication andpremium plans.`,
        link: 'https://github.com/nareshchoudharyy/quickAI',
        livelink: "https://quick-ai-weld.vercel.app",
        status: "Completed",
        header: <Image src="/projectImages/QuickAi.png" width={400} height={400} alt="demo image" className="object-cover rounded-xl w-full h-full max-h-[65%]" />,
        icon: <IconLink className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Coffee Shop",
        description: `Website for an Coffee shop named "BREW & CO - Coffee Shop".`,
        link: 'https://github.com/nareshchoudharyy/Coffee-Shop',
        livelink: "https://coffee-shop-ten-mauve.vercel.app",
        status: "Completed",
        header: <Image src="/projectImages/coffee.png" width={400} height={400} alt="demo image" className="object-cover rounded-xl w-full h-full max-h-[65%]" />,
        icon: <IconLink className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "beClothing",
        description: `beClothing an E-Commerce Website (Only Front-End)`,
        link: 'https://github.com/nareshchoudharyy/ecom_website',
        livelink: "https://ecom-website-henna.vercel.app",
        status: "Completed",
        header: <Image src="/projectImages/ecom.png" width={400} height={400} alt="demo image" className="object-cover rounded-xl w-full h-full max-h-[65%]" />,
        icon: <IconLink className="h-4 w-4 text-neutral-500" />,
    }, {
        title: "Realtime Device Tacking",
        description: "Locating all the devices currently using this website",
        header: <Image src="/projectImages/RealtimeDeviceTracking.png" width={400} height={400} alt="demo image" className="object-cover rounded-xl w-full h-full max-h-[65%]" />,
        status: "In Process",
        link: 'https://github.com/nareshchoudharyy/realtime_tracking_app',
        livelink: "https://realtime-tracking-dmpz.onrender.com",
        icon: <IconLink className="h-4 w-4 text-neutral-500" />,
    }, {
        title: "Personal Portfolio",
        description: `My current portfolio website`,
        link: 'https://github.com/nareshchoudharyy/portfolio',
        livelink: "https://portfolio-mu-dun-21.vercel.app",
        status: "Completed",
        header: <Image src="/projectImages/portfolio.png" width={400} height={400} alt="demo image" className="object-cover rounded-xl w-full h-full max-h-[65%]" />,
        icon: <IconLink className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Notion Clone - Jotion",
        description: `Jotion - Your Ideas, Plans and Documents Unified (Note taking web-application)`,
        link: 'https://github.com/nareshchoudharyy/jotion',
        status: "In Process",
        livelink: "#",
        header: <Image src="/projectImages/notionClone.png" width={400} height={400} alt="demo image" className="object-cover rounded-xl w-full h-full max-h-[65%]" />,
        icon: <IconLink className="h-4 w-4 text-neutral-500" />,
    }],
    experiences: [{
        position: "Intern",
        place: "IIT Jodhpur",
        duration: "June 2022 - August 2022",
        description: "Worked on a project involving Pulse Width Modulation (PWM) for Visible Light Communication (VLC). Gained hands-on experience in research, hardware interfacing, and signal processing.",
        technology: ["Working with Photoresistors", 'Python', 'Arduino']
    }, {
        position: "Web Development Trainee",
        place: "WS Cube Tech",
        duration: "November 2023 - July 2024",
        description: "Learned the MERN stack (MongoDB, Express.js, React.js, Node.js) and built several websites. Developed skills in full-stack web development, RESTful APIs, and modern JavaScript frameworks.",
        technology: ['Frontend', 'Backend', "Mern Stack"]
    }, {
        position: "Freelance",
        place: "Agrawal GST Helpline",
        duration: "March 2024 - April 2024",
        description: "Developed a full-stack website for Agrawal GST Helpline, a tax consulting firm. Built a modern, responsive web application with showcasing all the services provided. Implemented clean UI/UX design and ensured smooth functionality across all devices.",
        technology: ["Full Stack Website"]
    }]
}