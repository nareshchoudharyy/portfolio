"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandLinkedin, IconHome, IconMoonFilled, IconSunFilled, IconTerminal2 } from "@tabler/icons-react";
import { useTheme } from "@/context/ThemeContext";
export function Navigation() {
    const { darkMode, toggleTheme } = useTheme();
    const links = [
        {
            title: "Home",
            newTab: false,
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Projects",
            newTab: false,
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "LinkedIn",
            newTab: true,
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://linkedin.com/in/nareshchoudharyy",
        },
        {
            title: "GitHub",
            newTab: true,
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/nareshchoudharyy",
        },
        {
            title: 'Switch Theme',
            newTab: false,
            icon: darkMode ? (
                <IconSunFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ) : (
                <IconMoonFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            onClick: toggleTheme
        }
    ];
    return (
        <div className="fixed bottom-[20px] right-[20px] md:right-0 md:w-full md:flex md:items-center md:justify-center">
            <FloatingDock items={links} desktopClassName={'dark'} />
        </div>
    );
}
