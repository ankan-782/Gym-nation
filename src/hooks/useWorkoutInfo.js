import { useEffect, useState } from 'react';

const useWorkoutInfo = () => {
    const [workoutInfo, setWorkoutInfo] = useState([]);
    useEffect(() => {
        fetch('./workoutInfo.json')
            .then(res => res.json())
            .then(data => setWorkoutInfo(data));
    }, [])
    return [workoutInfo];
};

export default useWorkoutInfo;