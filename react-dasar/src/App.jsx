import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />
        <main className="flex-grow-1 p-4 bg-light">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/products" element={<Products />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
