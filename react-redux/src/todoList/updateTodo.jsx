import { useState } from "react";
import { useNavigate, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { updateTodo, getTodo } from "./todoListSlice";

export default function UpdateTodo() {

    const param = useParams();
    const todo = useSelector((state) => getTodo(state, Number(param.id)));
    const[name, setName] = useState(todo.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleUpdateTodo() {
        dispatch(updateTodo({id: todo.id, name: name}))
        navigate('/todo-list')
    } 

    return (
        <div className="p-3 rounded-3" style={{ backgroundColor: '#1C1F23' }}>
            <h3 className="mb-4">Edit Todo</h3>
            <Form.Control type="text" value={name} placeholder="enter todo name" onChange={(e) => setName(e.target.value)} />
            <Button onClick={handleUpdateTodo}>edit</Button>
        </div>
    )
}