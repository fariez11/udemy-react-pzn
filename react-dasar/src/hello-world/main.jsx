import { createRoot } from "react-dom/client"
import HelloWorld from "./helloWorld.jsx"
import Container from "./container.jsx"
import TodoList from "../todo/todoList.jsx"


createRoot(document.getElementById("root")).render(
    <Container>
        <HelloWorld />
        <TodoList />
    </Container>
)