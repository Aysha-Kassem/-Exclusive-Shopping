// react router dom
import { Link } from "react-router-dom";
// ICON
import { GiLipstick } from "react-icons/gi";
import { GiFragrance } from "react-icons/gi";
import { FaCouch } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";

export default function Category() {
    return (
        <div id="Category" className="space-y-5 px-10 py-5 md:py-10 md:px-12 lg:px-20">
            <div className="space-y-1">
                <div className="flex gap-3 items-center">
                    <div className="bg-red-700 w-4 h-7 rounded-sm"></div>
                    <p className="text-red-700 text-xs font-medium">Categories</p>
                </div>
                <p className="text-2xl font-medium">Browse by Category</p>
            </div>
            <div className="flex gap-5 overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
                <Link to="/Beauty" className="flex flex-col justify-center items-center gap-2 p-5 border rounded-md hover:bg-red-600 hover:text-white">
                    <GiLipstick className="text-3xl"/>
                    <p>Beauty</p>
                </Link>
                <Link to="/Fragrances" className="flex flex-col justify-center items-center gap-2 p-5 border rounded-md hover:bg-red-600 hover:text-white">
                    <GiFragrance className="text-3xl"/>
                    <p>Fragrances</p>
                </Link>
                <Link to="/Furniture" className="flex flex-col justify-center items-center gap-2 p-5 border rounded-md hover:bg-red-600 hover:text-white">
                    <FaCouch className="text-3xl"/>
                    <p>Furniture</p>
                </Link>
                <Link to="/Groceries" className="flex flex-col justify-center items-center gap-2 p-5 border rounded-md hover:bg-red-600 hover:text-white">
                    <MdLocalGroceryStore  className="text-3xl"/>
                    <p>Groceries</p>
                </Link>
            
            </div>
        </div>
    )
}