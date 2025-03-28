import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Order from "../components/Order";
import Success from "../components/Success";
import productData from "../src/constants/productData";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        <Route path="/Order" element={<Order productData={productData} />} />
        <Route
          path="/Success"
          element={<Success productData={productData} />}
        />
      </Routes>
    </>
  );
}

export default App;
