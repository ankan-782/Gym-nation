import React from 'react';
import './Workout.css';

const Workout = ({ workout }) => {
    const { img, name, short_description, steps } = workout;

    return (
        <div className="col">
            <div className="card workout border-1 border-success rounded-0 h-100">
                <img src={img} className="card-img-top rounded-0" alt="..." />
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="card-details">
                        <h5 className="card-title text-uppercase fw-bold mb-5">{name}</h5>
                        <p className="mb-1 text-decoration-underline">What is {name} ?</p>
                        <small className="card-text opacity-75">{short_description}</small>
                        <p className="mt-5 mb-1 text-decoration-underline">Steps:<br /></p>
                        <small className="card-text opacity-75">{steps}</small>
                    </div>
                </div>
                <button className="btn btn-success rounded-0"><i className="fas fa-chevron-right fs-3 text-white"></i></button>
            </div>
        </div>
    );
};

export default Workout;