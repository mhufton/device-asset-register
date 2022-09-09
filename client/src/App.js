import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import EditDevice from "./Components/EditDevice"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/:device_id" element={ <EditDevice /> } />
      </Routes>
    </Router>
  );
}

export default App;
