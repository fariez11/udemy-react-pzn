import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import * as Icon from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice.jsx";

export default function Counter() {

    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    function tambah() {
        dispatch(increment())
    }

    function kurang() {
        dispatch(decrement())
    }

    function ulang() {
        dispatch(reset())
    }

    return (
        <div style={{ backgroundColor: '#34373B' }} className="p-3 rounded-top-4">
            <span className="text-start fst-italic rounded-4 px-2 pb-1" style={{ backgroundColor: 'rgba(0,0,0, 0.2)' }}>counter component</span>
            <h3 className="my-3">hasil = {counter}</h3>
            <div className="d-flex gap-3">
                <ButtonGroup>
                    <Button variant="dark" className="px-3" onClick={kurang}>kurang</Button>
                    <Button variant="dark" className="px-3" onClick={() => dispatch(decrement(2))}>kurang 2</Button>
                    <Button variant="dark" className="px-3" onClick={ulang}><Icon.BsArrowCounterclockwise /> </Button>
                    <Button variant="dark" className="px-3" onClick={tambah}>tambah</Button>
                    <Button variant="dark" className="px-3" onClick={() => dispatch(increment(2))}>tambah 2</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}