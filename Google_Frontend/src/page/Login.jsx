import React from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <input type="email" placeholder="Enter your email" style={styles.input} />
      <input
        type="password"
        placeholder="Enter your password"
        style={styles.input}
      />
      <button style={{ ...styles.button, backgroundColor: "steelblue" }}>
        Login
      </button>
      <button style={styles.button} onClick={handleGoogleLogin}>
        Continue with Google
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    background: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "300px",
    margin: "100px auto",
  },
  title: {
    color: "#333",
    marginBottom: "20px",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    background: "#db4437",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Login;
