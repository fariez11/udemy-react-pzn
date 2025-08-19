import '@assets/NotesPage.css';
import LoggerDisplay from '../components/logDisplay';
import TabbedCard from '../components/tabCard';
import React, { useState } from "react";

export default function Materi23() {
    return (
        <>
            <TabbedCard noteContent={<Note />} resultContent={<Result />} />
        </>
    );
}


function Note() {
    return (
        <>
            <h3>State Update</h3>
            <ul>
                <li>seperti yang sebelumnya dibahas, melakukan update State berkali-kali, tidak akan mengubah data State di Snapshoot saat itu, melainkan hanya memicu untuk render ulang dengan data State baru</li>
                <li>tapi, kadang-kadang, kita memang mungkin ada keperluan untuk mengubah data di State yang sama berkali-kali</li>
                <li>dan jika kita memang ingin mengubah data di State dengan data yang harapannya sudah diubah sebelumnya (walaupun
                    belum di render ulang)</li>
                <li>kita bisa menggunakan lambda sebagai parameter ketika memanggil function untuk update data State</li>
            </ul>
        </>
    )
}

function Result() {
    let [counter, setCounter] = useState(0)

    function handleClick() {
        setCounter(c => c + 1)                              // perbedaannya 
        setCounter(c => c + 1)
        setCounter(c => c + 1)

        console.log(counter);
    }

    return (
        <div className="row m-0">
            <div className="col-8 m-auto">
                <div className="d-flex justify-content-around mt-3 mb-4">
                    <button className='btn btn-outline-primary' onClick={handleClick}>increment</button>
                    <h4 className='my-auto'>hasilnya : {counter}</h4>
                </div>
            </div>
            <div className="col">
                <LoggerDisplay />
            </div>
        </div>
    )
}




