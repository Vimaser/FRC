import React, { useState, useEffect } from "react";
import { realTimeDb } from '../firebase';
import { ref, onValue, off } from "firebase/database";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = ref(realTimeDb, 'products');
    const listener = onValue(productsRef, (snapshot) => {
      const productsData = snapshot.val();
      const productList = [];
      for (let id in productsData) {
        productList.push({ id, ...productsData[id] });
      }
      setProducts(productList);
    });
    return () => {
      off(productsRef, listener);
    };
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <br />
      <h1
        className="highlighted-text"
        style={{ textAlign: "center", width: "70%" }}
      >
        Our Latest Products
      </h1>
      <br />
      <p style={{ textAlign: "center", width: "70%" }}>
        Explore our wide range of fire-resistant and regular clothing.
      </p>
      <br />
      <ul style={{ listStyleType: "none", padding: 0, width: "70%" }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <h1>
              {product.name} <h1>${product.price}</h1>
            </h1>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: "480px", height: "360px", marginBottom: "1rem" }}
            />
            <p>{product.description}</p>
            <p>{product.location}</p>
          </li>
        ))}
      </ul>
      <br/>
    </div>
  );
};

export default Products;