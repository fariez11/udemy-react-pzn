import '../assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";

export default function Materi25() {
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
                <h3>Array di State</h3>
                <ul>
                    <li>
                        Sama seperti <strong>object</strong>, <strong>array</strong> di State juga harus kita perlakukan sebagai data yang <em>immutable</em>.
                    </li>

                    <li>
                        Artinya, untuk melakukan operasi seperti menambah, menghapus, atau mengubah isi array, kita harus membuat array baru lalu memperbarui State dengan array tersebut.
                    </li>

                    <li>
                        Memang hal ini bisa terasa menyulitkan, tapi kita bisa menggunakan bantuan library seperti <strong>Immer</strong> agar lebih mudah menangani array di State.
                    </li>
                </ul>

                <table border="1" cellPadding="6" cellSpacing="0" className=' mt-3 mx-2 text-center'>
                    <thead>
                        <tr>
                            <th>Operasi</th>
                            <th>Hindari</th>
                            <th>Gunakan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Menambah</td>
                            <td><code>push</code>, <code>unshift</code></td>
                            <td><code>concat</code>, <code>[...arr]</code> (spread syntax)</td>
                        </tr>
                        <tr>
                            <td>Menghapus</td>
                            <td><code>pop</code>, <code>shift</code>, <code>splice</code></td>
                            <td><code>filter</code>, <code>slice</code></td>
                        </tr>
                        <tr>
                            <td>Mengubah</td>
                            <td><code>splice</code>, <code>arr[i] = ...</code></td>
                            <td><code>map</code></td>
                        </tr>
                        <tr>
                            <td>Mengurutkan</td>
                            <td><code>reverse</code>, <code>sort</code></td>
                            <td>Buat array baru</td>
                        </tr>
                    </tbody>
                </table>
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




