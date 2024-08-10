// Component
import Profile from "../Components/Profile"
// React
import { useState } from "react"
//react router dom
import { Link } from 'react-router-dom';

export default function Account() {
    let name = "";
    if (localStorage.getItem("name")) {
        name = localStorage.getItem("name");
    }
    // State
    const [pag, setPage] = useState(1)
    return (
        <div className="px-10 py-5 md:py-10 md:px-12 lg:px-20 space-y-10 pb-10">
            <div className="text-xs flex items-center justify-between">
                <div className="flex gap-2">
                    <Link to="/" className="text-zinc-500">Home</Link>
                    <span>/</span>
                    <span>My Account</span>
                </div>
                <div className=" flex gap-1">Welcome! <span className="text-red-700">{name}</span></div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                <div className="space-y-5 md:w-1/4">
                    <div className="space-y-3">
                        <h2 className="font-medium">Manage My Account</h2>
                        <div className="pl-10 text-start grid justify-items-start">
                            <button onClick={() => setPage(1)} className="text-zinc-500 text-sm">My Profile</button>
                            <button onClick={() => setPage(2)} className="text-zinc-500 text-sm">Address Book</button>
                            <button onClick={() => setPage(3)} className="text-zinc-500 text-sm">My Payment Options</button>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h2 className="font-medium">My Orders</h2>
                        <div className="pl-10 space-y-1">
                            <p className="text-zinc-500 text-sm">My Returns</p>
                            <p className="text-zinc-500 text-sm">My Cancellations</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium">My WishList</h2>
                    </div>
                </div>
                <div className="w-full">
                    {
                        pag === 1 &&
                        <Profile />
                    }

                </div>
            </div>

        </div>
    )
}