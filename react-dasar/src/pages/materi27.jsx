import '@assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";

export default function Materi27() {
    return (
        <>
            <TabbedCard noteContent={<Note />} resultContent={<Result />} />
        </>
    );
}

function Note() {
    return (
        <>
            <h3>Mempertahankan State</h3>
            <ul>
                <li>State di React bersifat terisolasi antar <em>Component</em>. React melacak State berdasarkan <strong>posisi komponen</strong> di dalam struktur UI.</li>
                <li>Kita bisa mengatur kapan ingin <strong>mempertahankan</strong> State dan kapan ingin <strong>mereset</strong> State.</li>
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

            <h6 className='text-danger'>*Note</h6>
            <ul>
                <li>
                    Walaupun jenis komponennya berbeda, jika <strong>posisinya masih sama</strong>, maka State-nya <strong>tidak akan berubah</strong>.
                    React tetap mempertahankan State mengikuti struktur UI.
                </li>
                <li>
                    begitupun juga ketika posisinya berubah maka otomatis statenya akan hilang atau ketika Component juga tidak ada di posisi tersebut
                    (termasuk jika Component tersebut berganti. ex: counter jadi form) maka otomatis statenya juga akan dihapus
                </li>
            </ul>
        </>
    )
}

function CounterPage({ name = "" }) {
    const [counter, setCounter] = useState(0)

    function handleClick() {
        setCounter(counter + 1)
    }
    return (
        <div className='d-flex justify-content-around bg-secondary-subtle bg-opacity-25 rounded-1 py-1'>
            <button className='btn btn-outline-primary btn-sm' onClick={handleClick}>increment</button>
            <h4 className='my-auto'>counter {name}: {counter}</h4>
        </div>
    )
}

function Result() {
    const [show, setShow] = useState(true)
    function handleChange(e) {
        setShow(e.target.checked)
    }

    return (
        <div className='d-flex flex-column gap-1 mx-3'>
            <div className="form-check form-switch d-flex justify-content-center mb-3">
                <input className="form-check-input me-2" type="checkbox" value="" id="checkNativeSwitch" switch onChange={handleChange} checked={show} />
                <p className='my-auto'>ubah ini untuk melihat perubahan</p>
            </div>
            <p className='divider c-info'> hide show component</p>
            <div className="row px-2">
                <div className="col">
                    <CounterPage className="col" />
                </div>
                <div className="col">
                    {show && <CounterPage />}
                </div>
            </div>

            <p className='divider c-info mt-5 mb-2'> menimpa component dengan component</p>
            <div className='px-2'>
                {show ? <CounterPage name="zhafira" /> : <CounterPage name="khairunnisa" />}
                <span className='text-body-tertiary fst-italic'> *kenapa angkanya tidak ter<b>reset</b> ? karena sebenarnya state angka diatas bukan milik nama yang bersangkutan melainkan milik component yang berada di posisi tersebut</span>
            </div>
        </div>
    )
}




