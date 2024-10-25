import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
const RootLayout = () => {
    return (_jsxs("div", { className: "flex bg-[#ffffff] dark:bg-gray-900 text-black dark:text-white", children: [_jsx(Sidebar, {}), _jsxs("main", { className: "flex-grow p-6 dark:bg-gray-900 text-black dark:text-white", children: [_jsx(Outlet, {}), _jsx(Navbar, {})] })] }));
};
export default RootLayout;
