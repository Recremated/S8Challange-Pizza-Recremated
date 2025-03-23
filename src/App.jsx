import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import OrderPizza from "../components/OrderPizza";
import Success from "../components/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/OrderPizza" element={<OrderPizza />} />
      <Route path="/Success" element={<Success />} />
    </Routes>
  );
}

export default App;
