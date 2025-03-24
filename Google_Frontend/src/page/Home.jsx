import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Img } from "../assets/image.js";
const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/user`, { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, [navigate]);

  const handleLogout = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.message);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={styles.container}>
        <h2>Welcome, {user.displayName}!</h2>
        <img src={Img?.profileImage} alt="Profile" style={styles.image} />
        <p>
          <strong>Email:</strong> {user.emails[0].value}
        </p>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
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
    width: "350px",
    margin: "100px auto",
  },
  image: {
    borderRadius: "50%",
    margin: "15px 0",
    border: "3px solid #007bff",
    width: "100px",
    height: "100px",
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
    marginTop: "20px",
  },
};

export default Home;
