import React from 'react';
import useGymInfo from '../../../hooks/useGymInfo';
import Trainer from '../Trainer/Trainer';
import './Team.css';

const Team = () => {

    //custom hook used
    const [gymInfo] = useGymInfo();

    return (
        <div>
            <div className="bg-dark text-white">
                <div className="py-5">
                    <div className="container px-lg-0 px-4 py-5">
                        <h1 className="text-center mb-5">Our all Trainers</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-5">
                            {
                                gymInfo.map(trainer => <Trainer
                                    key={trainer.id}
                                    trainer={trainer}
                                ></Trainer>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;