// layouts/AdminLayout.jsx
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div className="d-flex">
    <Sidebar />
    <main className="flex-grow-1 p-4 bg-light" style={{ minHeight: "100vh" }}>
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
