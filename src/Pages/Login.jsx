// IMG
import Img from '../assets/IMG/signUp.jpg'
// React
import { useState, useMemo } from 'react';
// react router dom
import { useNavigate } from "react-router-dom";
// Redux Store
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/user';


export default function Login() {
    // State
    const [emailtest, setEmailtest] = useState('');
    const [passwordtest, setPasswordtest] = useState('');
    // Validate
    const [emailtestValid, setEmailtestValid] = useState(false);
    const [passwordtestValid, setPasswordtestValid] = useState(false);
    // Ready to submit
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    // Redux Action for User Data
    const dispatach = useDispatch();
    // react-router-dom
    const navigate = useNavigate();

    // Validation
    const validateEmail = useMemo(() => {
        setEmailtestValid(false);
        if (emailtest) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailtest)) {
                setEmailtestValid('Invalid email format.');
            }
            else if (emailtest !== email) {
                setEmailtestValid("Email don't found");
            }
            else {
                setEmailtestValid(true);
            }
        }
    }, [emailtest])
    const validatePassword = useMemo(() => {
        setPasswordtestValid(false);
        if (passwordtest) {
            if (passwordtest.length < 8) {
                setPasswordtestValid("Password must be at least 8 characters long.")
            }
            else if (passwordtest !== password) {
                setPasswordtestValid("password don't found");
            }
            else {
                setPasswordtestValid(true);
            }
        }
    }, [passwordtest])
    // Submit Form
    const submit = async () => {
        setLoading(true);
        setReady(false);
        if (emailtestValid && emailtestValid) {
            setReady(true);
            setLoading(false)
            // Redux Action for User Data
            dispatach(login());        
            // Reset validation state
            // setEmailtest('');
            // setPasswordtest('');
            // // Reset Form state
            // setEmailtestValid('');
            // setPasswordtestValid('');
            // Redirect to Home Page
            navigate('/');
            return;
        }
        alert("Submit failed: Validation errors")
        setLoading(false);
    }

    // Loading State
    const loadingText = loading ? 'Loading...' : 'Submit';



    return (
        <div className='py-5 md:py-12 grid md:grid-cols-2 gap-5 justify-center items-center'>
            <img src={Img} alt="SignUp" />
            <div className='px-5 md:px-20 grid gap-5'>
                <div className='grid gap-2'>
                    <h1 className='text-3xl font-bold'>Log in to Exclusive</h1>
                    <p className='text-sm'>Enter your details below</p>
                </div>
                {/* form */}
                <form className='grid gap-2'>
                    {/* email */}
                    <div>
                        <input className='border-0 w-full' type="email" placeholder="Email" onClick={(event) => setEmailtest(event.target.value)} />
                        <hr />
                        <div className='text-[10px] text-red-800'>{emailtestValid}</div>
                    </div>
                    {/* password */}
                    <div>
                        <input className='border-0 w-full' type="password" placeholder="password" onClick={(event) => setPasswordtest(event.target.value)} />
                        <hr />
                        <div className='text-[10px] text-red-800'>{passwordtestValid}</div>
                    </div>
                </form>
                <div className='flex items-center justify-between'>
                    <button onClick={submit} className='border p-3 text-white bg-red-600 px-14 rounded-md'>Log in</button>
                    <p className='text-red-600'>Forget Password?</p>
                </div>
                {/* Loading Text */}
                {loading && <div className='text-center text-3xl'>{loadingText}</div>}
            </div>

        </div>
    )
}