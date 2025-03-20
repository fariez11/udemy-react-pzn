import { useState } from "react";

export default function Counter() {
    let [number, setCounter] = useState(0)

    function handleClick() {
        setCounter(number + 1)
        // console.log(number);

    }
    return (
        <div className="d-flex justify-content-around">
            <h4 className="mt-2">Counter : {number}</h4>

            <button className="btn btn-primary" onClick={handleClick}> increment</button>

        </div>
    )
}