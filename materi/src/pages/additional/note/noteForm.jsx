import { useState } from "react";

export default function NoteForm({ onAddNote }) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        if (text) {
            setText("");
            onAddNote(text);
        } else {
            alert("cannot be null");
        }
    }

    return (
        <div className="d-flex gap-3 mb-3">
            <input type="text" className="form-control w-75" placeholder="Add Note" value={text} onChange={handleChange} />
            <button className="btn btn-outline-primary w-25" onClick={handleClick}>
                add
            </button>
        </div>
    );
}




