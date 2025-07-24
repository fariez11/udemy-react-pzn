import '../assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";

export default function Materi26() {
    return (
        <>
            <div className="card w-100">
                <Menu />
                <div className="card-body overflow-y-auto" style={{ maxHeight: "calc(99vh - 100px)" }}>
                    <div className="tab-content" id="myTabsContent">
                        <NoteContent />
                        <ResultContent />
                    </div>
                </div>
            </div>
        </>
    );
}

function Menu() {
    return (
        <div className="card-header py-2 px-2 bg-card-header">
            <ul className="nav nav-pills d-flex">
                <li className="nav-item flex-fill text-center me-1" role="presentation">
                    <a className="nav-link active text-success" id="note-tab" data-bs-toggle="tab" data-bs-target="#note"
                        type="button" role="tab" aria-controls="home" aria-selected="true">
                        catatan
                    </a>
                </li>
                <li className="nav-item flex-fill text-center mx-1" role="presentation">
                    <a className="nav-link text-success" id="result-tab" data-bs-toggle="tab" data-bs-target="#result" type="button"
                        role="tab" aria-controls="profile" aria-selected="true">
                        hasil
                    </a>
                </li>
            </ul>
        </div>
    )
}


function NoteContent() {
    return (
        <div className="tab-pane fade show active" id="note" role="tabpanel" aria-labelledby="note-tab">
            <div className="row mx-1 catatan fst-italic">
                <h3>Sharing State</h3>
                <ul>
                    <li>
                        Kadang, kita ingin membuat <strong>State</strong> yang digunakan oleh beberapa <em>Component</em> sekaligus dan selalu berubah bersama-sama.
                        Inilah yang disebut dengan <strong>Sharing State</strong>.
                    </li>
                    <li>
                        Untuk melakukan ini, kita harus memindahkan lokasi State dari masing-masing Component ke <strong>Parent Component</strong>-nya.
                        Kemudian, kita mengirim State tersebut ke anak-anaknya melalui <strong>Props</strong>.
                    </li>
                    <li>
                        Misalnya, pada kasus <em>Form Task</em>, kita bisa membaginya menjadi dua Child Component:
                    </li>
                    <ul>
                        <li>Satu untuk <strong>TaskForm</strong></li>
                        <li>Satu lagi untuk <strong>TaskList</strong></li>
                    </ul>
                    <li>
                        Kita akan membuat <strong>State</strong> di komponen induk (Parent) dan <strong>membagikan</strong> State tersebut ke
                        <code>TaskForm</code> dan <code>TaskList</code> melalui Props, agar kedua komponen tersebut tetap sinkron.
                    </li>
                </ul>

            </div>
        </div>
    )
}

function ResultContent() {
    const [logs, setLogs] = useState([]);
    const logContainerRef = useRef(null);
    const resetLogs = () => {
        setLogs([]);
        console.clear();
    }


    return (
        <div className="tab-pane fade show" id="result" role="tabpanel" aria-labelledby="result-tab">

        </div>
    )
}




