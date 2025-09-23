import { useContext, useMemo, useRef, useState } from "react";
import { NotesContext } from "./noteContext";
import Note from "./note";

export default function NoteListContext() {
    const notes = useContext(NotesContext);
    const [search, setSearch] = useState("")
    const searchInput = useRef(null)

    const loc = window.location.pathname;

    const filterNote = useMemo(() => {                                  // contoh menggunakan useMemo (materi 39)
        console.log('Filtering Notes');

        return notes.filter(note => note.text.includes(search))
    }, [notes, search])

    function handleSearch() {
        console.log('search...');

        setSearch(searchInput.current.value)
    }

    return (
        <>
            <ul className="ps-2 mt-3">
                {filterNote.map((note) => (
                    <li key={note.id} className="list-unstyled">
                        <Note note={note} />
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-between gap-2">
                <input type="text" className="form-control" ref={searchInput} />
                <button className="btn btn-outline-success" onClick={handleSearch}><i className="bi bi-search"></i></button>
            </div>
            
            {loc === '/materi-39' ? <span className="text-muted">*perhatikan log</span> : null}
        </>
    );
}