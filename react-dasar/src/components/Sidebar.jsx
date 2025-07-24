// components/Sidebar.jsx
import { Link } from "react-router-dom";
import './style.css';

export default function Sidebar() {
  const sidebarLinks = [
    { to: '/component', label: 'component' },
    { to: '/materi-7', label: 'jsx' },
    { to: '/materi-8', label: 'javascript di jsx' },
    { to: '/materi-9', label: 'props' },
    { to: '/materi-10', label: 'nested component' },
    { to: '/materi-11', label: 'style' },
    { to: '/materi-12', label: 'conditional' },
    { to: '/materi-13', label: 'collection component' },
    { to: '/materi-14', label: 'pure component' },
    { to: '/materi-15', label: 'event handler' },
    { to: '/materi-16', label: 'event object' },
    { to: '/materi-17', label: 'event propagation' },
    { to: '/materi-18', label: 'side effect' },
    { to: '/materi-19', label: 'hooks' },
    { to: '/materi-20', label: 'state' },
    { to: '/materi-21', label: 'render' },
    { to: '/materi-22', label: 'snapshot' },
    { to: '/materi-23', label: 'state update' },
    { to: '/materi-24', label: 'object di state' },
    { to: '/materi-25', label: 'array di state' },
    { to: '/materi-26', label: 'sharing state' },
    { to: '/materi-27', label: 'mempertahankan state' },
  ];

  return (
    <div className="vh-100 p-3 position-fixed" style={{ width: '250px', backgroundColor: '#01817F' }}>
      <Link className="nav-link" to="/"><h5 className="mb-3 text-white">.React FUNdamental</h5></Link>
      <div className="py-1 rounded-4 overflow-y-auto no-scrollbar" style={{ height: 'calc(100vh - 100px)', scrollbarColor: '#01817F #01817F', backgroundColor: '#399D9B' }}>
        <ul className="nav flex-column">
          {sidebarLinks.map((link, index) => (
            <li className="nav-item" key={index}><Link className="nav-link text-white" key={index} to={link.to}>{link.label}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
