import { useImmer } from 'use-immer';
import '../assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";

export default function Materi24() {
    return (
        <>
            <TabbedCard noteContent={<Note />} resultContent={<Result />} />
        </>
    );
}


function Note() {
    return (
        <>
            <h3>Object di State</h3>
            <ul>
                <li>
                    State bisa menyimpan jenis data JavaScript apapun, termasuk <strong>Object</strong>.
                    Namun, tidak disarankan untuk <em>mengubah langsung</em> object yang terdapat di State.
                </li>
                <li>
                    Jika ingin mengubah object di State, sebaiknya buat object baru terlebih dahulu, lalu ubah State menggunakan object baru tersebut.
                </li>
            </ul>

            <h6>Immutable Data</h6>
            <ul>
                <li>Kita harus memperlakukan data di State sebagai data yang <strong>immutable</strong> (tidak bisa diubah langsung).</li>
                <li>Artinya, data di State hanya digunakan untuk dibaca, bukan diubah langsung.</li>
                <li>Jika ingin mengubahnya, kita harus menggunakan object baru, bukan memodifikasi yang lama.</li>
                <li>Meskipun object di JavaScript secara default tidak immutable, React menyarankan prinsip ini untuk mencegah masalah.</li>
                <li>Mengubah data langsung tidak akan memicu proses render ulang.</li>
                <li>JavaScript menyediakan <strong>spread syntax</strong> untuk membantu meng-copy atribut object saat membuat salinan.</li>
            </ul>

            <h6>Nested Object</h6>
            <ul>
                <li>Kadang kita menyimpan <strong>nested object</strong> di dalam State.</li>
                <li>Prinsipnya tetap sama: selalu buat object baru saat ingin mengubah State.</li>
                <li>Namun, nested object yang terlalu dalam bisa menyulitkan. Sebaiknya hindari struktur object yang terlalu dalam.</li>
            </ul>

            <h6>Immer Library</h6>
            <ul>
                <li>Salah satu solusi populer untuk mengelola object immutable adalah dengan menggunakan library <strong>Immer</strong>.</li>
                <li>Immer memudahkan kita membuat object baru tanpa harus menyalin secara manual menggunakan spread syntax.</li>
                <li>Sangat berguna saat mengelola object kompleks dan nested.</li>
                <li><a href="https://github.com/immerjs/immer" target="_blank">https://github.com/immerjs/immer</a></li>
            </ul>

            <h6>Use Immer Library</h6>
            <ul>
                <li>Immer juga bisa diintegrasikan langsung dengan React State melalui library <strong>use-immer</strong>.</li>
                <li>Kita hanya perlu mengganti <code>useState()</code> dengan <code>useImmer()</code>.</li>
                <li>Untuk mengupdate State, kita cukup menggunakan function sebagai parameter update-nya.</li>
                <li>Install dengan: <code>npm i immer use-immer</code></li>
                <li><a href="https://github.com/immerjs/use-immer" target="_blank">https://github.com/immerjs/use-immer</a></li>
            </ul>
        </>
    )
}

function Result() {

    const initialData = {
        name : "",
        message : ""
    }
    
    const [contact, setName] = useState(initialData)
    const changeName = (e) => setName({ ...contact, name: e.target.value })
    
    const [detail, setMessage] = useImmer(initialData)
    function changeMessage (e){
        setMessage(draft => {
            draft.message = e.target.value
        })
    } 

    return (
        <div className='row p-2'>
            <div className="col">
                <h4>Contact Form</h4>
                <form>
                    <input type='text' className='form-control mb-2' placeholder='before you use the immer' value={contact.name} onChange={changeName} />
                    <textarea type='text' className='form-control' placeholder='after used' value={detail.message} onChange={changeMessage} />
                </form>
            </div>
            <div className="col">
                <h4>Contact Detail</h4>
                <p>Name : {contact.name}</p>
                <p>Message : {detail.message}</p>
            </div>
        </div>
    )
}




