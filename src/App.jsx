import { Routes, Route, useLocation } from "react-router-dom";
import { useRef } from "react";

import ContactPage from "./Pages/contact";
import Service from "./Pages/Service";
import Navbar from "./Pages/Navbar";
import Resources from "./Pages/Resources";
import AboutPage from "./Pages/About";
import Home from "./Pages/Home";
import MedicineComparator from "./Pages/MedicineComparator";
import EmergencyMode from "./Pages/EmergencyMode";   // ✅ NEW IMPORT

import "./App.css";

function App() {
  const location = useLocation();

  const hideGlobalNavbar =
    location.pathname === "/" || location.pathname === "/home";

  return (
    <div className="App">
      {!hideGlobalNavbar && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/comparator" element={<MedicineComparator />} />

          {/* ✅ NEW ROUTE */}
          <Route path="/emergency" element={<EmergencyMode />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;