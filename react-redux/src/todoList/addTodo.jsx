import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { addTodo } from "./todoListSlice";

export default function AddTodo() {

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleAddTodo() {
        dispatch(addTodo({ name: name }))
        navigate('/todo-list')
    }

    return (
        <div className="p-3 rounded-3" style={{ backgroundColor: '#1C1F23' }}>
            <h3 className="mb-4"> Add Todo</h3>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="enter todo name" onChange={(e) => setName(e.target.value)} />
                <Button onClick={handleAddTodo}>Add</Button>
            </InputGroup>
        </div>
    )
}