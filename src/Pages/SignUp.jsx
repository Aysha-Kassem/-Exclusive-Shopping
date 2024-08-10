// IMG
import Img from '../assets/IMG/signUp.jpg'
// icon
import { FaGoogle } from "react-icons/fa";
// React
import { useState, useMemo } from 'react';
// react router dom
import { Link, useNavigate } from "react-router-dom";
// Redux Store
import { useDispatch } from 'react-redux';
import { siginUp } from '../redux/user';
// google
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


export default function SignUp() {
    // State
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    // Ready to submit
    const [ready, setReady] = useState(false);
    // Validate
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [phoneValid, setphoneValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

    // Redux Action for User Data
    const dispatch = useDispatch();
    // react-router-dom
    const navigate = useNavigate();

    // Validation
    const validateName = useMemo(() => {
        setNameValid(false);
        if (name) {
            if (name.trim() === '') {
                setNameValid('Please enter name.')
            }
            else if (!/^[a-zA-Z _-]{3,16}$/.test(name)) {
                setNameValid('Name is not valid.')
            }
            else {
                setNameValid(true);
            }
        }
    }, [name])
    const validateEmail = useMemo(() => {
        setEmailValid(false);
        if (email) {
            if (email.trim() === '') {
                setEmailValid('Please enter email.')
            }
            else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailValid('Invalid email format.')
            }
            else {
                setEmailValid(true);
            }
        }
    }, [email])
    const validatePhone = useMemo(() => {
        setphoneValid(false);
        if (phone) {
            if (!/^01+[0125]+[\d]{8}$/.test(phone)) {
                setphoneValid('Invalid phone number format.');
            }
            else {
                setphoneValid(true);
            }
        }
    }, [phone])
    const validatePassword = useMemo(() => {
        setPasswordValid(false);
        if (password) {
            if (password.length < 8) {
                setPasswordValid('Password must be at least 8 characters long.');
            }
            else {
                setPasswordValid(true);
            }
        }
    }, [password])
    const validateConfirmPassword = useMemo(() => {
        setConfirmPasswordValid(false);
        if (confirmPassword) {
            if (confirmPassword !== password) {
                setConfirmPasswordValid('Passwords do not match.')
            }
            else {
                setConfirmPasswordValid(true);
            }
        }
    }, [password, confirmPassword])
    // Submit Form
    const submit = () => {
        setLoading(true);
        setReady(false)
        // Validation
        if (nameValid && emailValid && phoneValid && passwordValid && confirmPasswordValid) {
            setLoading(false);
            setReady(true);

            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('phone', phone)
            localStorage.setItem('password', password)

            alert('Submit successful');
            navigate('/Login'); // Navigate to login page

            // Reset Validation State
            // setNameValid(false);
            // setEmailValid(false);
            // setphoneValid(false);
            // setPasswordValid(false);
            // setConfirmPasswordValid(false);
            // Reset Form State
            // setName('');
            // setEmail('');
            // setPhone('');
            // setPassword('');
            // setconfirmPassword('');
            return;
        }
        alert("Submit failed: Validation errors")
        setLoading(false);
    };
    // Loading State
    const loadingText = loading ? 'Loading...' : 'Submit';

    const { jwtDecode } = require('jwt-decode');
    const handleSuccess = (response) => {
        // Decode the token to get user info
        const userInfo = jwtDecode(response.credential);
        
        // Save user info in localStorage
        localStorage.setItem('user', JSON.stringify(userInfo));

        console.log('User information saved to localStorage:', userInfo);
    };

    const handleError = () => {
        console.log('Google Sign-In failed');
    };



    return (
        <div className='py-5 md:py-12 grid md:grid-cols-2 gap-5 justify-center items-center '>
            <img src={Img} alt="SignUp" />
            <div className='px-5 md:px-20 grid gap-5 '>
                <div className='grid gap-2'>
                    <h1 className='text-3xl font-bold'>Create an account</h1>
                    <p className='text-sm'>Enter your details below</p>
                </div>
                {/* form */}
                <form className='grid gap-2'>
                    {/* name */}
                    <div>
                        <input className='border-0 w-full' type="text" placeholder="Name" minLength='10' maxLength='30' onClick={(event) => setName(event.target.value)} />
                        <hr />
                        <div className='text-[10px] text-red-800'>{nameValid}</div>
                    </div>
                    {/* email */}
                    <div>
                        <input className='border-0 w-full' type="email" placeholder="Email" onClick={(event) => setEmail(event.target.value)} />
                        <hr />
                        <div className='text-[10px] text-red-800'>{emailValid}</div>
                    </div>
                    {/* phone */}
                    <div>
                        <input className='border-0 w-full' type="tel" placeholder="Phone Number" maxLength='11' onClick={(event) => setPhone(event.target.value)} />
                        <hr />
                        <div className='text-[10px] text-red-800'>{phoneValid}</div>
                    </div>
                    {/* password */}
                    <div>
                        <input className='border-0 w-full' type="password" placeholder="password" onClick={(event) => setPassword(event.target.value)} />
                        <hr />
                        <div className='text-[10px] text-red-800'>{passwordValid}</div>
                    </div>
                    {/* confirm password */}
                    <div>
                        <input className='border-0 w-full' type="password" placeholder="Confirm Password" onClick={(event) => setconfirmPassword(event.target.value)} />
                        <hr />
                        <div className='text-[10px] text-red-800'>{confirmPasswordValid}</div>
                    </div>
                </form>
                <div className='grid gap-5'>
                    <button onClick={submit} className='border p-3 text-white bg-red-600 rounded-md flex items-center justify-center'>Create Account</button>
                    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                        <div className="App space-y-1">
                            <h1 className='text-sm'>Sign Up with Google</h1>
                            <GoogleLogin
                                onSuccess={handleSuccess}
                                onError={handleError}
                            />
                        </div>
                    </GoogleOAuthProvider>
                </div>
                <div className='text-center flex gap-2 justify-center'>
                    <p>Already have an account?</p>
                    <p><Link to="/Login">Login <hr /></Link></p>
                </div>

            </div>
            {/* Loading Text */}
            {loading && <div className='text-center text-3xl'>{loadingText}</div>}
        </div>
    )
}