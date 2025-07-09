export default function TaskList({ items = [] }) {
    return (
        <div className="text-center">
            <header>
                <h2 className="fw-bold rounded-bottom-4" style={{ backgroundColor: "#E2E3E5", padding: "0.5rem" }}>List Task</h2>
            </header>
            <ul className="list-group">
                {
                    items.map((item, index) =>
                        <li className="list-group-item" key={index}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}