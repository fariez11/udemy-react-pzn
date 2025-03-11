import Todo from "./todo.jsx"

export default function TodoList() {
    return (
        <ul>
            <Todo isComplete={true} isDeleted={true} text="Learn HTML" />
            <Todo isComplete={true} text="Learn CSS" />
            <Todo isComplete={true} text="Learn Javascript" />
            <Todo isComplete={false} text="Learn ReactJS" />
            <Todo isComplete={false} text="Learn Angular" />
        </ul>
    )
}