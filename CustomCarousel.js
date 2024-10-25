import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomCarousel = ({ images }) => {
    // Custom next and previous buttons
    const NextArrow = ({ onClick }) => (_jsx("button", { onClick: onClick, className: "absolute top-1/2 right-4 transform -translate-y-1/2 z-10 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none", children: _jsx(FaArrowRight, {}) }));
    const PrevArrow = ({ onClick }) => (_jsx("button", { onClick: onClick, className: "absolute top-1/2 left-4 transform -translate-y-1/2 z-10 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none", children: _jsx(FaArrowLeft, {}) }));
    // Slick slider settings
    const settings = {
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // cssEase: "ease-in-out",
        // dotsClass: "custom-dots",
        // draggable: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: _jsx(NextArrow, {}),
        prevArrow: _jsx(PrevArrow, {}),
    };
    return (_jsx("div", { className: "relative", children: _jsx(Slider, { ...settings, children: images.map((image, index) => (_jsxs("div", { children: [_jsx("img", { src: image, alt: `Slide ${index + 1}`, className: "w-full h-[350px] object-cover" }), _jsxs("div", { className: "min-w-[300px] flex flex-col z-10 ml-[20px] absolute bottom-[40px]", children: [_jsx("h1", { className: "text-sm font-semibold", children: "Latest New & Updates" }), _jsx("p", { className: "text-xs mt-2 w-[350px]", children: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. sed velit nisi, fermentum erat.Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus." })] })] }, index))) }) }));
};
export default CustomCarousel;
