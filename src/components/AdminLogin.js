import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form");
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successful");
      navigate("/admindashboard");
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>Please Login</h2>
      <br />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <label
          style={{
            marginBottom: "10px",
            width: "100%",
          }}
        >
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label
          style={{
            marginBottom: "10px",
            width: "100%",
          }}
        >
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>{" "}
      <br />
    </div>
  );
};

export default AdminLogin;
