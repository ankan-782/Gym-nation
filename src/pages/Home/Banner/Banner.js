import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="banner-content">
                <div className="container px-lg-0 px-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-12 col-lg-6">
                            <div id="carouselExampleCaptions" className="carousel slide border border-3 border-white rounded-3" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="4000">
                                        <img src="https://i.ibb.co/bB1jqQH/img-1.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://i.ibb.co/yQwpmJ5/img-2.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://i.ibb.co/C9xwFzG/img-3.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://i.ibb.co/YjPt1gy/img-4.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://i.ibb.co/xfL2Ccd/img-5.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://i.ibb.co/QbsKwG1/img-6.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://i.ibb.co/rb6cPc3/img-7.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://i.ibb.co/XZtb5Ck/img-8.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://i.ibb.co/RYtCjY1/img-9.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://i.ibb.co/yhMzTjc/img-10.jpg" className="d-block w-100" alt="slide1"></img>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="fs-2 mb-4 lh-base banner-title fw-bold">Unleash Your Potential at GymNation: Where Sweat Meets Strength and Dedication Fuels Transformation.</h1>
                            <p className="lh-base banner-description w-75">Join GymNation today and elevate your fitness journey with our empowering community and state-of-the-art facilities.</p>
                            <button className="banner-btn rounded-0 mt-3">Explore now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;