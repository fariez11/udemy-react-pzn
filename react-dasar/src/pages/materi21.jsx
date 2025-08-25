import '@assets/css/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";
import LoggerDisplay from '../components/logDisplay';

export default function Materi21() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}


function Note() {
    return (
        <>
            <h3>Render</h3>

            <p>
                Sebelum <strong>Component</strong> yang kita buat ditampilkan di layar, component harus dirender oleh React.
                Oleh karena itu, kita perlu tahu bagaimana proses React bekerja ketika menampilkan Component yang kita buat.
            </p>

            <p className='m-0'>
                Terdapat <strong>3 proses</strong> dalam menampilkan component di React:
            </p>
            <ul>
                <li>Trigger proses render</li>
                <li>Melakukan proses render Component</li>
                <li>Menempatkan hasil render Component ke DOM (Document Object Model)</li>
            </ul>
            <p className='text-center'>jadi</p>
            <p className='text-center'>
                Trigger Render <span className="mx-2">&rarr;</span> Render Component <span className="mx-2">&rarr;</span> Commit to DOM
            </p>

            <h6 >Trigger Render</h6>
            <ul>
                <li>Pemicu render biasanya terjadi karena 2 hal:
                    <ul>
                        <li>Inisialisasi awal component, yang dilakukan menggunakan method <code>render()</code></li>
                        <li>Terjadi perubahan <strong>state</strong></li>
                    </ul>
                </li>
                <li>Setiap kali terjadi perubahan state, React secara otomatis akan mengantrikan proses render ulang</li>
            </ul>

            <h6>Render Component</h6>
            <ul>
                <li>Setelah trigger terjadi, React akan memanggil component untuk mengetahui apa yang perlu ditampilkan di layar</li>
                <li>Rendering adalah proses React memanggil component kita</li>
                <li>Saat inisialisasi awal, React akan memanggil Root Component (paling atas)</li>
                <li>Saat render ulang, React hanya akan memanggil ulang component yang state-nya berubah</li>
                <li>Setelah proses render selesai, React melanjutkan ke proses commit</li>
            </ul>

            <h6>Commit Changes</h6>
            <ul>
                <li>Setelah render selesai, React menyimpan perubahan ke <strong>DOM</strong></li>
                <li>Untuk inisialisasi awal (DOM masih kosong), React akan menggunakan <code>appendChild()</code> untuk menambahkan elemen baru ke DOM</li>
                <li>Saat render ulang, React akan membandingkan DOM lama dan hasil render, lalu hanya mengubah bagian yang berbeda</li>
                <li>React menghindari perubahan besar, dan hanya akan mengubah DOM jika elemen berbeda dari hasil rendering</li>
            </ul>
        </>
    )
}

function Result() {

    let counter = 0;
    function witoutUseState() {
        counter++;
        console.log(counter);
    }

    let [jumlah, setCount] = useState(0);
    function withUseState() {

        setCount(jumlah + 1);
        console.info("jumlah sebelum diubah", jumlah);
        console.log(jumlah + 1);
    }
    return (
        <div className="row m-0">
            <div className="col-9 row">
                <div className="col">
                    <p className='divider c-warn mb-2'> tanpa menggunakan useState</p>
                    <button className='btn btn-primary d-inline me-3' onClick={witoutUseState}> increment</button>
                    counter : {counter}
                </div>
                <div className="col">
                    <p className='divider c-green mb-2'> menggunakan useState</p>
                    <button className='btn btn-primary d-inline me-3' onClick={withUseState}> increment</button>
                    counter : {jumlah}
                </div>
            </div>
            <div className="col-3 m-0">
                <LoggerDisplay />
            </div>
        </div>
    )
}




