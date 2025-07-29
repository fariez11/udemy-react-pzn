import { useImmer } from 'use-immer';
import '../assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";

export default function Materi25() {
    return (
        <>
            <TabbedCard noteContent={<Note />} resultContent={<Result />} />
        </>
    );
}

function Note() {
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

function Result() {
    const [item, setItem] = useState("")
    const [items, setItems] = useImmer([])

    function handelChange(e) {
        setItem(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault()
        setItems((draft) => { draft.push(item) })
        setItem("")
    }

    return (
        <>
            <form action="">
                <div className="d-flex gap-3 text-center mb-5">
                    <input type="text" className='form-control w-75' value={item} onChange={handelChange} />
                    <button className='btn btn-primary w-25' onClick={handleClick}> <i className='bi bi-plus-circle'></i> add </button>
                </div>
            </form>

            <h3>List Task</h3>
            {items.map((item, index) => <li className='text-center list-unstyled' key={index}>{item}</li> )}
        </>
    )
}




