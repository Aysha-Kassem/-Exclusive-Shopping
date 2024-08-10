// ICONS
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch, CiHeart, } from "react-icons/ci";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { HiOutlineViewList } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
//react router dom
import { Link } from 'react-router-dom';
// React
import { useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setuser, setlist } from '../redux/user'
export default function Nav() {
    let dispatch = useDispatch();
    let { openuser, openlist } = useSelector(state => state.user);
    return (
        <div>
            <div className="text-[6px] md:text-xs lg:text-sm flex justify-around bg-black text-white p-3">
                <div className="flex gap-2 text-center">
                    <div>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
                    <div className="font-bold">ShopNow <hr /></div>
                </div>
                <div className="flex gap-1 items-center">
                    <div>English</div>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className="flex justify-between items-center text-xs md:text-sm px-10 md:px-12 lg:px-20 py-2">
                <Link to="/" className="font-bold text-base md:text-lg">Exclusive</Link>
                <div className="gap-7 hidden md:flex">
                    <Link to="/" className="hover:border-b-2 border-zinc-200">Home</Link>
                    <Link to="/Contact" className="hover:border-b-2 border-zinc-200">Contact</Link>
                    <Link to="/About" className="hover:border-b-2 border-zinc-200">About</Link>
                    {
                        localStorage.getItem("email") ? (
                            <div></div>
                        ) : (
                            <Link to="/SignUp" onClick={() => { dispatch(setlist) }} className="hover:border-b-2 border-zinc-200">Sign Up</Link>
                        )
                    }
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-zinc-200 flex items-center gap-2 rounded-sm px-2 ">
                        <input className="bg-zinc-200 text-[7px] w-1/2 md:w-28 py-0 px-2 border-0" type="search" name="" id="" placeholder="What are you looking for?" />
                        <CiSearch />
                    </div>
                    <div className="relative">
                        <Link to="/Liked">
                            <CiHeart />
                        </Link>
                        <div className="w-2 h-2 flex justify-center items-center bg-red-900 text-white text-[5px] rounded-full absolute -top-1 -right-1">{
                            localStorage.getItem("Favorite") ? (JSON.parse(localStorage.getItem("Favorite")).length) : "0"
                        }</div>
                    </div>
                    <div className="relative">
                        <Link to="/Card">
                            <IoCartOutline />
                        </Link>
                        <div className="w-2 h-2 flex justify-center items-center bg-red-900 text-white text-[5px] rounded-full absolute -top-1 -right-1">{
                            localStorage.getItem("Cart") ? (JSON.parse(localStorage.getItem("Cart")).length) : "0"
                        }</div>
                    </div>
                    <div>
                        {
                            localStorage.getItem("email") ? (
                                <div id="user" className={`rounded-full p-1 ${openuser ? "bg-red-600" : ""} ${openuser ? "text-white" : "text-black"}`} onClick={() => { dispatch(setuser()) }}><FiUser /></div>
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                    <div>
                        {
                            openlist ? (
                                <IoCloseOutline className="md:hidden" onClick={() => { dispatch(setlist()) }} />
                            ) : (
                                <HiOutlineViewList className="md:hidden" onClick={() => { dispatch(setlist()) }} />
                            )
                        }
                    </div>
                </div>
            </div>

            {
                openlist &&
                <div className="relative bg-white py-5 grid justify-center items-center text-center gap-2 text-sm md:hidden border-b">
                    <Link to="/" onClick={() => { dispatch(setlist()) }} className="hover:border-b-2 border-zinc-200">Home</Link>
                    <Link to="/Contact" onClick={() => { dispatch(setlist()) }} className="hover:border-b-2 border-zinc-200">Contact</Link>
                    <Link to="/About" onClick={() => { dispatch(setlist()) }} className="hover:border-b-2 border-zinc-200">About</Link>
                    {
                        localStorage.getItem("email") ? (
                            <div></div>
                        ) : (
                            <Link to="/SignUp" onClick={() => { dispatch(setlist()) }} className="hover:border-b-2 border-zinc-200">Sign Up</Link>
                        )
                    }
                </div>
            }
            <hr />
        </div>
    )
}