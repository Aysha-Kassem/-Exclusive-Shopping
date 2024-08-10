// Img
import newproduct from "../assets/IMG/new.png"
// components
import Header from "../Components/Header.jsx"
import FlashSales from "../Components/FlashSales.jsx"
import Category from "../Components/Category.jsx";
import BestSelling from "../Components/BestSelling.jsx";
import OurProducts from "../Components/OurProducts.jsx";
// React
import { useState, useEffect } from 'react';
// icon
import { FaArrowUp, FaShippingFast } from "react-icons/fa";
import { FaHeadphones, FaMoneyBillTransfer } from "react-icons/fa6";


export default function Home() {
    // State
    const [Favorite, setFavorite] = useState([]);
    const [Cart, setCart] = useState([]);

    // Dispatch
    // const dispatach = useDispatch();

    // Fetch products from API
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                const productsWithCount = data.products.map((product) => ({
                    ...product,
                    count: 1,
                }));
                localStorage.setItem("products", JSON.stringify(productsWithCount));
            });
    }, []);

    if (!localStorage.getItem("products")) {
        if (!sessionStorage.getItem("reloaded")) {
            sessionStorage.setItem("reloaded", "true");
            window.location.reload();
        } else {
            console.log("الصفحة تم إعادة تحميلها بالفعل.");
        }
    }


    // ${window.scrollY > 10 ? "fixed" : "hidden"}
    const [isVisible, setIsVisible] = useState(false);
    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div>
            <div>
                <Header />
                <FlashSales />
                <div className="px-10 md:px-12 lg:px-20"><hr /></div>
                <Category />
                <div className="px-10 md:px-12 lg:px-20"><hr /></div>
                <BestSelling />
                <div className="p-10 md:py-10 md:px-12 lg:px-20 bg-zinc-800 m-10 flex justify-around">
                    <div className="text-white flex flex-col gap-5 justify-center">
                        <p className="text-[9px] md:text-xs text-red-400">Commercial</p>
                        <div>
                            <p className='text-3xl md:text-5xl font-medium'>NEW ARRIVALS</p>
                            <p className='text-sm md:text-lg'>Discover our latest products</p>
                        </div>
                    </div>
                    <img src={newproduct} alt="" width={200} />
                </div>
                <OurProducts />
            </div>
            <div className="px-10 py-5 md:py-10 md:px-12 lg:px-20 flex items-center gap-5 md:gap-10 justify-center flex-wrap">
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
            <button onClick={scrollToTop} className={` ${isVisible ? 'fixed' : 'hidden'}  bottom-5 right-5 text-white bg-black p-2 rounded-full`}><FaArrowUp />
            </button>
        </div>
    )
}