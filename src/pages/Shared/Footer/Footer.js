import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/brand/GymLogo.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div id="big-footer" className="py-4">
                <div className="text-center mb-4">
                    <NavLink className="navbar-brand text-uppercase footer-brand fs-1" to="/home"><img src={logo} className="logo" alt="" width="80" height="80" />G y m N a t i o n</NavLink>
                </div>
                <hr className="container" />
                <div className="container px-lg-0 px-4">
                    <div className="row g-5 align-items-center py-3">
                        <div className="col-12 col-lg-8">
                            <div>
                                <p className="mb-5">We earned a reputation of being good at what we do. The longest running gym in Sylhet. Owned and operated by a personal trainer with over 25 years experience.</p>
                            </div>
                            <div className="mt-5">
                                <p><i className="fas fa-crosshairs me-3"></i>Fenchuganj, Sylhet, Bangladesh 3117</p>
                                <p><i className="far fa-envelope me-3"></i>royavijit782@gmail.com</p>
                                <p><i className="fas fa-phone-alt me-3"></i>01636456927</p>
                            </div>
                            <hr />
                            <div className="d-flex fs-3 social-links mt-4">
                                <a href="https://www.facebook.com/ankan.roy.50999" target="_blank" rel="noreferrer" className="me-3">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/ankan_782/" target="_blank" rel="noreferrer" className="me-3">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://twitter.com/AvijitAnkan" target="_blank" rel="noreferrer" className="me-3">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/avijit-roy-b6428b174/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                            <div>
                                <h5>Receive Email Updates</h5>
                                <div className="d-flex">
                                    <input type="text" placeholder="Your Email Address" className="form-control rounded-0" />
                                    <button className="btn btn-outline-success rounded-0">Join</button>
                                </div>
                            </div>
                            <div className="mt-5">
                                <NavLink to="/home" className="text-white text-decoration-none me-3">Home</NavLink>
                                <NavLink to="/services" className="text-white text-decoration-none me-3">Services</NavLink>
                                <NavLink to="/workouts" className="text-white text-decoration-none me-3">Workouts</NavLink>
                                <NavLink to="/trainers" className="text-white text-decoration-none">Trainers</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="small-footer text-center text-white py-3">
                <p className="m-0">Copyright © 1997-2022   ||   GYM-NATION   ||   Avijit Roy</p>
            </div>
        </>
    );
};

export default Footer;