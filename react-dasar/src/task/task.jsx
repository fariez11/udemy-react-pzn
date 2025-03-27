import { useState } from "react"
import { useImmer } from "use-immer"
import TaskForm from "./taskForm"
import TaskList from "./taskList"

export default function Task() {

    // *sebelum menggunakan Sharing State
    // const [item, setItem] = useState("")
    // const [items, setItems] = useImmer([])

    // function handleChange(e) {
    //     setItem(e.target.value)
    // }

    // function handleClick(e) {
    //     e.preventDefault()
    //     setItems((draft) => { draft.push(item) })
    //     setItem("")
    // }


    // return (
    //     <div className="container text-center" style={{ marginTop: "5rem" }}>
    //         <header className="fixed-top">
    //             <h2 className="fw-bold" style={{ backgroundColor: "#E2E3E5", padding: "0.5rem" }}>Belajar Immer</h2>
    //         </header>
    //         <div className="row">
    //             <div className="col">
    //                 <h2>create task</h2>
    //                 <form action="" className="d-flex">
    //                     <input type="text" className="form-control me-3" value={item} onChange={handleChange} />
    //                     <button className="btn btn-primary" onClick={handleClick}>add</button>
    //                 </form>
    //             </div>
    //             <div className="col">
    //                 <h2>list task</h2>
    //                 <ul className="list-group">
    //                     {items.map((item, index) =>
    //                         <li className="list-group-item" key={index}>{item}</li>
    //                     )}
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // )

    // setelah menggunakan Sharing State
    const [items, setItems] = useImmer([])

    // function handleOnSubmit(item) {
    //     setItems(draft => { draft.push(item) })
    // }

    return (
        <div className="row">
            <div className="col ps-5">
                {/* <TaskForm onSubmit={handleOnSubmit} />   jika ingin menggunakan onSubmit */}
                <TaskForm setItems={setItems} />
            </div>
            <div className="col pe-5">
                <TaskList items={items} />
            </div>
        </div>
    )
}