import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
