// components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
    <h4 className="mb-4">React FUNdamental</h4>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/products">Products</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
