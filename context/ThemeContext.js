'use client'
import { useState, createContext, useContext, useEffect } from "react";
const ThemeContext = createContext({
    darkMode: true,
    toggleTheme: () => { },
});
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else {
            setDarkMode(true);
        }
        setMounted(true);
    }, []);
    const toggleTheme = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };
    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute(
                "data-theme",
                darkMode ? "dark" : "light"
            );
            document.body.classList.toggle('dark', darkMode);
            document.body.classList.toggle('light', !darkMode);
        }
    }, [darkMode, mounted]);
    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{children}</div>;
    }
    return (
        <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};