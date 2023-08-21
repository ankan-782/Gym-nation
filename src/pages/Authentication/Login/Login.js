import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/loginRegistration/loginPhoto.jpg';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, processLogin, authError } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();

    const getEmail = e => {
        setEmail(e.target.value);
    };

    const getPassword = e => {
        setPassword(e.target.value);
    };

    // Google login
    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    };


    //login method (sign in)
    const handleCustomLogin = (e) => {
        e.preventDefault();
        processLogin(email, password, location, history);
    };

    return (
        <div id='login' className="login-bg text-white d-flex justify-content-center align-items-center">
            <div className="container px-lg-0 px-4 py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-12 col-lg-6">
                        <img src={loginImg} alt="" className="img-fluid border border-2" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1 className="mb-4">Please Login</h1>
                        <form className="mb-4" onSubmit={(e) => { handleCustomLogin(e); }}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email address</label>
                                <input type="email" onBlur={getEmail} className="form-control text-white input-bg py-3 rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text text-white-50">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword5" className="form-label fs-5">Password</label>
                                <input type="password" onBlur={getPassword} id="inputPassword5" className="form-control text-white input-bg py-3 rounded-0" aria-describedby="passwordHelpBlock" required />
                                <div id="passwordHelpBlock" className="form-text text-white-50">
                                    Your password must be 8-20 characters long, contain letters and numbers.
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-success rounded-0 mt-3">Login</button>
                            <div className="mt-3 text-danger">{authError}</div>
                        </form>
                        <p>New User? <NavLink className="text-decoration-none text-success text-decoration-underline" to="/register"> Create Account</NavLink></p>
                        <button onClick={handleGoogleLogin} className="btn btn-outline-success rounded-0 mt-3"><i className="fab fa-google me-3"></i>Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;