import React, { useState, useEffect } from "react";
import IMG1 from "../img/storeImage1.jpg";
import IMG2 from "../img/StoreImage2.jpg";
import IMG3 from "../img/StoreImage3.jpg";
import IMG4 from "../img/StoreImage4.jpg";
import IMG5 from "../img/StoreImage5.jpg";
import IMG6 from "../img/StoreImage6.jpg";
import logoGif from "../img/FRC.gif"; // Adjust the path as needed

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="parallax">
      <div className="container mt-5">
        <div className="text-center mb-4">
          <img src={logoGif} alt="FRC Logo" width="500" height="500" />
          <br />
          <br />
          <h1 className="highlighted-text" style={{ textAlign: "center", width: "70%" }}>Welcome to FRC</h1>
        </div>
        <p className="text-center mb-4">
          Your premier destination for fire-resistant clothing.
        </p>

        <div
          className={`d-flex justify-content-center ${
            fade ? "fade-in" : "fade-out"
          }`}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Store ${currentImageIndex + 1}`}
            className="img-fluid"
            style={{ width: "600px", height: "450px", objectFit: "cover" }}
          />
          <br />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Home;
