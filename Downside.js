import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { CiExport } from 'react-icons/ci';
// const data = [
//   {
//     name: 'Cloud Innovation Summit',
//     date: '2024-10-15',
//     speaker: 'Jane Doe',
//     status: 'Completed',
//   },
//   {
//     name: 'BlockChain Renovations Conference',
//     date: '2024-11-15',
//     speaker: 'Dr Peter Smith',
//     status: 'In Progress',
//   },
//   {
//     name: 'AI in Healthcare Symposium',
//     date: '2024-12-1',
//     speaker: 'Dr Aisha Malik',
//     status: 'Completed',
//   },
//   {
//     name: 'Future of Fintech Forum',
//     date: '2024-10-25',
//     speaker: 'John Lee',
//     status: 'Completed',
//   },
//   {
//     name: 'Data Analytics in Business',
//     date: '2024-10-15',
//     speaker: 'Rachel Moore',
//     status: 'Completed',
//   },
//   {
//     name: 'Sustainable Energy Expo',
//     date: '2024-10-15',
//     speaker: 'Prof. Alan Green',
//     status: 'Completed',
//   },
//   {
//     name: 'Web3 Interface Workshop',
//     date: '2024-10-19',
//     speaker: 'Emily Zhang',
//     status: 'Completed',
//   },
//   {
//     name: 'Cybersecurity for Startups',
//     date: "2024 - 10 - 19",
//     speaker: 'Kevin Adams',
//     status: 'In-Progress',
//   },
//   {
//     name: 'Smart Cities Forum',
//     date: "2024 - 10 - 18",
//     speaker: 'Dr. Maria Hernandez',
//     status: 'In-Progress',
//   },
//   {
//     name: 'Tech Safari Mixer',
//     date: '2024-10-15',
//     speaker: 'Guest Panel',
//     status: 'In-Progress',
//   },
//   {
//     name: 'Cloud Innovation Summit',
//     date: '2024-10-15',
//     speaker: 'Jane Doe',
//     status: 'Completed',
//   },
//   {
//     name: 'Cloud Innovation Summit',
//     date: '2024-10-15',
//     speaker: 'Jane Doe',
//     status: 'Completed',
//   },
// ];
// const Downside = () => {
//   return (
//     <div className="w-[100%] mt-2 dark:bg-gray-900 text-black dark:text-white">
//       <h1 className="font-semibold text-xl"> Events History</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 xl:grid-cols-4 sm:items-center  gap-4 text-center py-5  dark:bg-gray-900 text-black dark:text-white">
//         <div className="relative w-[300px] max-w-[400px] ">
//           <input
//             type="text"
//             className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full outline-none dark:bg-gray-900 text-black dark:text-white"
//             placeholder="Search..."
//           />
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-500"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M12.9 14.32a8 8 0 111.414-1.414l4.858 4.858a1 1 0 01-1.414 1.414l-4.858-4.858zM14.5 8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
//                 clip-rule="evenodd"
//               />
//             </svg>
//           </div>
//         </div>
//         <select className="rounded p-2 w-[90px] dark:bg-gray-900 text-black dark:text-white">
//           <option value="">Date</option>
//         </select>
//         <select className="rounded p-2 w-[90px] dark:bg-gray-900 text-black dark:text-white">
//           <option value="">Status</option>
//         </select>
//         <select className="rounded p-2 w-[90px] dark:bg-gray-900 text-black dark:text-white">
//           <option value="">Name</option>
//         </select>
//         <span>Display 100 resulting</span>
//         <select className="rounded p-2 w-[130px] dark:bg-gray-900 text-black dark:text-white">
//           <option value="">Most Recent</option>
//           <option value="">Oldest</option>
//           <option value="">Newest</option>
//         </select>
//         <BsThreeDotsVertical className="p-2 w-[35px] h-[40px] border" />
//         <span className="p-2 w-[100px] h-[30px] border flex flex-row gap-2">
//           <CiExport className="" /> Export
//         </span>
//       </div>
//       <div className='mt-2 dark:bg-gray-900 text-black dark:text-white '>
//       <table className="min-w-full  border border-gray-200 rounded-lg shadow-lg dark:bg-gray-900 text-black dark:text-white">
//       <thead className=''>
//           <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
//             <th className="py-3 px-6 text-left">Event Name</th>
//             <th className="py-3 px-6 text-left">Date</th>
//             <th className="py-3 px-6 text-center">Speaker</th>
//             <th className="py-3 px-6 text-center">Status</th>
//           </tr>
//         </thead>
//         {data?.map((item) =>(<tbody className="text-gray-600 text-sm">
//           <tr className="border-b border-gray-200 hover:bg-gray-100">
//             <td className="py-3 px-6 text-left">{item.name}</td>
//             <td className="py-3 px-6 text-left">{item.date}</td>
//             <td className="py-3 px-6 text-center">{item.speaker}</td>
//             <td className="py-3 px-6 text-center">
//               <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
//               {item.status}
//               </span>
//             </td>
//           </tr>
//         </tbody>))}
//       </table>
//       </div>
//     </div>
//   );
// };
// export default Downside;
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiExport } from 'react-icons/ci';
import { TfiControlSkipBackward, TfiControlSkipForward } from 'react-icons/tfi';
import EventCard from './EventCard';
const data = [
    {
        name: 'Cloud Innovation Summit',
        date: '2024-10-15',
        speaker: 'Jane Doe',
        status: 'Completed',
    },
    {
        name: 'BlockChain Renovations Conference',
        date: '2024-11-15',
        speaker: 'Dr Peter Smith',
        status: 'In Progress',
    },
    {
        name: 'AI in Healthcare Symposium',
        date: '2024-12-1',
        speaker: 'Dr Aisha Malik',
        status: 'Completed',
    },
    {
        name: 'Future of Fintech Forum',
        date: '2024-10-25',
        speaker: 'John Lee',
        status: 'Completed',
    },
    {
        name: 'Data Analytics in Business',
        date: '2024-10-15',
        speaker: 'Rachel Moore',
        status: 'Completed',
    },
    {
        name: 'Sustainable Energy Expo',
        date: '2024-10-15',
        speaker: 'Prof. Alan Green',
        status: 'Completed',
    },
    {
        name: 'Web3 Interface Workshop',
        date: '2024-10-19',
        speaker: 'Emily Zhang',
        status: 'Completed',
    },
    {
        name: 'Cybersecurity for Startups',
        date: '2024 - 10 - 19',
        speaker: 'Kevin Adams',
        status: 'In-Progress',
    },
    {
        name: 'Smart Cities Forum',
        date: '2024 - 10 - 18',
        speaker: 'Dr. Maria Hernandez',
        status: 'In-Progress',
    },
    {
        name: 'Tech Safari Mixer',
        date: '2024-10-15',
        speaker: 'Guest Panel',
        status: 'In-Progress',
    },
    {
        name: 'Cloud Innovation Summit',
        date: '2024-10-15',
        speaker: 'Jane Doe',
        status: 'Completed',
    },
    {
        name: 'Cloud Innovation Summit',
        date: '2024-10-15',
        speaker: 'Jane Doe',
        status: 'Completed',
    },
];
// Pagination Logic
const paginate = (data, currentPage, rowsPerPage) => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return data.slice(startIndex, startIndex + rowsPerPage);
};
const Downside = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const paginatedData = paginate(data, currentPage, rowsPerPage);
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const toggleDetails = (index) => {
        setSelectedEvent(paginatedData[index]);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };
    const Pagination = () => (_jsxs("div", { className: "py-4", children: [_jsx("button", { className: `px-2 py-2 border rounded-full ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`, onClick: () => setCurrentPage((prev) => prev - 1), disabled: currentPage === 1, children: _jsx(TfiControlSkipBackward, {}) }), _jsx("span", { children: `${currentPage} of ${totalPages}` }), _jsx("button", { className: `px-2 py-2 border rounded-full ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`, onClick: () => setCurrentPage((prev) => prev + 1), disabled: currentPage === totalPages, children: _jsx(TfiControlSkipForward, {}) })] }));
    return (_jsxs("div", { className: "w-full mt-2 dark:bg-gray-900 text-black dark:text-white px-4 md:px-2", children: [_jsx("h1", { className: "font-semibold text-xl", children: "Events History" }), _jsxs("div", { className: "flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-center py-5", children: [_jsxs("div", { className: "relative w-full max-w-[400px] mx-auto lg:max-w-[250px]", children: [_jsx("input", { type: "text", className: "pl-10 pr-4 py-2 border border-gray-300 rounded w-full outline-none dark:bg-gray-900 text-black dark:text-white", placeholder: "Search..." }), _jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-gray-500", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M12.9 14.32a8 8 0 111.414-1.414l4.858 4.858a1 1 0 01-1.414 1.414l-4.858-4.858zM14.5 8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z", clipRule: "evenodd" }) }) })] }), _jsxs("div", { className: "flex flex-col lg:flex-row lg:gap-4 w-full lg:w-auto items-center justify-between", children: [_jsxs("select", { className: "rounded p-2 w-full lg:w-[130px] dark:bg-gray-900 text-black dark:text-white", children: [_jsx("option", { value: "", children: "Date" }), _jsx("option", { value: "", children: "Time" })] }), _jsxs("select", { className: "rounded p-2 w-full lg:w-[130px] dark:bg-gray-900 text-black dark:text-white", children: [_jsx("option", { value: "", children: "Status" }), _jsx("option", { value: "Completed", children: "Complete" }), _jsx("option", { value: "In-Progress", children: "In-Progress" })] }), _jsxs("select", { className: "rounded p-2 w-full lg:w-[130px] dark:bg-gray-900 text-black dark:text-white", children: [_jsx("option", { value: "", children: "Name" }), _jsx("option", { value: "", children: "Speakers" })] })] }), _jsxs("span", { className: "", children: ["Display ", rowsPerPage, " results"] }), _jsxs("div", { className: "flex flex-row justify-between items-center gap-2", children: ["Sort:", _jsxs("select", { className: "rounded p-2 w-full lg:w-[130px] dark:bg-gray-900 text-black dark:text-white", children: [_jsx("option", { value: "MostRecent", children: "Most Recent" }), _jsx("option", { value: "Oldest", children: "Oldest" }), _jsx("option", { value: "Newest", children: "Newest" })] })] }), _jsxs("div", { className: "flex items-center gap-10", children: [_jsx(BsThreeDotsVertical, { className: "p-2 w-[35px] h-[40px] border-2 dark:border-white" }), _jsxs("span", { className: "p-2 w-[100px] h-[40px] flex items-center gap-2 border-2 dark:border-white", children: [_jsx(CiExport, { className: "" }), " Export"] })] })] }), _jsx("div", { className: "mt-2 overflow-x-auto", children: _jsxs("table", { className: "min-w-full border border-gray-200 rounded-lg shadow-lg", children: [_jsx("thead", { className: "bg-gray-100 text-gray-600 uppercase text-sm leading-normal", children: _jsxs("tr", { children: [_jsx("th", { className: "py-3 px-6 text-left", children: "Event Name" }), _jsx("th", { className: "py-3 px-6 text-center hidden md:table-cell", children: "Date" }), _jsx("th", { className: "py-3 px-6 text-center hidden md:table-cell", children: "Speaker" }), _jsx("th", { className: "py-3 px-6 text-center", children: "Status" })] }) }), _jsx("tbody", { className: "text-gray-600 text-sm", children: paginatedData.map((item, index) => (_jsxs("tr", { className: "border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer", onClick: () => toggleDetails(index), children: [_jsx("td", { className: "py-3 px-6 text-left", children: item.name }), _jsx("td", { className: "py-3 px-6 text-center hidden md:table-cell", children: item.date }), _jsx("td", { className: "py-3 px-6 text-center hidden md:table-cell", children: item.speaker }), _jsx("td", { className: "py-3 px-6 text-center", children: _jsx("span", { className: `py-1 px-3 rounded-full text-xs ${item.status === 'Completed'
                                                ? 'bg-green-200 text-green-600'
                                                : 'bg-yellow-200 text-yellow-600'}`, children: item.status }) })] }, index))) })] }) }), selectedEvent && (_jsx(EventCard, { isOpen: isModalOpen, onClose: closeModal, eventData: {
                    name: selectedEvent.name,
                    date: selectedEvent.date,
                    description: selectedEvent.description || '',
                    speakers: selectedEvent.speaker.split(', '), // Assuming speakers are separated by commas
                } })), _jsx(Pagination, {})] }));
};
export default Downside;
