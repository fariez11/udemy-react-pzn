import { useState } from "react"

export default function Counter() {
    const [number, setCounter] = useState(0)

    function handleClick() {
        setCounter(number + 2)
    }
    return (
        <div>
            <h2> counter : {number}</h2>
            <button className="btn btn-primary" onClick={handleClick}> tambahkan</button>
        </div>
    )
}