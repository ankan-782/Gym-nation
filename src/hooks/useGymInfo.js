import { useEffect, useState } from 'react';

const useGymInfo = () => {
    const [gymInfo, setGymInfo] = useState([]);
    useEffect(()=>{
        fetch('./gymInfo.json')
        .then(res => res.json())
        .then(data => setGymInfo(data));
    },[])
    return [gymInfo];
};

export default useGymInfo;