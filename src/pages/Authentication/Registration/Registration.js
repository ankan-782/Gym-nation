import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/loginRegistration/registrationPhoto.jpg';
import './Registration.css';

const Registration = () => {
    const { setEmail, setPassword, setName, setError, setUser, setUserDetails, processRegistration, error, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';

    const getEmail = e => {
        setEmail(e.target.value);
    }

    const getPassword = e => {
        setPassword(e.target.value);
    }

    const getName = e => {
        setName(e.target.value);
    }


    //registration method (sign up)
    const handleRegistration = (e) => {
        // e.preventDefault();
        setIsLoading(true);
        processRegistration(e)
            .then(result => {
                setUserDetails();
                setUser(result.user);
                // console.log(result.user);
                history.push(redirect_url);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="registration-bg text-white py-5">
            <div className="container login-content d-lg-flex justify-content-between align-items-center">
                <div className="img-container border border-5 p-4">
                    <img src={loginImg} alt="" className="img-fluid border border-1" />
                </div>
                <div className="mt-5 mt-lg-0">
                    <h1 className="mb-5">Please Register</h1>
                    <form className="mb-5" onSubmit={(e) => { handleRegistration(e) }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label label-text">Name</label>
                            <input type="text" onBlur={getName} className="form-control input-bg py-3 rounded-0" id="exampleInputName" required />
                        </div>
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
                        <button type="submit" className="btn btn-outline-success rounded-0 mt-3">Register</button>
                        <div className="mt-3 text-danger">{error}</div>
                    </form>
                    <p>Already have an account? <NavLink className="text-decoration-none text-success text-decoration-underline" to="/login"> Please Login</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;