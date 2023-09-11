import React from "react";

import product1 from "../img/products/product1.jpg";
import product2 from "../img/products/product2.jpg";
import product3 from "../img/products/product3.jpg";

const Products = () => {
  const products = [
    {
      name: "NON FR reg WORK JACKETS ",
      price: "$15.00",
      description: "15.00 EACH GET THEM EARLY",
      location: "Prairieville Fleamarket",
      imgSrc: product1,
    },
    {
      name: "NEW LADIES COVERALLS",
      price: "65.00",
      description: "NEW LADIES COVERALLS",
      location: "LIVEOAK FLEAMARKET",
      imgSrc: product2,
    },
    {
      name: "NEW LADIES COVERALLS",
      price: "65.00",
      description: "NEW LADIES COVERALLS",
      location: "Prairieville Fleamarket",
      imgSrc: product3,
    },
  ];

  return (
    <div 
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="highlighted-text" style={{ textAlign: "center", width: "70%" }}>Our Latest Products</h1>
      <br />
      <p>Explore our wide range of fire-resistant and regular clothing.</p>

      <ul style={{ listStyleType: "none", padding: 0, width: "70%" }}>
        {products.map((product, index) => (
          <li
            key={index}
            style={{
                color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <h2>
              {product.name} - {product.price}
            </h2>
            <img
              src={product.imgSrc}
              alt={product.name}
              style={{ width: "480px", height: "360px", marginBottom: "1rem" }}
            />
            <p>{product.description}</p>
            <p>{product.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
