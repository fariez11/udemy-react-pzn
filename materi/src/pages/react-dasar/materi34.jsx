import { useRef, useState } from "react";
import TabbedCard from "../../components/tabCard";

export default function Materi34() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <h3>Manipulasi DOM dengan Ref</h3>
            <ul>
                <li>React secara otomatis akan mengupdate DOM ketika melakukan render ulang jadi kita tidak perlu memanipulasi DOM secara manual lagi.</li>
                <li>Tapi, kadang kita mungkin perlu mengakses DOM secara manual, contoh memindahkan fokus ke salah satu element, atau scroll ke element tertentu, dan lain-lain.</li>
                <li>Sayangnya, tidak ada cara untuk melakukan hal ini menggunakan React, jadi kita perlu tangani hal ini secara manual.</li>
                <li>Salah satu cara kita menggunakan Ref menuju DOM element.</li>
            </ul>

            <h6>Ref untuk Component</h6>
            <ul>
                <li>Ref hanya bisa digunakan di DOM element, kita tidak bisa menggunakan ref di Component.</li>
                <li>Jika kita ingin menambahkan Ref ke Component, maka attribute current akan bernilai null.</li>
            </ul>

            <h6>Mengakses Component DOM element</h6>
            <ul>
                <li>Karena Component tidak bisa dijadikan sebagai Ref, oleh karena itu, jika kita ingin menggunakan Ref untuk Component, kita bisa menggunakan props.</li>
                <li>Bisa menggunakan Props ref yang berisi Ref.</li>
                <li>Props ref bisa kita gunakan pada DOM element di dalam Component tersebut.</li>
            </ul>
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
                        <span className="text-body-tertiary ms-2">*perhatikan field nama setelah menampilkan alert</span>
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
