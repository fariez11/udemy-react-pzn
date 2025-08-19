// components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import '@assets/sidebar.css';
import routes from "../routes";

export default function Sidebar() {

  const location = useLocation();
  return (
    <div className="vh-100 px-3 pt-3 position-fixed" style={{ width: '250px'}}>
      <Link className="nav-link" to="/"><h5 className="ms-2 mb-3 text-light">.React FUNdamental</h5></Link>
      <div className="py-2 rounded-3 sidebar">
        <div className="overflow-y-auto scroll me-2">
          <ul className="nav flex-column ps-2 pe-1">
            {routes.slice(1).map((link, index) => (
              <li className="nav-item mt-1" key={index}><Link className={`nav-link text-white ${location.pathname === link.path ? 'active' : ''}`} to={link.path} key={index}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
