import React, { useEffect, useState } from 'react';

export default function Index() {

    const  [location, setLocation ] = useState(null);

    useEffect(()=>{
        const watchId = (pos) =>{
            const {latitude , longitude} = pos.coords;
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(res => res.json())
            .then(data => {
                const name = data.display_name;
                setLocation({latitude,longitude,name})
            })
        };
        navigator.geolocation.getCurrentPosition(watchId);
    }, []);

  return (
    <>
        {
            location && (<p>{location.name}</p>)
        }
    </>
  )
}
