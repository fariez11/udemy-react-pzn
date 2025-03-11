import { createRoot } from "react-dom/client"
import HelloWorld from "./helloWorld.jsx"
import Container from "./container.jsx"



createRoot(document.getElementById("root")).render(
    <Container>
        <HelloWorld />
    </Container>
)