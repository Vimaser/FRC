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
      <h1 className="highlighted-text">Our Locations</h1>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          width: "90%",
          maxWidth: "600px",
        }}
      >
        {storeLocations.map((location, index) => (
          <li
            key={index}
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              padding: "1rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <h2 className="highlighted-text">{location.name}</h2>

            <address style={{ fontStyle: "normal", margin: "0.5rem 0" }}>
              {location.address}
            </address>

            <p>{location.time}</p>

            <img
              src={location.imgSrc}
              alt={location.name}
              style={{
                display: "block",
                margin: "1rem auto",
                maxWidth: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            />

            {/* going add a button/link for more details or maybe googlemaps */}
            {/* <button style={{ marginTop: "0.5rem", backgroundColor: "#333", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "4px" }}>Learn More</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
