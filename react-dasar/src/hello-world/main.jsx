import { createRoot } from "react-dom/client"
import HelloWorld from "./helloWorld.jsx"
import Container from "./container.jsx"
import TodoList from "../todo/todoList.jsx"
import Table from "../table/table.jsx"
import AlertButton from "../button/AlertButton.jsx"
import MyButton from "../button/myButton.jsx"
import Toolbar from "../button/toolbar.jsx"
import SearchForm from "../form/searchForm.jsx"
import SayHello from "../form/sayHelloForm.jsx"


createRoot(document.getElementById("root")).render(
    <Container className="overflow-auto min-vh-100">
        <HelloWorld />
        <div className="row">
            <div className="col">
                <TodoList />
            </div>
            <div className="col d-flex justify-content-center">
                <Table />
            </div>
            <div className="mt-1 d-flex justify-content-around bg-light p-2 rounded-3">
                <AlertButton text="click me" message="Anjay Click !" />

                <MyButton text="smash me" onSmash={() => alert('you smash me!!!')} />
            </div>
            <div className="m-0 p-0">
                <Toolbar onClick={(e) => {
                    // e.stopPropagation()
                    e.preventDefault()
                    alert('You click toolbar');
                }} />
            </div>
            <div className="m-0 py-2 px-0">
                <SearchForm />
            </div>
            <div className="m-0 p-0">
                <SayHello />
            </div>
        </div>
    </Container>
)