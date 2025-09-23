import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { Table } from "react-bootstrap";
import { removeTodo } from "./todoListSlice";

export default function ListTodo() {

    const todos = useSelector((state) => state.todoList);
    const dispatch = useDispatch();

    return (
        <div className="p-3 rounded-3" style={{ backgroundColor: '#1C1F23' }}>
            <h3 className="mb-4">Todo List</h3>
            <Link className="d-flex justify-content-end mb-2" to={"/todo-list/add"}> add</Link>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td className="text-start">{todo.name}</td>
                            <td>
                                <Link className="me-2" to={`/todo-list/edit/${todo.id}`}>edit</Link>
                                <Link onClick={() => dispatch(removeTodo({ id: todo.id }))}>delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}