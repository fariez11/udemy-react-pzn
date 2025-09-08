import { Outlet } from "react-router";

export default function Layout() {
    return (
        <>
        <div className="hader">
            <h3>navbar</h3>
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