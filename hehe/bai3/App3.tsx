import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Employee from "./Employee3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;
