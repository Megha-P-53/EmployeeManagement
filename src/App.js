import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import EmployeeList from "./pages/EmployeeList";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
