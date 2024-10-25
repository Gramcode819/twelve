import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BiHome, BiSpeaker } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { MdEvent } from "react-icons/md";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (_jsxs("div", { className: "md:hidden lg:hidden ml-[-20px] w-[400px] h-[50px] mt-1 flex flex-row justify-around items-center border-t border-gray-200 pt-3 text-[24px]", children: [_jsxs(NavLink, { to: "/", className: "w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4", children: [_jsx(BiHome, {}), _jsx("p", { className: "text-sm", children: "Home" })] }), _jsxs(NavLink, { to: "/event", className: "w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4", children: [_jsx(MdEvent, {}), _jsx("p", { className: "text-sm", children: "Events" })] }), _jsxs(NavLink, { to: "/speaker", className: "w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4", children: [" ", _jsx(BiSpeaker, {}), _jsx("p", { className: "text-sm", children: "Speakers" })] }), _jsxs(NavLink, { to: "/report", className: "w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4", children: [_jsx(GoReport, {}), _jsx("p", { className: "text-sm", children: "Reports" })] }), _jsxs(NavLink, { to: "/profile", className: "w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4 mt-[10px]", children: [_jsx(Profile, { isCollapsed: false, name: "", email: "", imageUrl: "" }), _jsx("p", { className: "text-sm", children: "Profile" })] })] }));
};
export default Navbar;
