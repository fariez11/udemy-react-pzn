import '@assets/css/NotesPage.css';
import React, { useState, useRef } from "react";
import TabbedCard from '../components/tabCard';
import LoggerDisplay from '../components/logDisplay';

export default function Materi22() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
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
                    <li>Memahami konsep Snapshoot akan membantu kita memahami bagaimana cara kerja data di dalam State.</li>
                    <li>Salah satu kesalahan umum adalah berpikir bahwa ketika kita mengubah State, maka data langsung berubah saat itu juga.</li>
                    <li>Padahal, mengubah State sebenarnya hanya <strong>mentrigger proses render ulang</strong> dengan nilai baru.</li>
                </ul>

                <h6 className="mt-3">Kenapa Counter Tidak Berubah 3x?</h6>
                <ul>
                    <li>Hal ini terjadi karena <code>setCounter()</code> tidak langsung mengubah nilai counter pada Snapshoot saat ini.</li>
                    <li><code>setCounter()</code> hanya akan menjadwalkan render ulang dengan nilai counter terbaru.</li>
                    <li>Ketika kita memanggil <code>setCounter()</code> sebanyak 3x berturut-turut dalam satu event handler, React tidak akan langsung melakukan render ulang 3x.</li>
                    <li>React akan menunggu sampai event handler selesai dijalankan, lalu baru menjalankan render ulang sekali saja dengan hasil akhir dari perubahan State.</li>
                </ul>
            </div>
        </div>
    )
}

function Result() {
    let [counter, setCounter] = useState(0)
    let [number, setNumber] = useState(0)
    console.log(`render counter ${counter}`);
    console.log(`render number ${number}`);

    function handleClick() {
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)
        console.log(counter);
    }

    function solution() {
        setNumber(number + 3)
        console.log(number);
    }

    return (
        <div className='row m-0'>
            <div className="col m-auto">
                <p className='divider c-warn'> contoh yang belum benar</p>
                <div className="d-flex justify-content-around mt-3 mb-4">
                    <button className='btn btn-outline-primary' onClick={handleClick}>increment</button>
                    <h4 className='my-auto'>hasilnya : {counter}</h4>
                </div>

                <p className='divider c-green'> contoh yang benar</p>
                <div className="d-flex justify-content-around my-3">
                    <button className='btn btn-outline-primary mb-2' onClick={solution}>increment</button>
                    <h4>hasilnya : {number}</h4>
                </div>
            </div>
            <div className="col">
                <LoggerDisplay />
            </div>
        </div>
    )
}




