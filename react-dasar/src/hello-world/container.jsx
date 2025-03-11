import "./helloWorld.css"


export default function Container({ children }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Programmer Zaman Now</h1>
            {children}
            <footer className="footer">
                <p>2025 Programmer Zaman Now</p>
            </footer>
        </div>
    )
}