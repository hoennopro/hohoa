import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./Student4";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
