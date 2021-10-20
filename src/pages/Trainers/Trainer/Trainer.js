import React from 'react';
import './Trainer.css';

const Trainer = ({ trainer }) => {
    const { img, name, role } = trainer;
    return (
        <div className="col">
            <div className="card trainer bg-transparent border-0 rounded-0 h-100">
                <img src={img.trainer} className="card-img-top rounded-0" alt="..." />
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="card-details">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <small className="card-text text-uppercase opacity-75">{role}</small>
                    </div>
                    <button className="btn btn-outline-dark rounded-0"><i className="fas fa-chevron-right fs-3 text-white"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Trainer;