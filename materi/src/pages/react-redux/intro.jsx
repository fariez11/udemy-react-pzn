import TabbedCard from "../../components/tabCard";

export default function IntroReactRouter() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )
}

function Note() {
    return (
        <>
            <h3>Intro React Redux</h3>

            <h6>Slide</h6>
            <a href="https://docs.google.com/presentation/d/1BZzs5mGeEU6HIOZgRoAd3b2eDq9Oy8OBPnFN0lcf-iY/edit?usp=sharing" target="_blank">
                https://docs.google.com/presentation/d/1BZzs5mGeEU6HIOZgRoAd3b2eDq9Oy8OBPnFN0lcf-iY/edit?usp=sharing
            </a>

            <h6>Source Code</h6>
            <a href="https://github.com/ProgrammerZamanNow/belajar-reactjs-redux" target="_blank">
                https://github.com/ProgrammerZamanNow/belajar-reactjs-redux
            </a>
        </>
    )
}

function Result(){
    return (
        <></>
    )
}