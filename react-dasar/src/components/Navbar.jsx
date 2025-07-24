// components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light w-100 fixed-top px-4 ">
    <Link className="navbar-brand fw-semibold text-white" to="/">React FUNdamental</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          {/* <Link className="nav-link text-white" to="/">learn </Link> */}
        </li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
