import TabbedCard from "../../components/tabCard";
import '@assets/css/intro.css'

export default function introduction() {
    return (
        <TabbedCard noteContent={<Note />} />
    )

    function Note() {
        return (
            <>
                <h3> Pendahuluan</h3>
                <div className="row">
                    <div className="col">
                        <h6>Referensi Slide</h6>
                        <a href="https://docs.google.com/presentation/d/1HmgGmA1LpK78pF3ECQMSDrXEjk6wAgR5yaQxrbR6E18/edit?usp=sharing" target="_blank"> https://docs.google.com/presentation/d/1HmgGmA1LpK78pF3ECQMSDrXEjk6wAgR5yaQxrbR6E18/edit?usp=sharing</a>
                    </div>
                    <div className="col">

                        <h6>Source Code</h6>
                        <a href="https://github.com/ProgrammerZamanNow/belajar-reactjs-dasar" target="_blank">https://github.com/ProgrammerZamanNow/belajar-reactjs-dasar</a>
                       
                    </div>
                </div>
            </>
        )
    }
}