import { useContext, useState } from "react";
import { NoteDispatchContext } from "./noteContext";

export default function NoteForm() {
    const [text, setText] = useState("");
    const dispatch = useContext(NoteDispatchContext);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        if (text) {
            setText("");
            dispatch({ type: "ADD_NOTE", text: text });
        } else {
            alert("cannot be null");
        }
    }

    return (
        <div className="col-5">
            <div className="d-flex gap-3">
                <input type="text" className="form-control w-75" placeholder="Add Note" value={text} onChange={handleChange} />
                <button className="btn btn-outline-primary w-25" onClick={handleClick}>
                    add
                </button>
            </div>
        </div>
    );
}
