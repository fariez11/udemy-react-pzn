import { createRoot } from "react-dom/client"
import CounterApp from "./counterApp"

createRoot(document.getElementById('root'))
    .render(
        <div className="container" style={{ height: 100 }}>
            <div className="text-center mt-5">
                <CounterApp />
            </div>
        </div>
    )