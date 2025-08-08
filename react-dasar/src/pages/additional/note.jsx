import { useState } from "react"

export default function Note({ note, onChange, onDelete }) {

    const [isEditing, setIsEditing] = useState(false);
    let component;

    function handleChangeText(e) {
        const newNote = { ...note, text: e.target.value }
        onChange(newNote)
    }

    if (isEditing) {
        component = (
            <>
                <input type="text" className='form-control ' value={note.text} onChange={handleChangeText} />
                <button className='btn btn-outline-primary btn-sm' onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                <span className={note.done ? 'fst-italic text-secondary' : ''}>{note.text}</span>
                <button className='btn btn-outline-primary btn-sm' onClick={() => setIsEditing(true)} disabled={note.done ? true : false}>Edit</button>
            </>
        )
    }

    function handleChangeDone(e) {
        const newNote = { ...note, done: e.target.checked }
        onChange(newNote)
    }

    return (
        
        <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center gap-2">
                <input type="checkbox" className='form-check-input' id="checkDefault" checked={note.done} onChange={handleChangeDone} />
                {component}
                <button className='btn btn-outline-primary btn-sm' onClick={() => onDelete(note)} disabled={note.done ? true : false }> delete</button>
            </div>
        </div>
    )

}