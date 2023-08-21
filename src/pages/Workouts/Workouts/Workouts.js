import React from 'react';
import useWorkoutInfo from '../../../hooks/useWorkoutInfo';
import Workout from '../Workout/Workout';
import './Workouts.css';

const Workouts = () => {

    //custom hook used
    const [workoutInfo] = useWorkoutInfo();

    return (
        <div className="bg-dark text-white">
            <div className="py-5">
                <div className="container px-lg-0 px-4 py-5">
                    <h1 className="text-center mb-5">Workouts you do in all classes</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        {
                            workoutInfo.map(workout => <Workout
                                key={workout.id}
                                workout={workout}
                            ></Workout>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workouts;