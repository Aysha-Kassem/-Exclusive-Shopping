// Pages
import Home from "./Pages/Home.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Card from "./Pages/Card.jsx";
import Liked from "./Pages/Liked.jsx";
import Product from "./Pages/Product.jsx";
import Login from "./Pages/Login.jsx";
import Beauty from "./Components/Category pages/Beauty.jsx";
import Fragrances from "./Components/Category pages/Fragrances.jsx";
import Furniture from "./Components/Category pages/Furniture.jsx";
import Groceries from "./Components/Category pages/Groceries.jsx";
import Error from "./Pages/Error.jsx";
import Contact from "./Pages/Contact.jsx";
import Account from "./Pages/Account.jsx";
import About from "./Pages/About.jsx";
import LogOut from "./Pages/LogOut.jsx";
import CheckOut from "./Pages/CheckOut.jsx";
// components
import Nav from "./Components/Nav.jsx"
import Footer from "./Components/Footer.jsx";
//react router dom
import { Route, Routes } from 'react-router-dom';
// CSS
import "./input.css"
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setuser } from './redux/user.js'
//react router dom
import { Link } from 'react-router-dom';
// ICONS
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiStar, CiLogout } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { FaBagShopping } from "react-icons/fa6";
export default function App() {
    let {openuser} = useSelector(state => state.user);
    let dispatch = useDispatch();
    return (
        <div className="relative z-50">
            <div >
                <Nav />
                <div>
                    {
                        openuser &&
                        <div className="absolute right-10 bg-black bg-opacity-65 rounded-md text-white text-[11px] py-3 px-5 space-y-2 z-50">
                            <Link to="/Account" onClick={() => { dispatch(setuser()); }} className="flex gap-3 items-center">
                                <FiUser />
                                <p>Manage My Account</p>
                            </Link>
                            <Link to="/Card" onClick={() => { dispatch(setuser()); }} className="flex gap-3 items-center">
                                <FaBagShopping />
                                <p>My Order</p>
                            </Link>
                            <div onClick={() => { dispatch(setuser()); }} className="flex gap-3 items-center">
                                <IoIosCloseCircleOutline />
                                <p>My Cancellations</p>
                            </div>
                            <Link to="/Liked" onClick={() => { dispatch(setuser()); }} className="flex gap-3 items-center">
                                <CiStar />
                                <p>My Reviews</p>
                            </Link>
                            <Link to="/LogOut" onClick={() => { dispatch(setuser()); }} className="flex gap-3 items-center">
                                <CiLogout />
                                <p>Logout</p>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <Routes className="-z-50">
                <Route path="/" element={<Home />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/LogOut" element={<LogOut />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/CheckOut" element={<CheckOut />} />
                <Route path="/About" element={<About />} />
                <Route path="/Account" element={<Account />} />
                <Route path="/Card" element={<Card />} />
                <Route path="/Liked" element={<Liked />} />
                <Route path="/Products/:id" element={<Product />} />
                <Route path="/Beauty" element={<Beauty />} />
                <Route path="/Fragrances" element={<Fragrances />} />
                <Route path="/Furniture" element={<Furniture />} />
                <Route path="/Groceries" element={<Groceries />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    )

}