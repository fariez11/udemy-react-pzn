import { NavLink, Outlet, useNavigate } from "react-router";
import '../assets/css/sidebar.css'
import Button from "react-bootstrap/Button";

export default function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <div className="header bg-secondary rounded-top-3 py-2">
                <h4>navbar</h4>
            </div>
            <div className="row mx-0 px-0" style={{ width: '90vw' }}>
                <div className="col-3 py-3" style={{ backgroundColor: '#333C49' }}>
                    <ul className="p-0 d-flex flex-column gap-1">
                        <li className="list-unstyled"><NavLink to="/data/products"> product</NavLink></li>
                        <li className="list-unstyled"><NavLink to="/data/customers"> customer</NavLink></li>
                        <li className="list-unstyled"><NavLink to="/data/sellers"> seller</NavLink></li>
                        <li className="list-unstyled"><NavLink to="/data/products?category=jersey#top"> category</NavLink></li>
                        <li className="list-unstyled"><NavLink to={{ pathname: "/data/products", search: "?category=jersey", hash: "#top" }}> hash</NavLink></li>
                    </ul>
                    <div className="d-flex justify-content-center mt-5">
                        <Button variant="link" onClick={() => navigate('/images/*')}> previous page</Button>
                    </div>
                </div>
                <div className="col py-3 align-content-center" style={{ backgroundColor: '#2E3744' }}>
                    <Outlet />
                </div>
            </div>

            <div className="footer bg-secondary rounded-bottom-3 py-2">
                <h4>footer</h4>
            </div>
        </>
    )
}