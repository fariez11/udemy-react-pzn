import '@assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";

export default function Materi22() {
    return (
        <>
            <div className="card w-100">
                <Menu />
                <div className="card-body overflow-y-auto" style={{ maxHHeight: "calc(99vh - 100px)" }}>
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
                <h3>Snapshoot</h3>
                <ul>
                    <li>
                        Variabel <strong>State</strong> sekilas mungkin terlihat seperti variabel JavaScript biasa.
                        Tapi sebenarnya, State itu lebih mirip seperti <em>snapshoot</em>—yaitu kondisi saat itu.
                    </li>
                    <li>
                        Mengubah nilai State <strong>tidak langsung mengubah Snapshoot saat ini</strong>, tetapi akan
                        memicu proses render ulang agar React membuat Snapshoot baru berdasarkan nilai terbaru.
                    </li>
                    <li>
                        Kita mungkin berpikir bahwa tampilan web berubah secara langsung karena respon dari event (misalnya tombol diklik).
                        Namun sebenarnya, seperti yang sudah dijelaskan sebelumnya, perubahan tampilan terjadi karena proses render ulang akibat perubahan State.
                    </li>
                </ul>

                <h6>Kesalahan Umum dalam Mengubah State</h6>
                <ul>
                    <li>
                        Memahami konsep Snapshoot akan membantu kita memahami bagaimana cara kerja data di dalam State.
                    </li>
                    <li>
                        Salah satu kesalahan umum adalah berpikir bahwa ketika kita mengubah State, maka data langsung berubah saat itu juga.
                    </li>
                    <li>
                        Padahal, mengubah State sebenarnya hanya <strong>mentrigger proses render ulang</strong> dengan nilai baru.
                    </li>
                </ul>

                <h6 className="mt-3">Kenapa Counter Tidak Berubah 3x?</h6>
                <ul>
                    <li>
                        Hal ini terjadi karena <code>setCounter()</code> tidak langsung mengubah nilai counter pada Snapshoot saat ini.
                    </li>
                    <li>
                        <code>setCounter()</code> hanya akan menjadwalkan render ulang dengan nilai counter terbaru.
                    </li>
                    <li>
                        Ketika kita memanggil <code>setCounter()</code> sebanyak 3x berturut-turut dalam satu event handler, React tidak akan langsung melakukan render ulang 3x.
                    </li>
                    <li>
                        React akan menunggu sampai event handler selesai dijalankan, lalu baru menjalankan render ulang sekali saja dengan hasil akhir dari perubahan State.
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

    let counter = 0;
    function witoutUseState() {
        counter++;
        console.log(counter);

        setLogs((prev) => [...prev, counter]);
    }

    let [jumlah, setCount] = useState(0);
    function withUseState() {

        setCount(jumlah + 1);
        console.info("jumlah sebelum diubah", jumlah);
        console.log(jumlah + 1);

        setLogs((prev) => [...prev, jumlah + 1]);
    }
    return (
        <div className="tab-pane fade show" id="result" role="tabpanel" aria-labelledby="result-tab">

        </div>
    )
}




