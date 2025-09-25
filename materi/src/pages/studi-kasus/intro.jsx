import TabbedCard from "../../components/tabCard";

export default function IntroCaseStudy() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={null} />
    )
}

function Note() {
    return (
        <>
            <h3>Intro Studi Kasus</h3>

            <h6>Slide</h6>
            <a href="https://docs.google.com/presentation/d/1bgRdARHvPbgRXa3GRLg-nUyRmgMcXiWv0ItgxOLjqh8/edit?usp=sharing" target="_blank">
                https://docs.google.com/presentation/d/1bgRdARHvPbgRXa3GRLg-nUyRmgMcXiWv0ItgxOLjqh8/edit?usp=sharing
            </a>

            <h6>Source Code</h6>
            <a href="https://github.com/ProgrammerZamanNow/belajar-reactjs-contact-management" target="_blank">
                https://github.com/ProgrammerZamanNow/belajar-reactjs-contact-management
            </a>
        </>
    )
}