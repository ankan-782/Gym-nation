import React from 'react';
import { NavLink } from 'react-router-dom';
import './ServicesInHome.css';

const ServicesInHome = ({ service }) => {
    const { id, img, serviceName, category } = service;
    return (
        <div className="col">
            <div className="card service-in-home bg-transparent border-0 rounded-0 h-100">
                <img src={img.service} className="card-img-top rounded-0" alt="..." />
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="card-details">
                        <h5 className="card-title fw-bold">{serviceName}</h5>
                        <small className="card-text text-uppercase opacity-75">{category}</small>
                    </div>
                    <NavLink to={`/serviceDetails/${id}`}><button className="btn btn-outline-dark rounded-0"><i className="fas fa-chevron-right fs-3 text-white"></i></button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServicesInHome;