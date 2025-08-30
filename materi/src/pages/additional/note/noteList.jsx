import Note from './note';

export default function NoteList({ notes, onChange, onDelete }) {
    return (
        <ul className="ps-2">
            {notes.map((note) => (
                <li key={note.id} className="list-unstyled">
                    <Note note={note} onChange={onChange} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}

