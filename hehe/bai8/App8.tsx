import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter8";
import AdminIndex from "./AdminIndex8";
import Account from "./Account8";
import Product from "./Product8";
import Order from "./Order8";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<AdminIndex />} />
          <Route path="account" element={<Account />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
