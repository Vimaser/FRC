import React from "react";
import IMG1 from "../img/storeImage1.jpg";
import IMG2 from "../img/StoreImage2.jpg";
import IMG3 from "../img/image3.jpeg";

const Locations = () => {
  const storeLocations = [
    {
      name: "FRC DEHNAM SPRINGS",
      address:
        "Liveoak FleaMarket 34750 HWY Denham Springs, Next to Linda's Chicken",
      time: "Wednesday to Saturday 11:00 AM to 5:00 PM",
      imgSrc: IMG1,
    },
    {
      name: "FRC Prairieville Fleamarket",
      address: "15545 Airline HWY, Prairieville, LA 70769",
      time: "Saturday and Sunday 9:00 AM to 4:30 PM",
      imgSrc: IMG3,
    },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="highlighted-text" style={{ textAlign: "center", width: "70%" }}>Our Locations</h1>
      <br />
      <ul style={{ listStyleType: "none", padding: 0, width: "70%" }}>
        {storeLocations.map((location, index) => (
          <li key={index} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
            <h2 className="highlighted-text">{location.name}</h2>
            <br />
            <p>{location.address}</p>
            <p>{location.time}</p>
            <img
              src={location.imgSrc}
              alt={`Store Location ${index + 1}`}
              style={{
                display: "block",
                margin: "0 auto",
                width: "480px",
                height: "360px",
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
