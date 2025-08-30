// components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import '@assets/sidebar.css';
import routes from "../routes";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false)


  return (
    <div className="vh-100 px-3 pt-3 position-fixed" style={{ width: '250px' }}>
      <Link className="nav-link" to="/"><h5 className="ms-2 mb-3 text-light">.React FUNdamental</h5></Link>
      <div className="py-2 rounded-3 sidebar">
        <div className="overflow-y-auto scroll me-2">
          <li className="list-unstyled text-white mx-2 my-1 p-2 px-3 rounded-3 d-flex justify-content-between" style={{ backgroundColor:'#005C5A' }} onClick={() => setOpen(!open)}> 
            <span>React Dasar</span> 
            <i className={'ms-4 bi ' + (!open ? 'bi-chevron-down' : 'bi-chevron-up')}></i> 
          </li>
          {open && (
            <ul className="nav flex-column ps-2 pe-1">
              {routes.slice(1).map((link, index) => (
                <li className="nav-item mt-1" key={index}><Link className={`nav-link text-white ${location.pathname === link.path ? 'active' : ''}`} to={link.path} key={index}>{link.label}</Link></li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
