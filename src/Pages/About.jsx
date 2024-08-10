
// Imag
import Story from '../assets/IMG/about.jpg'
import Man1 from '../assets/IMG/man1.png'
import Man2 from '../assets/IMG/man2.png'
import Woman from '../assets/IMG/woman.png'
// Icon
import { FaLandmark, FaShippingFast } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { CiGift, CiTwitter, CiInstagram } from "react-icons/ci";
import { FaSackDollar, FaLinkedinIn, FaHeadphones, FaMoneyBillTransfer } from "react-icons/fa6";
// rect
import { useState } from "react";
//react router dom
import { Link } from 'react-router-dom';

export default function About() {
    // at hover 
    const [isHover, setIsHover] = useState(null);

    return (
        <div className='pb-10'>
            <div className="text-xs flex items-center gap-2 px-10 py-5 md:py-10 md:px-12 lg:px-20">
                <Link to="/" className="text-zinc-500">Home</Link>
                <span>/</span>
                <span>About</span>
            </div>
            <div className='space-y-10'>
                <div className='px-10 py-5 md:py-10 md:px-0 grid items-center gap-5 md:gap-16 md:grid-cols-2'>
                    <div className='space-y-10 md:pl-24'>
                        <h1 className='text-5xl font-medium'>Our Story</h1>
                        <div className='space-y-4 text-sm'>
                            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                    </div>
                    <img src={Story} alt="Img" />
                </div>
                <div className="px-10 py-5 md:py-10 md:px-12 lg:px-20 flex flex-wrap gap-5 text-center justify-center items-center">
                    <div key={1} className=' w-44 h-36 flex flex-col gap-1 justify-center items-center p-5 border rounded-md hover:bg-red-600 hover:text-white' onMouseEnter={() => { setIsHover(1); }} onMouseLeave={() => { setIsHover(null) }}>
                        <div className={`p-2  ${isHover === 1 ? "bg-white" : "bg-zinc-400 "} ${isHover === 1 ? "bg-opacity-30" : ""} rounded-full`}>
                            <div className={`p-2 bg-black ${isHover === 1 ? "bg-white" : "bg-black"}  rounded-full  ${isHover === 1 ? "text-black" : "text-white"}`}>
                                <FaLandmark />
                            </div>
                        </div>
                        <p className='font-medium '>10.5k</p>
                        <p className='text-[10px]'>Sallers active our site</p>
                    </div>
                    <div key={2} className=' w-44 h-36 flex flex-col gap-1 justify-center items-center p-5 border rounded-md hover:bg-red-600 hover:text-white' onMouseEnter={() => { setIsHover(2); }} onMouseLeave={() => { setIsHover(null) }}>
                        <div className={`p-2  ${isHover === 2 ? "bg-white" : "bg-zinc-400 "} ${isHover === 2 ? "bg-opacity-30" : ""} rounded-full`}>
                            <div className={`p-2 bg-black ${isHover === 2 ? "bg-white" : "bg-black"}  rounded-full  ${isHover === 2 ? "text-black" : "text-white"}`}>
                                <MdAttachMoney />
                            </div>
                        </div>
                        <p className='font-medium '>33k</p>
                        <p className='text-[10px]'>Mopnthly Produduct Sale</p>
                    </div>
                    <div key={3} className=' w-44 h-36 flex flex-col gap-1 justify-center items-center p-5 border rounded-md hover:bg-red-600 hover:text-white' onMouseEnter={() => { setIsHover(3); }} onMouseLeave={() => { setIsHover(null) }}>
                        <div className={`p-2  ${isHover === 3 ? "bg-white" : "bg-zinc-400 "} ${isHover === 3 ? "bg-opacity-30" : ""} rounded-full`}>
                            <div className={`p-2 bg-black ${isHover === 3 ? "bg-white" : "bg-black"}  rounded-full  ${isHover === 3 ? "text-black" : "text-white"}`}>
                                <CiGift />
                            </div>
                        </div>
                        <p className='font-medium '>45.5k</p>
                        <p className='text-[10px]'>Customer active in our sitee</p>
                    </div>
                    <div key={4} className=' w-44 h-36 flex flex-col gap-1 justify-center items-center p-5 border rounded-md hover:bg-red-600 hover:text-white' onMouseEnter={() => { setIsHover(4); }} onMouseLeave={() => { setIsHover(null) }}>
                        <div className={`p-2  ${isHover === 4 ? "bg-white" : "bg-zinc-400 "} ${isHover === 4 ? "bg-opacity-30" : ""} rounded-full`}>
                            <div className={`p-2 bg-black ${isHover === 4 ? "bg-white" : "bg-black"}  rounded-full  ${isHover === 4 ? "text-black" : "text-white"}`}>
                                <FaSackDollar />
                            </div>
                        </div>
                        <p className='font-medium '>25k</p>
                        <p className='text-[10px]'>Sallers active our site</p>
                    </div>

                </div>
                <div className="px-10 py-5 md:py-10 md:px-12 lg:px-20 flex justify-start md:justify-center overflow-x-scroll md:overflow-x-hidden items-center gap-5 md:gap-10">
                    <div>
                        <div className='bg-zinc-200 p-3 pb-0 h-48 w-36 flex items-end justify-center'>
                            <img src={Man1} alt="Tom Cruis" />
                        </div>
                        <div className='text-[9px] space-y-2'>
                            <div>
                                <p className='text-base font-medium'>Tom Cruise</p>
                                <p>Founder & Chairman</p>
                            </div>
                            <div className='flex gap-2'>
                                <CiTwitter />
                                <CiInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-zinc-200 p-3 pb-0 h-48 w-36 flex items-end justify-center'>
                            <img src={Woman} alt="Tom Cruis" />
                        </div>
                        <div className='text-[9px] space-y-2'>
                            <div>
                                <p className='text-base font-medium'>Emma Watson</p>
                                <p>Managing Director</p>
                            </div>
                            <div className='flex gap-2'>
                                <CiTwitter />
                                <CiInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-zinc-200 p-3 pb-0 h-48 w-36 flex items-end justify-center'>
                            <img src={Man2} alt="Tom Cruis" />
                        </div>
                        <div className='text-[9px] space-y-2'>
                            <div>
                                <p className='text-base font-medium'>Will Smith</p>
                                <p>Product Designer</p>
                            </div>
                            <div className='flex gap-2'>
                                <CiTwitter />
                                <CiInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-10 py-5 md:py-10 md:px-12 lg:px-20 flex items-center gap-5 md:gap-10 justify-center flex-wrap pb-5">
                    <div className='flex flex-col justify-center items-center text-center space-y-2'>
                        <div className='p-2 bg-zinc-300 rounded-full'><div className='p-2 bg-black text-white rounded-full '><FaShippingFast /></div>
                        </div>
                        <div>
                            <p className='text-xs font-medium'>FREE AND FAST DELIVERY</p>
                            <p className='text-[9px]'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center space-y-2'>
                        <div className='p-2 bg-zinc-300 rounded-full'><div className='p-2 bg-black text-white rounded-full '><FaHeadphones /></div>
                        </div>
                        <div>
                            <p className='text-xs font-medium'>24/7 CUSTOMER SERVICE</p>
                            <p className='text-[9px]'>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center space-y-2'>
                        <div className='p-2 bg-zinc-300 rounded-full'><div className='p-2 bg-black text-white rounded-full '><FaMoneyBillTransfer /></div>
                        </div>
                        <div>
                            <p className='text-xs font-medium'>MONEY BACK GUARANTEE</p>
                            <p className='text-[9px]'>We reurn money within 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}