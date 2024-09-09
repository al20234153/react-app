import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function UseGeoLocation() {
    const [locationData, setLocationData] = useState(null)
    useEffect(() => {
        getLocation();
    }, []);
    async function getLocation() {
        const res = await axios.get("http://ip-api.com/json");
        console.log(res);
        if (res.status === 200)
            setLocationData(res.data)
    }
    return {        
        city: locationData?.city,
        country: locationData?.country,        
    }
}