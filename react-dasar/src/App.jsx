import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import FloatingToggle from "./components/floatingToggle";

export default function App() {
  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      <div style={{ width: "240px", flexShrink: 0, overflow: "auto" }}>
        <Sidebar />
      </div>

      <div className="flex-grow-1 d-flex flex-column" style={{ overflow: "hidden" }}>
        <main className="flex-grow-1 p-4 bg-light" style={{ overflowY: "auto" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto", width: "100%" }}>
            <Routes>
              {
                routes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))
              }
            </Routes>
          </div>
        </main>
      </div>

      <div>
        <FloatingToggle />
      </div>
    </div>
  );
}

