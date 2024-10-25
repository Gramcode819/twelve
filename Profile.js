import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Profile = ({ isCollapsed, name, email, imageUrl }) => {
    return (_jsxs("div", { className: "flex items-start p-[-10px] dark:bg-gray-900 text-black dark:text-white", children: [_jsx("img", { src: imageUrl, alt: "User Profile", className: "rounded-full w-10 h-10 border" }), !isCollapsed && (_jsxs("div", { className: "ml-1", children: [_jsx("h2", { className: "text-xs font-semibold", children: name }), _jsx("p", { className: "text-xs font-extralight text-gray-400", children: email })] }))] }));
};
export default Profile;
