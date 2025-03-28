import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import productData from "../src/constants/productData";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

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
      <Footer productData={productData}></Footer>
    </>
  );
}

export default App;
