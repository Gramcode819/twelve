import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BadgeDelta, Card, Metric, Text, Flex } from "@tremor/react";
import { CiCircleInfo } from "react-icons/ci";
const CardItemm = () => {
    return (_jsxs(Card, { className: "h-[100px] mt-[-5px]", decoration: "top", decorationColor: "indigo", children: [_jsxs(Flex, { justifyContent: "start", alignItems: "center", className: "", children: [_jsx(Text, { className: "text-xl font-semibold", children: "Active Speakers" }), " ", _jsx(CiCircleInfo, { className: "text-xs" })] }), _jsxs(Flex, { justifyContent: "start", children: [_jsx(Metric, { children: "25" }), "  ", _jsx(BadgeDelta, { className: "text-xs text-red-500", deltaType: "moderateIncrease", children: "-5.0%" })] })] }));
};
export default CardItemm;
