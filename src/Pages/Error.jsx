
// react router dom
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="flex flex-col justify-center items-center text-center h-screen gap-10 px-10 py-5 md:py-10 md:px-12 lg:px-20"> 
            <div className="space-y-4">
                <h1 className="text-4xl md:text-8xl lg:text-9xl">404 Not Found</h1>
                <p className="text-[8px] md:text-xl">You visited page not found. You may go home Page.</p>
            </div>
            <Link to="/" className="bg-red-600 text-white rounded-md px-5 md:px-10 md:py-5 py-3 text-[8px] md:text-xl">Black to Home Page</Link>
        </div>
    )
}