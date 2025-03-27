import { useState } from "react"
import { useImmer } from "use-immer"

export default function TaskForm({ setItems }) {

    const [item, setItem] = useState("")

    function handleChange(e) {
        setItem(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault()
        // onSubmit(item)                               jika param menggunakan onSubmit
        setItems((draft) => {
            draft.push(item)
        })
        setItem("")
    }


    return (
        <div className="text-center">
            <header>
                <h2 className="fw-bold rounded-bottom-4" style={{ backgroundColor: "#E2E3E5", padding: "0.5rem" }}>Create Task</h2>
            </header>
            <form action="" className="d-flex">
                <input type="text" className="form-control me-3" value={item} onChange={handleChange} />
                <button className="btn btn-primary" onClick={handleClick}>add</button>
            </form>
        </div>
    )
}