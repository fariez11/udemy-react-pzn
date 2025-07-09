import Footer from "../layout/footer"
import "./helloWorld.css"


export default function Container({ children }) {
    return (
        <div className="container text-center" style={{ marginTop: "5rem" }}>
            <header className="fixed-top">
                <h1 className="fw-bold" style={{ backgroundColor: "#E2E3E5", padding: "0.5rem" }}>Belajar ReactJS</h1>
            </header>
            {children}
            <Footer />
        </div>
    )
}