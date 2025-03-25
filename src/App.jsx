import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Order from "../components/Order";
import Success from "../components/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Success" element={<Success />} />
    </Routes>
  );
}

export default App;
