import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import productData from "../src/constants/productData";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  // Geçerli sayfalar
  const validPaths = ["/", "/Order", "/Success"];

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
        <Route path="*" element={<NotFound />} />
      </Routes>

      {validPaths.includes(location.pathname) && (
        <Footer productData={productData} />
      )}
    </>
  );
}

export default App;
