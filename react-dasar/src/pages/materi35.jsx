import TabbedCard from "../components/tabCard";

export default function Materi35() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )

    function Note() {
        return ('')
    }

    function Result() {
        return (
            <></>
        )
    }


}