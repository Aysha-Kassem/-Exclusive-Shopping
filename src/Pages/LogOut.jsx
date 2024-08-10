
//react router dom
import { Link, useNavigate  } from "react-router-dom";
// Redux Store
import { useDispatch } from'react-redux';
import { logout } from '../redux/user';
export default function LogOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.clear();
        dispatch(logout());
        navigate("/");
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-10 px-10 py-5 md:py-10 md:px-12 lg:px-20 text-center">
            <p className="font-medium text-4xl">Are you sure you want to log out?</p>
            <div className="flex gap-10 text-lg">
                <button onClick={handleLogOut} className="bg-red-800 text-white rounded-md py-1 px-7">Log Out</button>
                <Link to="/" className="rounded-md py-1 px-7">Cancel</Link>
            </div>
        </div>
    )
}