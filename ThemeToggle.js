import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (_jsx("button", { onClick: toggleTheme, className: "w-[60px] ml-2 p-2 items-center bg-gray-200 dark:gray-800 text-black dark:text-white rounded-full text-[12px]", children: theme === 'dark' ? (_jsx(MdDarkMode, { className: "bg-black text-white rounded-full p-2 h-[18px] w-[20px] text-sm" })) : (_jsx(MdLightMode, { className: "bg-white text-black p-2 rounded-full h-[18px] w-[20px] translate-x-6 text-sm" })) }));
};
export default ThemeToggle;
