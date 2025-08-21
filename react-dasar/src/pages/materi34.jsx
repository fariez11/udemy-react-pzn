import { useRef, useState } from "react";
import TabbedCard from "../components/tabCard";

export default function Materi34() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );

    function Note() {
        return (
            <>
                <h3>Manipulasi DOM dengan Ref</h3>
            </>
        )
    }

    function GuestBookForm({ ref, name, setName }) {
        return (
            <>
                <div className="col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
                    <input type="text" className="form-control" name="name" value={name} ref={ref}
                        onChange={(e) => setName(e.target.value)} />
                </div>
            </>
        )
    }

    function GuestBook() {
        const [name, setName] = useState("");
        const [message, setMessage] = useState("");

        const nameInput = useRef(null);

        function handleSubmit(e) {
            e.preventDefault();
            setName("");
            setMessage("");

            nameInput.current.focus(); // Fokus kembali ke input nama setelah submit

            alert(`Terima kasih, ${name}! Pesan Anda: "${message}" telah diterima.`);
        }

        return (
            <>
                <div className="card p-3">
                    <h4 className="text-center">Guest Book</h4>

                    <form className="row">
                        <GuestBookForm ref={nameInput} name={name} setName={setName} />
                        <div className="col-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">message</label>
                            <input type="text" className="form-control" name="message" value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <div className="col-12 mt-2">
                            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>show alert</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }


    function Result() {

        return (
            <>
                <GuestBook />
            </>
        );
    }
}