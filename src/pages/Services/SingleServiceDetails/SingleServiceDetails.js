import React from 'react';
import { useParams } from 'react-router';
import './SingleServiceDetails.css';
import { data } from './data';

const SingleServiceDetails = () => {
    const { singleServiceID } = useParams();

    const serviceDetail = data.find(gymID => gymID.id == singleServiceID)
    console.log(serviceDetail);

    const { img, serviceName, category, short_description, level, price, name } = serviceDetail;

    return (
        <div className="single-service-details-bg text-white">
            <div className="container p-5 single-service-details-content d-flex justify-content-center align-items-center">
                <div className="row g-5">
                    <div className="col-12 col-lg-6">
                        <div className="mb-3">
                            <small className="level">{level}</small>
                        </div>
                        <div className="d-lg-flex align-items-end mb-4">
                            <h3 className="me-4">{serviceName}</h3>
                            <small className="category">- {category}</small>
                        </div>
                        <p className="mb-5">{short_description}</p>
                        <p className="border-bottom border-1 pb-1 trainer-info-text-style">Trainer Information:</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center trainer-info">
                                <div className="text-center">
                                    <img src={img?.trainer} className="trainer-img" alt="..." />
                                    <div className="d-flex mt-2">
                                        <button className="btn"><i className="fab fa-facebook-f fs-6 text-white"></i></button>
                                        <button className="btn"><i className="fab fa-linkedin-in fs-6 text-white"></i></button>
                                        <button className="btn"><i className="fab fa-twitter fs-6 text-white"></i></button>
                                    </div>
                                </div>
                                <div className="ms-3 pb-4">
                                    <small>Name:</small>
                                    <h4 className="mt-1">{name}</h4>
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-5">Price: ${price}</h4>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={img.service} className="border border-1 img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;