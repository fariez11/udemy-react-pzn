import '../assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";

export default function Materi23() {
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
                <h3>State Update</h3>
                <ul>
                    <li>seperti yang sebelumnya dibahas, melakukan update State berkali-kali, tidak akan mengubah data State di Snapshoot saat itu, melainkan hanya memicu untuk render ulang dengan data State baru</li>
                    <li>tapi, kadang-kadang, kita memang mungkin ada keperluan untuk mengubah data di State yang sama berkali-kali</li>
                    <li>dan jika kita memang ingin mengubah data di State dengan data yang harapannya sudah diubah sebelumnya (walaupun
                        belum di render ulang)</li>
                    <li>kita bisa menggunakan lambda sebagai parameter ketika memanggil function untuk update data State</li>
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




