import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/brand/GymLogo.png';
import avatar from '../../../images/avatar/avatar.jpg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container p-0">
                <NavLink className="navbar-brand text-uppercase brand nav-text" to="/home">
                    <img src={logo} alt="" width="80" height="80" />G y m N a t i o n</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item ms-lg-4">
                            <NavLink className="nav-link nav-text-active text-black" to="">Home</NavLink>
                        </li>
                        <li className="nav-item ms-lg-4">
                            <NavLink className="nav-link nav-text text-black" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item ms-lg-4">
                            <NavLink className="nav-link nav-text text-black" to="/workouts">Workouts</NavLink>
                        </li>
                        <li className="nav-item ms-lg-4">
                            <NavLink className="nav-link nav-text text-black" to="/trainers">Trainers</NavLink>
                        </li>
                        <li className="nav-item ms-lg-4">
                            {user?.email ? <p onClick={logOut} className="nav-link nav-text text-black mb-0 pointer">Log Out</p> : <NavLink className="nav-link nav-text fw-bold" to="/login">Log In</NavLink>}
                        </li>
                    </ul>
                    <div className="ms-auto d-flex justify-content-center align-items-center">
                        <div>
                            {user?.email && <span className="nav-text me-3 text-uppercase">{user?.displayName}</span>}
                            <NavLink to="/login">{user.email ? <img src={user?.photoURL} alt="" width="50" height="50" style={{borderRadius: "50%"}}/> :<img src={avatar} title="User not logged in" alt="" width="50" height="50" style={{borderRadius: "50%"}} />}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;