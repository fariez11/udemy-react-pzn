import { useContext } from "react";
import { NotesContext } from "./noteContext";
import Note from "./note";

export default function NoteListContext() {
    const notes = useContext(NotesContext);

    return (
        <ul className="ps-2 mt-3">
            {notes.map((note) => (
                <li key={note.id} className="list-unstyled">
                    <Note note={note} />
                </li>
            ))}
        </ul>
    );
}