import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./Student2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
