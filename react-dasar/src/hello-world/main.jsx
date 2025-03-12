import { createRoot } from "react-dom/client"
import HelloWorld from "./helloWorld.jsx"
import Container from "./container.jsx"
import TodoList from "../todo/todoList.jsx"
import Table from "../table/table.jsx"
import AlertButton from "../button/AlertButton.jsx"
import MyButton from "../button/myButton.jsx"


createRoot(document.getElementById("root")).render(
    <Container>
        <HelloWorld />
        <div className="row">
            <div className="col">
                <TodoList />
            </div>
            <div className="col d-flex justify-content-center">
                <Table />
            </div>
            <div className="mt-1 d-flex justify-content-around bg-light p-2 rounded-4">
                <AlertButton text="click me" message="Anjay Click !" />
                <MyButton text="smash me" onSmash={() => alert('you smash me!!!')} />
            </div>
        </div>
    </Container>
)