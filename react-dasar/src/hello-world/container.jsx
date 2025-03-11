import "./helloWorld.css"


export default function Container({ children }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ backgroundColor: "#E2E3E5", padding: "2rem" }}>Belajar ReactJS</h1>
            {children}
            <footer className="footer">
                <p>2025 Programmer Zaman Now</p>
            </footer>
        </div>
    )
}