import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/loginRegistration/registrationPhoto.jpg';
import './Registration.css';

const Registration = () => {
    const { processRegistration, authError } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const getEmail = e => {
        setEmail(e.target.value);
    };

    const getPassword = e => {
        setPassword(e.target.value);
    };

    const getName = e => {
        setName(e.target.value);
    };

    //registration method (sign up)
    const handleRegistration = (e) => {
        e.preventDefault();
        if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}/.test(password)) {
            setError('Password should be at least of 8 characters and must have one uppercase letter, one digits, one lowercase letter');
            return;
        }
        //admin password use admin0
        processRegistration(email, password, name, history);
    };

    return (
        <div id='registration' className="registration-bg text-white d-flex justify-content-center align-items-center">
            <div className="container px-lg-0 px-4 py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-12 col-lg-6">
                        <img src={loginImg} alt="" className="img-fluid border border-2" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1 className="mb-3">Please Register</h1>
                        <form className="mb-3" onSubmit={(e) => { handleRegistration(e); }}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label label-text">Name</label>
                                <input type="text" onBlur={getName} className="form-control text-white input-bg py-3 rounded-0" id="exampleInputName" required />
                            </div>
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
                            <button type="submit" className="btn btn-outline-success rounded-0 mt-3">Register</button>
                            <div className="mt-3 text-danger">{error}</div>
                            <div className="mt-3 text-danger">{authError}</div>
                        </form>
                        <p>Already have an account? <NavLink className="text-decoration-none text-success text-decoration-underline" to="/login"> Please Login</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;