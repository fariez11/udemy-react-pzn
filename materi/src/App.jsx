import React from "react";
import Sidebar from "./layouts/Sidebar";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import FloatingToggle from "./components/floatingToggle";
import useOnline from "./pages/additional/online/onlineHook";

export default function App() {

  const base = {
    height: "100vh",
    overflow: "hidden",
    background: 'linear-gradient(to left, #002B2A 10%, #001D1C)'
  }

  const koneksi = useOnline()
  
  
  

  return (
    <div className="d-flex" style={ base }>
      <div style={{ width: "240px", flexShrink: 0, overflow: "auto" }}>
        <Sidebar />
      </div>

      <div className="flex-grow-1 d-flex flex-column" style={{ overflow: "hidden" }}>
        <div className="mt-3 mb-0 text-end me-3">
          <div className="d-flex align-align-items-center"></div>
          <span className={'py-1 px-2 rounded-2 ' + (koneksi.hasInternet ? 'text-success bg-success-subtle' : 'text-danger bg-danger-subtle') }> <i className="bi bi-circle-fill"></i> {koneksi.hasInternet ? 'online' : 'offline'}</span>
        </div>
        <main className="flex-grow-1 p-4">
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

