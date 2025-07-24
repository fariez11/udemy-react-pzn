import '../assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";

export default function Materi27() {
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
                <h3>Mempertahankan State</h3>
                <ul>
                    <li>
                        State di React bersifat terisolasi antar <em>Component</em>. React melacak State berdasarkan <strong>posisi komponen</strong>
                        di dalam struktur UI.
                    </li>
                    <li>
                        Kita bisa mengatur kapan ingin <strong>mempertahankan</strong> State dan kapan ingin <strong>mereset</strong> State.
                    </li>
                    <li>
                        Perlu dipahami bahwa State tidak benar-benar disimpan di dalam komponen itu sendiri, melainkan dikelola oleh React.
                        Ketika komponen menggunakan State, React memberikan State tersebut berdasarkan posisi komponen dalam UI.
                    </li>
                </ul>

                <h6>Posisi Component</h6>
                <ul>
                    <li>React menyimpan State berdasarkan posisi Component di struktur UI.</li>
                    <li>Jika posisi komponen berubah atau komponen dihapus dari tampilan, maka State-nya juga akan dihapus secara otomatis.</li>
                    <li>Contohnya, jika kita membuat komponen <code>Counter</code> dan kemudian menyembunyikannya, maka ketika komponen itu tidak ditampilkan lagi, React akan menghapus State-nya.</li>
                </ul>

                <h6>Component Sama di Posisi Sama</h6>
                <ul>
                    <li>Jika kita menampilkan komponen yang sama di posisi yang sama dalam struktur UI, maka React akan mempertahankan State-nya.</li>
                    <li>Hal ini bisa membingungkan, tapi sangat penting untuk dipahami karena React mengasosiasikan State dengan posisi dan jenis komponen.</li>
                    <li>Selama posisi dan jenis komponen tetap sama, React tidak akan menghapus atau mengubah State-nya.</li>
                </ul>

                <h6>Kenapa State Masih Sama?</h6>
                <ul>
                    <li>Ini terjadi karena komponen berada di posisi yang sama dalam struktur UI dan memiliki jenis komponen yang sama.</li>
                    <li>React akan otomatis mempertahankan State-nya dalam kondisi seperti ini.</li>
                    <li>Kecuali posisi atau jenis komponen berubah, React tidak akan mereset State-nya.</li>
                </ul>

                <h6><em>Note:</em></h6>
                <ul>
                    <li>
                        Walaupun jenis komponennya berbeda, jika <strong>posisinya masih sama</strong>, maka State-nya <strong>tidak akan berubah</strong>.
                        React tetap mempertahankan State mengikuti struktur UI.
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




