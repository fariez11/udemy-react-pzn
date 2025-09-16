import { useDispatch, useSelector } from "react-redux"
import { getDoubleCounter } from "./counterSlice"
import Form from "react-bootstrap/Form"
import { useState } from "react";


export default function CounterDouble() {
    const [number, setNumber] = useState(1);
    const resultDouble = useSelector(getDoubleCounter)
    const multipleCounter = useSelector((state) => state.counter * number)

    return (
        <div style={{ backgroundColor: '#3C3F43' }} className="p-3 rounded-bottom-4 text-center">
            <span className="fst-italic rounded-4 px-2 pb-1" style={{ backgroundColor: 'rgba(0,0,0, 0.2)' }}>double counter component</span>
            <div className="row m-0 mt-3">
                <div className="col">
                    <h4 className="my-3">double <br /> counter = {resultDouble}</h4>
                </div>
                <div className="col">
                    <Form.Range min={1} max={10} className="mt-2 mx-auto text-center" style={{ width: '100px' }} placeholder="Normal text" value={number} onChange={(e => setNumber(e.target.value))} />
                    <h4 className="my-2">hasil * {number} = {multipleCounter}</h4>
                </div>
            </div>
        </div>
    )

}