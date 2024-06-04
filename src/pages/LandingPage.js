// src/pages/LandingPage.js
import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    // Redirect to the Main app
    history.push("/main");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Metro App</h1>
      <p style={styles.subheading}>
        Efficient Metro Routes for Non-Metro Cities
      </p>
      <button onClick={handleGetStarted} style={styles.button}>
        Get Started
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #3498db, #9b59b6)",
    color: "#fff",
    textAlign: "center",
    padding: "0 20px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#27ae60",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default LandingPage;
