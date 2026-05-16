import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AdminPortal from "./pages/Adminportal";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 

export default App;