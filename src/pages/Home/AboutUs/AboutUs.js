import React from 'react';
import './AboutUs.css';
import img1 from '../../../images/about/img-1.jpg';
import img2 from '../../../images/about/img-2.jpg';
import img3 from '../../../images/about/img-3.jpg';
import img4 from '../../../images/about/img-4.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-bg text-white">
            <div className="about-us-content p-5 d-flex justify-content-center align-items-center">
                <div className="row g-5">
                    <div className="col-12 col-lg-6">
                        <div className="row g-3">
                            <div className="col-12 col-lg-6">
                                <img src={img1} alt="" className="img-fluid mb-3 border border-1" />
                                <img src={img2} alt="" className="img-fluid border border-1" />
                            </div>
                            <div className="col-12 col-lg-6">
                                <img src={img3} alt="" className="img-fluid mb-3 border border-1" />
                                <img src={img4} alt="" className="img-fluid border border-1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h5 className="mb-5 border-bottom border-3 pb-2">About Us</h5>
                        <h3 className="mb-5">From the moment you walk through the door you know GYM-NATION is a unique place</h3>
                        <p>When we created GYM-NATION, we knew we wanted to be more than just a simple gym. Having worked in traditional gyms in the past, we knew we needed to create a concept that would provide our members with the most effective tools for success. This meant we needed to offer a wide range of classes both for children and adults.</p>
                        <p>This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming atmosphere and community in which everyone feels a sense of belonging.</p>
                        <div className="mt-5 d-lg-flex justify-content-between align-items-center">
                            <div className="text-center mb-5 mb-lg-0">
                                <small className="text-white-50">ENVIRONMENT</small><br />
                                <h4>Clean and Airy</h4>
                            </div>
                            <div className="text-center mb-5 mb-lg-0">
                                <small className="text-white-50">CLASSES</small><br />
                                <h4>Every Level</h4>
                            </div>
                            <div className="text-center mb-5 mb-lg-0">
                                <small className="text-white-50">PRICES</small><br />
                                <h4>Affordable</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;