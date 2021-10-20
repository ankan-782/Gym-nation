import React from 'react';
import img1 from '../../../images/Banner/img-1.jpg';
import img2 from '../../../images/Banner/img-2.jpg';
import img3 from '../../../images/Banner/img-3.jpg';
import img4 from '../../../images/Banner/img-4.jpg';
import img5 from '../../../images/Banner/img-5.jpg';
import img6 from '../../../images/Banner/img-6.jpg';
import img7 from '../../../images/Banner/img-7.jpg';
import img8 from '../../../images/Banner/img-8.jpg';
import img9 from '../../../images/Banner/img-9.jpg';
import img10 from '../../../images/Banner/img-10.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="text-white">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators mb-lg-5">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>
                <div className="carousel-inner banner-content">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.”</h5>
                            <h3>-Muhammad Ali</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“Go the extra mile. It’s never crowded.”</h5>
                            <h3>-Wayne Dyer</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={img3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“You just can’t beat the person who never gives up.”</h5>
                            <h3>-Babe Ruth</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={img4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“Take care of your body. It’s the only place you have to live.”</h5>
                            <h3>-Jim Rohn</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={img5} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“Do something today that your future self will thank you for.”</h5>
                            <h3>-Sean Patrick Flanery</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={img6} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“Strength does not come from physical capacity. It comes from an indomitable will.”</h5>
                            <h3>-Mahatma Gandhi</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={img7} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“Once you are exercising regularly, the hardest thing is to stop it.”</h5>
                            <h3>– Erin Gray</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={img8} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“If you don’t make time for exercise, you’ll probably have to make time for illness.”</h5>
                            <h3>-Robin Sharma</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={img9} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“The best way to predict the future is to create it.”</h5>
                            <h3>-Abraham Lincoln</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={img10} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“All progress takes place outside the comfort zone.”</h5>
                            <h3>-Michael John Bobak</h3>
                        </div>
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
    );
};

export default Banner;