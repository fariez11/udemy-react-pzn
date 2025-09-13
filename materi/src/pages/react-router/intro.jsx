import TabbedCard from "../../components/tabCard";

export default function IntroReactRouter() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )
}

function Note() {
    return (
        <>
            <h3>Intro React Router</h3>

            <h6>Slide</h6>
            <a href="https://docs.google.com/presentation/d/1qoLY7h6c-CC6-fwKO9heCcLdEagiFPB6GycVpDXPUKA/edit?usp=sharing" target="_blank">
                https://docs.google.com/presentation/d/1qoLY7h6c-CC6-fwKO9heCcLdEagiFPB6GycVpDXPUKA/edit?usp=sharing
            </a>

            <h6>Source Code</h6>
            <a href="https://github.com/ProgrammerZamanNow/belajar-reactjs-router" target="_blank">
                https://github.com/ProgrammerZamanNow/belajar-reactjs-router
            </a>
        </>
    )
}

function Result(){
    return (
        <></>
    )
}