import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ImCancelCircle } from 'react-icons/im';
import ImageStack from './ImageStack';
const EventCard = ({ isOpen, onClose, eventData }) => {
    const images = [
        'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1729476906/Image_y1xfcp.jpg',
        'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1729476907/Avatar_1_vcmpm8.jpg',
        'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1729476906/Avatar_2_ck571i.jpg',
    ];
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 bg-transparent w-full h-full flex justify-center items-center dark:bg-gray-900 text-black dark:text-white", children: _jsxs("div", { className: "bg-white w-[90%] sm:w-[400px] h-auto mt-1 rounded shadow-md relative", children: [_jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex flex-row justify-between", children: [_jsx("h1", { className: "text-lg font-semibold", children: eventData.name }), _jsx(ImCancelCircle, { onClick: onClose, className: "cursor-pointer" })] }), _jsx("p", { className: "text-xs text-gray-500", children: eventData.date }), _jsx("p", { className: "text-xs text-gray-500 mb-4", children: eventData.description }), _jsx(ImageStack, { images: images }), _jsxs("p", { className: "text-sm mt-4", children: [eventData.speakers.length, " Guest Speakers: ", eventData.speakers.join(', ')] })] }), _jsx("div", { className: "bg-gray-200 p-4 rounded-b-md", children: _jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center gap-4", children: [_jsx("button", { className: "text-sm bg-white shadow-md border p-2 w-full sm:w-auto", children: "Edit" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 w-full sm:w-auto", children: [_jsx("button", { className: "text-sm bg-red-400 shadow-md border p-2 w-full sm:w-auto", children: "Delete" }), _jsx("button", { className: "text-sm bg-purple-400 shadow-md border p-2 w-full sm:w-auto", children: "Mark as completed" })] })] }) })] }) }));
};
export default EventCard;
