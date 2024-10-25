import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { BiBell, BiHome } from "react-icons/bi";
import { FaCog } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { MdEvent } from "react-icons/md";
import Profile from "./Profile";
import { PiUserSoundFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Hamburger and close icons
const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: "lg:hidden fixed top-0 left-0 p-4 z-50 w-full flex justify-between items-center", children: [_jsx(Logo, { isCollapsed: false, label: "Full Logo" }), _jsx("button", { onClick: toggleMobileMenu, className: "text-2xl focus:outline-none", children: isMobileMenuOpen ? _jsx(AiOutlineClose, {}) : _jsx(AiOutlineMenu, {}) })] }), _jsx("div", { className: `hidden lg:flex flex-col fixed ml-1 text-xs dark:bg-gray-900 text-black dark:text-white ${isCollapsed ? `w-20` : `w-[135px]`} h-screen bg-white transition-width duration-300`, children: _jsxs("nav", { className: "flex flex-col mt-4 space-y-1", children: [_jsx(NavLink, { to: "/", children: _jsx(MenuItem, { isCollapsed: isCollapsed, icon: _jsx(BiHome, {}), label: "Home" }) }), _jsx(MenuItem, { isCollapsed: isCollapsed, icon: _jsx(MdEvent, {}), label: "Event" }), _jsx(MenuItem, { isCollapsed: isCollapsed, icon: _jsx(PiUserSoundFill, {}), label: "Speakers" }), _jsx(MenuItem, { isCollapsed: isCollapsed, icon: _jsx(TbReportSearch, {}), label: "Report" }), _jsx(MenuItem, { isCollapsed: isCollapsed, icon: _jsx(BiBell, {}), label: "Notification", badgeCount: 3 }), _jsx(MenuItem, { isCollapsed: isCollapsed, icon: _jsx(LuMessagesSquare, {}), label: "Message" }), _jsx(MenuItem, { isCollapsed: isCollapsed, icon: _jsx(FaCog, {}), label: "Setting" }), _jsx(Profile, { isCollapsed: isCollapsed, name: "Rudra Devi", email: "rudra.devi@gmail.com", imageUrl: "http://" }), _jsx("button", { onClick: toggleSidebar, className: "text-black text-xs ml-[-50px] p-2 focus:outline-none dark:bg-gray-900 dark:text-white", children: isCollapsed ? ">> " : "<<" }), _jsx(ThemeToggle, {})] }) }), isMobileMenuOpen && (_jsx("div", { className: `lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-40`, onClick: toggleMobileMenu, children: _jsx("div", { className: `fixed top-0 left-0 w-[250px] h-full bg-white dark:bg-gray-900 text-black dark:text-white transition-transform transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`, onClick: (e) => e.stopPropagation(), children: _jsxs("nav", { className: "flex flex-col mt-16 space-y-1", children: [_jsx(NavLink, { to: "/", children: _jsx(MenuItem, { isCollapsed: false, icon: _jsx(BiHome, {}), label: "Home" }) }), _jsx(MenuItem, { isCollapsed: false, icon: _jsx(MdEvent, {}), label: "Event" }), _jsx(MenuItem, { isCollapsed: false, icon: _jsx(PiUserSoundFill, {}), label: "Speakers" }), _jsx(MenuItem, { isCollapsed: false, icon: _jsx(TbReportSearch, {}), label: "Report" }), _jsx(MenuItem, { isCollapsed: false, icon: _jsx(BiBell, {}), label: "Notification", badgeCount: 3 }), _jsx(MenuItem, { isCollapsed: false, icon: _jsx(LuMessagesSquare, {}), label: "Message" }), _jsx(MenuItem, { isCollapsed: false, icon: _jsx(FaCog, {}), label: "Setting" }), _jsx(Profile, { isCollapsed: false, name: "Rudra Devi", email: "rudra.devi@gmail.com", imageUrl: "http://" }), _jsx(ThemeToggle, {})] }) }) }))] }));
};
const MenuItem = ({ icon, label, isCollapsed, badgeCount }) => {
    return (_jsxs("div", { className: "relative flex items-center p-2 hover:bg-slate-300 cursor-pointer", children: [_jsx("span", { className: "text-xl", children: icon }), !isCollapsed && _jsx("span", { className: "ml-3", children: label }), badgeCount && badgeCount > 0 && (_jsx("span", { className: "absolute right-2 top-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center", children: badgeCount }))] }));
};
const Logo = ({ isCollapsed, label }) => {
    return (_jsx("div", { className: "flex items-center p-2 cursor-pointer", children: !isCollapsed && (_jsx("span", { className: "w-[100px] h-[30px] border-2 border-dashed ml-[-5px] mt-2 p-1", children: label })) }));
};
export default Sidebar;
