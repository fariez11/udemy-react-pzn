import { useContext, useState } from "react";
import { NoteDispatchContext } from "./noteContext";

export default function Note({ note }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(NoteDispatchContext);

    let component;

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

    function handleChangeText(e) {
        dispatch({ ...note, type: "UPDATE_NOTE", text: e.target.value });
    }

    function handleChangeDone(e) {
        dispatch({ ...note, type: "UPDATE_NOTE", done: e.target.checked });
    }

    function handleDelete() {
        dispatch({ type: "DELETE_NOTE", id: note.id });
    }

    return (
        <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center gap-2">
                <input type="checkbox" className='form-check-input' id="checkDefault" checked={note.done} onChange={handleChangeDone} />
                {component}
                <button className='btn btn-outline-primary btn-sm' onClick={handleDelete} disabled={note.done ? true : false}> delete</button>
            </div>
        </div>
    )
}