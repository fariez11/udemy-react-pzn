import TabbedCard from '../../components/tabCard';
import React, { useState, useRef } from "react";

export default function Materi28() {
    return (
        <>
            <TabbedCard noteContent={<Note />} resultContent={<Result />} />
        </>
    );
}

function Note() {
    return (
        <>
            <h3>Reset State</h3>
            <ul>
                <li>Bagaimana jika pada kondisi tertentu, kita memang ingin melakukan <strong>Reset State</strong>, tidak mau mempertahankan State-nya?</li>
                <li>Ada beberapa cara yaitu:
                    <ul>
                        <li>Menghapus Component dari tampilan UI (ketika Component hilang dari tampilan UI, secara otomatis State juga akan ikut hilang)</li>
                        <li>dan cara cara dibawah</li>
                    </ul>
                </li>
            </ul>

            <h6>Mengubah dengan Component Lain</h6>
            <ul>
                <li>Ketika posisi yang sama masih ada di struktur UI, tapi component-nya berbeda, maka State akan di-reset secara otomatis.</li>
                <li><em>Contoh:</em> Menampilkan component <code>Counter</code>, lalu diganti menjadi elemen paragraf. Maka State di <code>Counter</code> akan dihapus.</li>
            </ul>

            <h6>Mengubah Posisi Component</h6>
            <ul>
                <li>React menyimpan State berdasarkan Component dan posisinya di dalam tree UI.</li>
                <li>Jika posisi Component diubah atau dipindahkan, maka React akan menganggapnya sebagai Component baru dan State-nya akan di-reset.</li>
            </ul>

            <h6>Posisi Component Berubah</h6>
            <ul>
                <li>Component yang sama namun berada di kondisi yang berbeda atau posisi berbeda juga akan dianggap berbeda oleh React.</li>
                <li>State-nya pun akan berbeda, meskipun secara tampilan (DOM) terlihat sama.</li>
            </ul>

            <h6>Menggunakan Key <em><span className='recomended'>*paling direkomendasikan</span></em></h6>
            <ul>
                <li>Cara yang paling umum dan direkomendasikan untuk mereset State adalah dengan menambahkan <code>key</code> pada Component.</li>
                <li>Ketika Component yang sama ditampilkan di posisi yang sama, jika <code>key</code>-nya berbeda, maka React akan menganggapnya sebagai Component yang berbeda dan State akan di-reset.</li>
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
            <h4 className='my-auto'>score {name}: {counter}</h4>
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

            <p className='divider c-info mt-1 mb-1'> menimpa component dengan element</p>
            <div className='px-2'>
                {show ? <CounterPage name="jo yuri" /> : <p className='text-center'>park gyu young</p>}
            </div>

            <p className='divider c-info mt-3 mb-1'> mengubah posisi component (bukan posisi melainkan struktur)</p>
            {show ?
                (
                    <div className='px-2'>
                        <CounterPage name="Zhafira" />
                    </div>
                ) : (
                    <section>
                        <CounterPage name="Dea" />
                    </section>
                )
            }

            <p className='divider c-info mt-3 mb-1'> posisi component berubah (didalam kondisi yang berbeda)</p>
            {show && <CounterPage name='Dea' />}
            {!show && <CounterPage name='Nisa' />}


            <p className='divider c-info mt-1 mb-1'> menambahkan key</p>
            <div className='px-2'>
                {show ? <CounterPage name="Kim Jun Hee" key="jo yuri" /> : <CounterPage name="Kang No Eul" key="park gyu young" />}
            </div>
        </div>
    )
}




