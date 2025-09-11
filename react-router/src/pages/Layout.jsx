import { NavLink, Outlet } from "react-router";
import '../assets/css/sidebar.css'

export default function Layout() {
    return (
        <>
            <div className="header">
                <h3>navbar</h3>
            </div>
            <div>   
                <ul className="p-0">
                    <li className="list-unstyled"><NavLink to="/data/products"> product</NavLink></li>
                    <li className="list-unstyled"><NavLink to="/data/customers"> customer</NavLink></li>
                    <li className="list-unstyled"><NavLink to="/data/sellers"> seller</NavLink></li>
                    <li className="list-unstyled"><NavLink to="/data/products?category=jersey#top"> category</NavLink></li>
                    <li className="list-unstyled"><NavLink to={{ pathname: "/data/products", search:"?category=jersey", hash:"#top" }}> hash</NavLink></li>
                </ul>
            </div>
            <div className="content my-5">
                <Outlet />
            </div>
            <div className="footer">
                <h3>footer</h3>
            </div>
        </>
    )
}