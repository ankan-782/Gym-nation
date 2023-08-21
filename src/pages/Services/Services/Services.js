import React from 'react';
import useGymInfo from '../../../hooks/useGymInfo';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    //custom hook used
    const [gymInfo] = useGymInfo();
    return (
        <div className="bg-dark text-white">
            <div className="py-5">
                <div className="container px-lg-0 px-4 py-5">
                    <h1 className="text-center mb-5">Our all classes</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        {
                            gymInfo.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;