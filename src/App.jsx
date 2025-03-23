import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/signup/signup";
import Studenthome from "./pages/studenthome/studenthome";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/student" element={<Studenthome/>} />
      </Routes>
    
  );
}

export default App;
