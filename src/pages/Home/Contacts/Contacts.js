import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Contacts.css';

const Contacts = () => {
    const { user } = useAuth();
    return (
        <div className="contact-us-bg">
            <div className="contact-us-content">
                <div className="container px-lg-0 px-4">
                    <iframe
                        title="gmap"
                        className="mb-5"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.9876427498875!2d91.93435767528636!3d24.658553678061605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751a452e43ac465%3A0x2dd52e5a5b688faf!2sShahjalal%20Fertilizer%20Company%20Ltd.(SFCL)!5e0!3m2!1sen!2sbd!4v1692620178023!5m2!1sen!2sbd"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="row g-5 align-items-center text-white">
                        <div className="col-12 col-lg-6">
                            <h2 className="text-white text-center mb-3">Contact Us</h2>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-user fs-2 me-3 text-white opacity-75"></i>
                                <input type="text" className="my-3 form-control input-bg rounded-0 text-white px-3" placeholder="Name" defaultValue={user.displayName} />
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-envelope fs-2 me-3 text-white opacity-75"></i>
                                <input type="email" className="my-3 form-control input-bg rounded-0 text-white px-3" placeholder="Email" defaultValue={user.email} />
                            </div>
                            <div className="d-flex">
                                <i className="fas fa-comment-alt fs-2 me-3 text-white opacity-75 mt-4"></i>
                                <textarea cols="40" rows="8" className="my-3 form-control input-bg rounded-0 border-1 text-dark"
                                    placeholder="Write your valuable feedback here"></textarea>
                            </div>

                            <button className="btn btn-outline-success float-end px-4 py-2 rounded-0 mt-3">Submit</button>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="text-center mt-5 mt-lg-0">We are based in Sylhet, Bangladesh</h1>
                            <div className="mt-5 d-lg-flex justify-content-between align-items-center">
                                <div className="text-center mb-5 mb-lg-0">
                                    <h1><i className="fas fa-crosshairs"></i></h1>
                                    <p>Fenchuganj, Sylhet,<br /> Bangladesh 3117</p>
                                </div>
                                <div className="text-center mb-5 mb-lg-0">
                                    <h1><i className="far fa-envelope"></i></h1>
                                    <p>royavijit782@gmail.com <br />avijit15-10654@diu.edu.bd</p>
                                </div>
                                <div className="text-center mb-5 mb-lg-0">
                                    <h1><i className="fas fa-phone-alt"></i></h1>
                                    <p>01636456927 <br />01812128720</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;