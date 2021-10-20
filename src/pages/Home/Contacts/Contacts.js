import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contact-us-bg">
            <div className="contact-us-content py-5">
                <div className="container p-0">
                    <div className="mapouter mb-5">
                        <div className="gmap_canvas">
                            <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no"
                                marginheight="0" marginwidth="0"
                                src="https://maps.google.com/maps?width=1000&amp;height=300&amp;hl=en&amp;q=Daffodil International University&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </div>
                    </div>
                    <div className="d-lg-flex justify-content-between align-items-center mt-3 text-white">
                        <div>
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
                        <div>
                            <h2 className="text-white text-center mb-3">Contact Us</h2>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-user fs-2 me-3 text-white opacity-75"></i>
                                <input type="text" className="my-3 form-control input-bg rounded-0 text-white px-3" placeholder="Name" />
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-envelope fs-2 me-3 text-white opacity-75"></i>
                                <input type="email" className="my-3 form-control input-bg rounded-0 text-white px-3" placeholder="Email" />
                            </div>
                            <div className="d-flex">
                                <i className="fas fa-comment-alt fs-2 me-3 text-white opacity-75 mt-4"></i>
                                <textarea cols="40" rows="8" className="my-3 form-control input-bg rounded-0 border-1 text-dark"
                                    placeholder="Write your valuable feedback here"></textarea>
                            </div>

                            <button className="btn btn-outline-success px-4 py-2 rounded-0 ms-5 mt-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;