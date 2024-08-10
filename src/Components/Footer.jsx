
// icon
import { IoSendOutline } from "react-icons/io5";


export default function Footer() {
    return (
        <div className="mt-10 px-10 py-5 md:py-10 md:px-12 lg:px-20 bg-black text-white text-xs">
            <div className="space-y-5">
                <div className=" grid gap-10 grid-cols-2 md:grid-cols-4">
                    <div className="space-y-2">
                        <h6 className="text-base font-medium">Exclusive</h6>
                        <p className="text-sm font-medium">Subscribe</p>
                        <p>Get 10% off your first order</p>
                        <div className="flex items-center gap-2 p-2 border-white border w-9/12">
                            <input type="email" placeholder="Enter your email" className="bg-inherit border-0 py-0 px-5 text-[9px] md:text-xs w-full" />
                            <IoSendOutline className="text-xl" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h6 className="text-base font-medium">Support</h6>
                        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className="text-base font-medium">Account</h6>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className="text-base font-medium">Quick Link</h6>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="flex justify-center gap-2">
                    <p className="text-zinc-100 text-opacity-30 text-xs">&copy; 2023 Exclusive. All rights reserved.</p>
                </div>

            </div>
        </div>
    )
}