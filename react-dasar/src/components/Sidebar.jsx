// components/Sidebar.jsx
import { Link } from "react-router-dom";
import '@assets/sidebar.css';
import routes from "../routes";

export default function Sidebar() {
  return (
    <div className="vh-100 p-3 position-fixed" style={{ width: '250px', backgroundColor: '#01817F' }}>
      <Link className="nav-link" to="/"><h5 className="mb-3 text-white">.React FUNdamental</h5></Link>
      <div className="py-1 rounded-4 overflow-y-auto no-scrollbar" style={{ height: 'calc(100vh - 100px)', scrollbarColor: '#01817F #01817F', backgroundColor: '#399D9B' }}>
        <ul className="nav flex-column">
          {routes.slice(1).map((link, index) => (
            <li className="nav-item" key={index}><Link className="nav-link text-white" key={index} to={link.path}>{link.label}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
