import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardItem from "../Component/CardItem";
import CardItemm from "../Component/CardItemm";
import CardItems from "../Component/CardItems";
import CardItemx from "../Component/CardItemx";
import Downside from '../Component/Downside';
import RightColumn from '../Component/RightColumn';
import AreaCharts from "../Component/AreaCharts";
const Home = () => {
    return (_jsxs("div", { className: "flex flex-col justify-between max-w-[1100px] w-fit h-fit ml-0 md:ml-[120px]  dark:bg-gray-900 text-black dark:text-white ", children: [_jsx("span", { className: "lg:hidden w-[100px] h-[30px] border-2 border-dashed ml-[-5px] mt-2 p-1 border-b border-gray-300 ", children: "Full Logo" }), _jsx("h1", { className: "md:text-2xl text-2xl font-semibold font-sans mt-1 mb-3 ", children: "Welcome! here's your Summary" }), _jsxs("div", { className: "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-5 text-center items-center ", children: [_jsx(CardItem, {}), _jsx(CardItemm, {}), _jsx(CardItems, {}), _jsx(CardItemx, {})] }), _jsx("span", { className: 'text-xl font-semibold  ', children: "Event Registration per month" }), _jsxs("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  sm:items-center sm:w-fit gap-4 py-2", children: [_jsx("div", { className: "col-span-1", children: _jsx(AreaCharts, {}) }), _jsx("div", { className: "col-span-1", children: _jsx(RightColumn, {}) })] }), _jsx("div", { className: " dark:bg-gray-900 text-black dark:text-white", children: _jsx(Downside, {}) })] }));
};
export default Home;
