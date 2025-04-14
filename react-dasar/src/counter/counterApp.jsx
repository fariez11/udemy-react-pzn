import { useState } from "react"
import Counter from "./counter"

export default function CounterApp() {
    const [show, setShow] = useState(true)

    function handleChange(e) {
        setShow(e.target.checked)
    }

    return (
        <div>
            <Counter />
            <input type="checkbox" className="form-check-input my-4 mx-2" checked={show} onChange={handleChange} />
            {show && <Counter />}
        </div>
    )
}