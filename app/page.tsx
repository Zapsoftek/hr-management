"use client";

import { useState, CSSProperties } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Login</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <p style={footerTextStyle}>Forgot your password?</p>
      </div>
    </div>
  );
}

// Define styles with TypeScript-compatible values
const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f2f5",
};

const cardStyle: CSSProperties = {
  width: "400px",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  textAlign: "center",
};

const titleStyle: CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "24px",
  color: "#333333",
};

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle: CSSProperties = {
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle: CSSProperties = {
  padding: "15px",
  borderRadius: "6px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  border: "none",
  marginTop: "10px",
  transition: "background-color 0.3s ease",
};

const footerTextStyle: CSSProperties = {
  fontSize: "14px",
  color: "#007bff",
  marginTop: "20px",
  cursor: "pointer",
};
