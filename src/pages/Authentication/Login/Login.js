import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/loginRegistration/loginPhoto.jpg';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, processLogin, error, setEmail, setPassword, setError, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const getEmail = e => {
        setEmail(e.target.value);
    }

    const getPassword = e => {
        setPassword(e.target.value);
    }


    //login method (sign in)
    const handleCustomLogin = (e) => {
        // e.preventDefault();
        setIsLoading(true);
        processLogin(e)
            .then(result => {
                // setUser(result.user);
                history.push(redirect_url);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="login-bg text-white py-5">
            <div className="container login-content d-lg-flex justify-content-between align-items-center">
                <div className="img-container border border-5 p-4">
                    <img src={loginImg} alt="" className="img-fluid border border-1" />
                </div>
                <div className="mt-5 mt-lg-0">
                    <h1 className="mb-5">Please Login</h1>
                    <form className="mb-5" onSubmit={(e) => { handleCustomLogin(e) }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email address</label>
                            <input type="email" onBlur={getEmail} className="form-control input-bg py-3 rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text text-white-50">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword5" className="form-label fs-5">Password</label>
                            <input type="password" onBlur={getPassword} id="inputPassword5" className="form-control input-bg py-3 rounded-0" aria-describedby="passwordHelpBlock" required />
                            <div id="passwordHelpBlock" className="form-text text-white-50">
                                Your password must be 8-20 characters long, contain letters and numbers.
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-success rounded-0 mt-3">Login</button>
                        <div className="mt-3 text-danger">{error}</div>
                    </form>
                    <p>New User? <NavLink className="text-decoration-none text-success text-decoration-underline" to="/register"> Create Account</NavLink></p>
                    <button onClick={handleGoogleLogin} className="btn btn-outline-success rounded-0 mt-3"><i className="fab fa-google me-3"></i>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;