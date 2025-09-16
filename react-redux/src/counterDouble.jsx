import { useDispatch, useSelector } from "react-redux"
import { getDoubleCounter } from "./counterSlice"

export default function CounterDouble() {
    const dispatch = useDispatch()
    const resultDouble = useSelector(getDoubleCounter)
    const multipleCounter = useSelector((state) => state.counter * 10)

    return (
        <>
            <h3 className="my-5">double counter = {resultDouble}</h3>
            <h3 className="my-5">random counter = {multipleCounter}</h3>
        </>
    )

}