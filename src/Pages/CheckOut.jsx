// react
import { useState, useEffect } from 'react';

export default function CheckOut() {
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
    return (
        <div className="px-10 py-5 md:py-10 md:px-12 lg:px-20 grid gap-10 md:gap-24 md:grid-cols-2 items-center">
            <div className="space-y-5">
                <h2 className="text-3xl font-medium">Billing Details</h2>
                <div className="text-zinc-400 text-xs space-y-3">
                    <div className="grid gap-1">
                        <label>First Name<span className="text-red-400">*</span></label>
                        <input type="text" className="rounded-md py-1 px-5 bg-zinc-100 border-0" />
                    </div>
                    <div className="grid gap-1">
                        <label>Company Name</label>
                        <input type="text" className="rounded-md py-1 px-5 bg-zinc-100 border-0" />
                    </div>
                    <div className="grid gap-1">
                        <label>Street Address<span className="text-red-400">*</span></label>
                        <input type="text" className="rounded-md py-1 px-5 bg-zinc-100 border-0" />
                    </div>
                    <div className="grid gap-1">
                        <label>Apartment, floor, elc. (optional)</label>
                        <input type="text" className="rounded-md py-1 px-5 bg-zinc-100 border-0" />
                    </div>
                    <div className="grid gap-1">
                        <label>Town/City<span className="text-red-400">*</span></label>
                        <input type="text" className="rounded-md py-1 px-5 bg-zinc-100 border-0" />
                    </div>
                    <div className="grid gap-1">
                        <label>Phone Number<span className="text-red-400">*</span></label>
                        <input type="tel" className="rounded-md py-1 px-5 bg-zinc-100 border-0" />
                    </div>
                    <div className="grid gap-1">
                        <label>Email Address<span className="text-red-400">*</span></label>
                        <input type="email" className="rounded-md py-1 px-5 bg-zinc-100 border-0" />
                    </div>
                    <div className="space-x-2">
                        <input type="checkbox" name="" id="checkbox" className="rounded-sm" />
                        <label htmlFor="checkbox" className="text-black">Save this Billing Details for faster check-out next time</label>
                    </div>
                </div>
            </div>
            <div className='text-xs space-y-2 md:p-5'>
                <div className='space-y-2'>
                    {
                        Cart.map((product, i) => {
                            return (
                                <div key={i} className={`flex items-center justify-between`}>
                                    <div className='flex items-center gap-1 text-start'>
                                        <img src={product.images[0]} className='w-10 h-10' alt="" />
                                        {product.title}</div>
                                    <p>${product.price}</p>

                                </div>
                            )
                        })

                    }
                </div>
                <div>
                    <div className='flex items-center justify-between border-b border-black py-3'>
                        <p>Subtotal:</p>
                        <p>${Total}</p>
                    </div>
                    <div className='flex items-center justify-between border-b border-black py-3'>
                        <p>Shipping:</p>
                        <p>{Total > 140 ? "Free" : "$10"}</p>
                    </div>
                    <div className='flex items-center justify-between py-3'>
                        <p>Total:</p>
                        <p>${Total > 140 ? Total : `${Number((Total + 10).toFixed(3))}`}</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='flex gap-3 items-center'>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Bank</label>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Cash on delivery</label>
                    </div>
                </div>
                <div className='flex gap-2 items-center justify-center space-y-2 h-10'>
                    <input type="text" name="" id="" placeholder='Coupon Code' className='text-xs px-5 rounded-md h-full w-1/2 border-black' />
                    <button className='px-5 md:px-8 h-full w-1/2 border rounded-md bg-red-700 text-white'>Apply Coupon</button>
                </div>
                <button className='px-12 md:px-8 h-10  border rounded-md bg-red-700 text-white'>Place Order</button>
            </div>
        </div>
    )
}