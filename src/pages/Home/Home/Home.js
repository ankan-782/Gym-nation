import React from 'react';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import AboutUs from '../AboutUs/AboutUs';
import useGymInfo from '../../../hooks/useGymInfo';
import ServicesInHome from '../ServicesInHome/ServicesInHome';
import { NavLink } from 'react-router-dom';


const Home = () => {

    //custom hook used
    const [gymInfo] = useGymInfo();

    return (
        <div>
            <Banner></Banner>
            <div className="bg-dark text-white">
                <div className="py-5">
                    <div className="container p-4">
                        <h1 className="text-center mb-5">Our Classes</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-5">
                            {
                                gymInfo.slice(0, 6).map(service => <ServicesInHome
                                    key={service.id}
                                    service={service}
                                ></ServicesInHome>)
                            }
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <NavLink className="btn btn-outline-success rounded-0 my-5" to="/services">View all Classes in Services section</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs></AboutUs>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;