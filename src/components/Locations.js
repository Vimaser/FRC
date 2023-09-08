import React from 'react';
import IMG1 from '../img/storeImage1.jpg';
import IMG2 from '../img/StoreImage2.jpg';

const Locations = () => {
  const storeLocations = [
    { 
        name: "FRC DEHNAM SPRINGS", 
        address: "Liveoak FleaMarket 34750 HWY Denham Springs, Next to Linda's Chicken",
        time: "Wednesday to Saturday 11:00 AM to 5:00 PM",
        imgSrc: IMG1
    },
    { 
        name: "FRC Prairieville Fleamarket", 
        address: "15545 Airline HWY, Prairieville, LA 70769", 
        time: "Saturday and Sunday 9:00 AM to 4:30 PM", 
        imgSrc: IMG2
    }
  ];

  return (
    <div>
      <h1>Our Locations</h1>
      
      <ul>
        {storeLocations.map((location, index) => (
          <li key={index}>
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <p>{location.time}</p>
            <img src={location.imgSrc} alt={`Store Location ${index + 1}`} style={{ width: '480px', height: '360px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;