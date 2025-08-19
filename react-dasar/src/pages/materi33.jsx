import '@assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import { useRef, useState } from 'react';

export default function Materi33() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <h3>Ref</h3>
            <ul>
                <li><strong>Ref Hooks</strong>: Fitur Hooks yang lain selain State dan Context, adalah Ref Hooks. Ketika ingin Component mengingat informasi, tapi tidak mau memicu render ulang, maka kita bisa menggunakan Ref.</li>
                <li>Menggunakan Ref Hooks bisa menggunakan method <code>useRef()</code>.</li>
                <li>Dokumentasi lebih lanjut: <a href="https://react.dev/reference/react/useRef" target="_blank">useRef Documentation</a></li>
                <li>Function <code>useRef()</code> mengembalikan object yang memiliki attribute <code>current</code>, dimana attribute <code>current</code> berisi value yang dipegang oleh Ref.</li>
            </ul>
            <div className="px-2 mt-2">
                <table className='table table-striped' border="1">
                    <thead className='text-center'>
                        <tr>
                            <th>Ref</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>useRef(initial)</code> mengembalikan object <code>(current initial)</code></td>
                            <td><code>useState(initial)</code> mengembalikan <code>[value, setValue]</code></td>
                        </tr>
                        <tr>
                            <td>Tidak memicu render ulang ketika diubah</td>
                            <td>Memicu render ulang ketika diubah</td>
                        </tr>
                        <tr>
                            <td>Mutable, bisa dimodifikasi dan diubah current valuenya</td>
                            <td>Immutable, kita hanya bisa mengubah menggunakan function <code>setValue</code></td>
                        </tr>
                        <tr>
                            <td>Tidak direkomendasikan membaca atau menulis current value ketika proses rendering, lebih cocok dibaca atau diubah pada Event Handler</td>
                            <td>Bisa dibaca kapanpun, tapi tiap render akan memiliki Snapshot masing-masing</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

function Timer() {

    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const timer = useRef(null);

    function handleStart() {
        setStart(Date.now());
        setNow(Date.now());

        timer.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
    }


    return (
        <>
            <h4>timer : {now - start} ms</h4>
            <div className="d-flex gap-2">
                <button className='btn btn-outline-info' onClick={handleStart}> <i className='bi bi-play-circle-fill' ></i></button>
                <button className='btn btn-outline-info' onClick={handleStop}> <i className='bi bi-pause-circle-fill'></i></button>
            </div>
        </>
    )
}


function Result() {
    const counter = useRef(0);
    function handleClick(e) {
        alert(`you click me ${counter.current++} times`);
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <button className='btn btn-primary' onClick={handleClick}> click me</button>
                <hr className='w-100' />
                <Timer />
            </div>
        </>

    );
}





