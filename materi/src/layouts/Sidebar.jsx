// components/Sidebar.jsx
import { Link, NavLink } from "react-router-dom";
import '@assets/css/sidebar.css';
import { reactDasar, reactRouter, reactRedux, caseStudy } from "../routes";
import { useState } from "react";

export default function Sidebar() {

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  function SubMenu({ menu }) {
    return (
      <div className="overflow-y-auto mx-1 rounded-2 scroll sub-menu">
        <ul className="nav flex-column py-1 px-1" >
          {menu.map((link) => (
            <li className="nav-item menu" key={link.path}>
              {/* <Link className={`nav-link ${location.pathname === link.path ? 'active' : ''}`} to={link.path} style={{ color: '#005C5A' }}> {link.label} </Link> */}
              <NavLink className="nav-link" to={link.path} style={{ color: '#005C5A' }}> {link.label} </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="py-2 rounded-3 sidebar">
      <div className="overflow-y-hidden rounded-3" style={{ maxHeight: '100%' }}>
        <ul className="me-2 ps-2 rounded-2 p-0">
          <li className="parent-menu" data-bs-toggle="collapse" onClick={() => toggleMenu("dasar")}>
            <span>React Dasar</span>
            <i className={"ms-4 bi " + (openMenu === "dasar" ? "bi-chevron-down" : "bi-chevron-left")}></i>
          </li>
          {openMenu === 'dasar' && <SubMenu menu={reactDasar} />}
          <li className="parent-menu" onClick={() => toggleMenu("router")}>
            <span>React Router</span>
            <i className={"ms-4 bi " + (openMenu === "router" ? "bi-chevron-down" : "bi-chevron-left")}></i>
          </li>
          {openMenu === 'router' && <SubMenu menu={reactRouter} />}
          <li className="parent-menu" onClick={() => toggleMenu("redux")}>
            <span>React Redux</span>
            <i className={"ms-4 bi " + (openMenu === "redux" ? "bi-chevron-down" : "bi-chevron-left")}></i>
          </li>
          {openMenu === 'redux' && <SubMenu menu={reactRedux} />}
          <li className="parent-menu" onClick={() => toggleMenu("case")}>
            <span>Studi Kasus</span>
            <i className={"ms-4 bi " + (openMenu === "case" ? "bi-chevron-down" : "bi-chevron-left")}></i>
          </li>
          {openMenu === 'case' && <SubMenu menu={caseStudy} />}
          
        </ul>
      </div>
    </div>
  );

}
