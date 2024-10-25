import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BadgeDelta, Card, Metric, Text, Flex } from "@tremor/react";
import { CiCircleInfo } from "react-icons/ci";
const CardItem = () => {
    return (_jsxs(Card, { className: "h-[100px] mt-[-5px]", decoration: "top", decorationColor: "indigo", children: [_jsxs(Flex, { justifyContent: "start", alignItems: "center", className: "gap-2", children: [_jsx(Text, { className: "text-xl font-semibold", children: "Total Events" }), " ", _jsx(CiCircleInfo, { className: "text-xs" })] }), _jsxs(Flex, { justifyContent: "start", children: [_jsx(Metric, { children: "100,000" }), "  ", _jsx(BadgeDelta, { className: "text-xs", deltaType: "moderateIncrease", children: "+5.0%" })] })] }));
};
export default CardItem;
