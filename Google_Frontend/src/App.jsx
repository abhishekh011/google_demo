import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
