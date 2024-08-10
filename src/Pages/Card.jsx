//react router dom
import { Link } from 'react-router-dom';
// react
import { useState, useEffect } from 'react';
// icons
import { IoIosClose } from "react-icons/io";

export default function Card() {
    // state
    const [Update, setUpdate] = useState(false)
    // product data
    const [Cart, setCart] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem("Cart")) || [];
        return savedCart;
    });
    const [Total, setTotal] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem("Cart")) || [];
        let total = 0;
        savedCart.forEach((product) => {
            total += product.price * product.count;
        });
        return Number(total.toFixed(3));
    })
    // handle count change
    const handleCountChange = (id, newCount) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) =>
                item.id === id ? { ...item, count: newCount } : item

            );
            //   localStorage.setItem("Cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };
    // handle remove item
    const handleRemoveItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(Cart));
    }, [Cart]);

    return (
        <div className="px-10 py-5 md:py-10 md:px-12 lg:px-20 space-y-10 pb-10">
            <div className="text-xs flex items-center gap-2">
                <Link to="/" className="text-zinc-500">Home</Link>
                <span>/</span>
                <span>Cart</span>
            </div>
            <div className='space-y-5'>
                <div className='grid grid-cols-4 px-3 shadow-md py-3 text-center text-[10px] md:text-sm lg:text-base'>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className='space-y-5'>
                    {
                        Cart.map((product, i) => {
                            return (
                                <div key={i} className={`grid grid-cols-4  items-center px-3 shadow-md py-3 text-center text-[7px] md:text-xs lg:text-sm relative`}>
                                    <div className='flex items-center gap-1 text-start'>
                                        <img src={product.images[0]} className='w-5 md:w-10 h-5 md:h-10' alt="" />
                                        {product.title}</div>
                                    <p>${product.price}</p>
                                    <div className='flex items-center justify-center space-x-2'>
                                        <input
                                            type="number"
                                            value={product.count}
                                            className='p-1 text-[7px] md:text-xs lg:text-sm w-10 md:w-16 h-5 md:h-10 text-center'
                                            min={1}
                                            max={product.stock}
                                            onChange={(e) => handleCountChange(product.id, parseInt(e.target.value))}
                                        />
                                    </div>
                                    <p>${Number((product.price * product.count).toFixed(3))}</p>
                                    <div onClick={() => {
                                        handleRemoveItem(product.id); 
                                        window.location.reload();
                                        setUpdate(false)
                                    }} className={`${Update ? "block" : "hidden"} absolute right-1 md:right-3 text-lg`}><IoIosClose /></div>
                                </div>
                            )
                        })

                    }
                </div>
                <div className='flex items-center justify-between  text-[10px] md:text-sm lg:text-base'>
                    <Link to="/" className='px-5 py-2 border rounded-md border-black'>Return To Shop</Link>
                    {
                        Update ? (
                            <button onClick={() => setUpdate(false)} className='px-5 py-2 border rounded-md border-black'>Cancel</button>
                        ) : (
                            <button onClick={() => setUpdate(true)} className='px-5 py-2 border rounded-md border-black'>Update Cart</button>
                        )
                    }
                </div>
            </div>
            <div className=' text-[10px] md:text-sm lg:text-base grid gap-10 md:grid-cols-2'>
                <div className='flex gap-2 items-center'>
                    <input type="text" name="" id="" placeholder='Coupon Code' className='  text-[10px] md:text-sm lg:text-base px-5 rounded-md h-7 md:h-11 border-black' />
                    <button className='px-5 md:px-8 h-7 md:h-11 border rounded-md bg-red-700 text-white'>Apply Coupon</button>
                </div>
                <div className='border border-black rounded-md p-5 space-y-2'>
                    <p className='font-medium text-sm md:text-base lg:text-lg'>Cart Total</p>
                    <div>
                        <div className='flex items-center justify-between border-b border-black py-2'>
                            <p>Subtotal:</p>
                            <p>${Total}</p>
                        </div>
                        <div className='flex items-center justify-between border-b border-black py-2'>
                            <p>Shipping:</p>
                            <p>{Total > 140 ? "Free" : "$10"}</p>
                        </div>
                        <div className='flex items-center justify-between py-2'>
                            <p>Total:</p>
                            <p>${Total > 140 ? Total : `${Number((Total + 10).toFixed(3))}`}</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link to="/CheckOut" className='px-5 py-2 border rounded-md bg-red-700 text-white'>Procees to checkout</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}