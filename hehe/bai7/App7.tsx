import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Teams from "./Teams7";
import TeamsIndex from "./TeamsIndex7";
import Team from "./Team7";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />
          <Route path=":teamId" element={<Team />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
