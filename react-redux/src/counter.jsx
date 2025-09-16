// import Button from "react-bootstrap/Button";
import * as Icon from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import  { increment, decrement, reset, getDoubleCounter } from "./counterSlice.jsx";

export default function Counter(){
    
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const resultDouble = useSelector(getDoubleCounter)

    function tambah(){
        dispatch(increment())
    }

    function kurang(){
        dispatch(decrement())
    }

    function ulang(){
        dispatch(reset())
    }

    return (
        <>
            <h3 className="my-5">hasil = {counter}</h3>
            <div className="d-flex gap-3">
                <button className="rounded-2" onClick={tambah}>tambah</button>
                <button className="rounded-2" onClick={() => dispatch(increment(2))}>tambah 2</button>
                <button className="rounded-2" onClick={ulang}><Icon.BsArrowCounterclockwise /> </button>
                <button className="rounded-2" onClick={kurang}>kurang</button>
                <button className="rounded-2" onClick={() => dispatch(decrement(2))}>kurang 2</button>
            </div>
        </>
    )
}