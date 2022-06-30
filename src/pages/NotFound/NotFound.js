import React from 'react';
import './NotFound.css';
import notFoundGif from '../../images/notFound/notFound.gif';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-white not-found-bg">
            <div className="text-start p-2 error-content">
                <div>
                    <img src={notFoundGif} alt="" className="w-25 mb-2 mb-lg-5" />
                    <div>
                        <h2>Error 404!</h2>
                        <small>The page you are looking for is not found</small>
                    </div>
                    <NavLink to="/"><button className="btn btn-outline-success rounded-0 mt-4">Go back to home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;