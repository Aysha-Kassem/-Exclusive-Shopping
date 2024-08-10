// Icon
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
// IMG
import Carousel1 from '../assets/IMG/Carousel1.png'
import Carousel2 from '../assets/IMG/Carousel2.png'
import Carousel3 from '../assets/IMG/Carousel3.png'
import Carousel4 from '../assets/IMG/Carousel4.png'
// React
import { useState, useEffect } from 'react';
//react router dom
import { Link } from 'react-router-dom';
export default function Header() {
    const [carousel, setCarousel] = useState(0);

    // Function to handle dot click
    const handleDotClick = (index) => {
        setCarousel(index);
    };

    // Auto-slide effect every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCarousel((prevCarousel) => (prevCarousel + 1) % 4); // Cycle through the carousel items
        }, 10000); // 10 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="grid gap-2 md:flex px-10 py-5 md:py-10 md:px-12 lg:px-20">
            <div className="text-xs lg:text-sm py-2 grid gap-2 md:w-5/12 md:border-r-2 md:pr-10">
                <Link to="/Beauty" className="flex justify-between items-center">
                    <p>Beauty</p>
                    <IoIosArrowForward />
                </Link>
                <Link to="/Fragrances" className="flex justify-between items-center">
                    <p>Fragrances</p>
                    <IoIosArrowForward />
                </Link>
                <Link to="/Furniture" className="flex justify-between items-center">
                    <p>Furniture</p>
                    <IoIosArrowForward />
                </Link>
                <Link to="/Groceries" className="flex justify-between items-center">
                    <p>Groceries</p>
                    <IoIosArrowForward />
                </Link>
            </div>

            <div className="relative md:mx-5 md:w-10/12">
                {/* Carousel */}
                <div>
                    {carousel === 0 && (
                        <div className="bg-zinc-800 py-10 text-white flex justify-between items-center p-5 h-36">
                            <div className="grid gap-1">
                                <h1 className="text-xl md:text-3xl font-medium">Discounts up to 20%</h1>
                                <div className="text-[7px] md:text-xs flex gap-1 items-center">
                                    <a href="#flash">Shopping Now <hr className="mx-2" /></a>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div>
                                <img src={Carousel1} alt="Carousel" width={100} />
                            </div>
                        </div>
                    )}
                    {carousel === 1 && (
                        <div className="bg-zinc-800 py-10 text-white flex justify-between items-center p-5 h-36">
                            <div className="grid gap-1">
                                <h1 className="text-xl md:text-3xl font-medium">Browse by Category</h1>
                                <div className="text-[7px] md:text-xs flex gap-1 items-center">
                                    <a href="#Category">Shopping Now <hr className="mx-2" /></a>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div>
                                <img src={Carousel2} alt="Carousel" width={100} />
                            </div>
                        </div>
                    )}
                    {carousel === 2 && (
                        <div className="bg-zinc-800 py-10 text-white flex justify-between items-center p-5 h-36">
                            <div className="grid gap-1">
                                <h1 className="text-xl md:text-3xl font-medium">Best Selling Products</h1>
                                <div className="text-[7px] md:text-xs flex gap-1 items-center">
                                    <a href="#BestSelling">Shopping Now <hr className="mx-2" /></a>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div>
                                <img src={Carousel3} alt="Carousel" width={100} />
                            </div>
                        </div>
                    )}
                    {carousel === 3 && (
                        <div className="bg-zinc-800 py-10 text-white flex justify-between items-center p-5 h-36">
                            <div className="grid gap-1">
                                <h1 className="text-xl md:text-3xl font-medium">Explore Our Products</h1>
                                <div className="text-[7px] md:text-xs flex gap-1 items-center">
                                    <a href="#OurProducts">Shopping Now <hr className="mx-2" /></a>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div>
                                <img src={Carousel4} alt="Carousel" width={100} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Dot navigation */}
                <div className="flex gap-2 absolute bottom-2 right-1/2 transform translate-x-1/2">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2 h-2 rounded-full ${carousel === index ? 'bg-red-400' : 'bg-zinc-500'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
