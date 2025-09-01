import Sidebar from "./layouts/Sidebar";
import { Routes, Route, Link } from "react-router-dom";
import { defaultMenu, reactDasar, reactRouter } from "./routes";
import FloatingToggle from "./components/floatingToggle";
import useOnline from "./pages/additional/online/onlineHook";

export default function App() {

  const routes = [...defaultMenu, ...reactDasar, ...reactRouter]

  const base = {
    height: "100vh",
    overflow: "hidden",
    background: 'linear-gradient(to left, #002B2A 10%, #001D1C)'
  }

  const koneksi = useOnline()

  return (
    <div className="row m-0" style={base}>
      <div className="col-3 px-4 py-2 vh-100">
        {/* <div  style={{ width: "250px", overflow: "auto" }}> */}
        <Link className="nav-link" to="/"> <h5 className="my-2 pb-2 text-light text-center">.React FUNdamental</h5></Link>
        <Sidebar />
      </div>
      <div className="col m-0 p-0">
        <div className="flex-grow-1 d-flex flex-column">
          <div className="mt-3 mb-0 text-end me-3">
            <div className="d-flex align-align-items-center"></div>
            <span className={'py-1 px-2 rounded-2 ' + (koneksi.hasInternet ? 'text-success bg-success-subtle' : 'text-danger bg-danger-subtle')}> <i className="bi bi-circle-fill"></i> {koneksi.hasInternet ? 'online' : 'offline'}</span>
          </div>
          <main className="flex-grow-1 p-3">
            <div style={{ maxWidth: "1000px", width: "100%" }}>
              <Routes>
                {
                  routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                  ))
                }
              </Routes>
            </div>
          </main>
        </div>
      </div>

      <div>
        <FloatingToggle />
      </div>
    </div>
  );
}

