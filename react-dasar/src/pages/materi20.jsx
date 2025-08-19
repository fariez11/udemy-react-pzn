import '@assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import React, { useState, useRef } from "react";
import LoggerDisplay from '../components/logDisplay';

export default function Materi20() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <div className="tab-pane fade show active" id="note" role="tabpanel" aria-labelledby="note-tab">
            <div className="row mx-1 catatan fst-italic">
                <h3>State</h3>
                <p>
                    Component kadang perlu berubah karena interaksi pengguna. Misalnya:
                </p>
                <ul>
                    <li>Input diklik bisa menaikkan data counter</li>
                    <li>Tombol "next" bisa mengubah gambar banner yang sedang muncul</li>
                    <li>Dan lain-lain</li>
                </ul>
                <p>
                    Component harus bisa mengingat nilai saat ini, seperti counter saat ini, gambar saat ini, dan lain-lain.
                    Di React, memori spesifik di komponen ini disebut <strong>State</strong>.
                </p>

                <h6 > State Menggunakan Local Variable Biasa</h6>
                <ul>
                    <li>Apakah local variable biasa di komponen bisa digunakan untuk State? Sayangnya tidak bisa.</li>
                    <li>
                        Ketika React merender ulang komponen (render kedua dan seterusnya), semua kode komponen akan dieksekusi ulang,
                        sehingga nilai local variable akan kembali ke nilai awal.
                    </li>
                    <li>
                        Perubahan di local variable juga tidak akan memicu render ulang komponen.
                    </li>
                </ul>

                <h6> useState</h6>
                <ul>
                    <li>Untuk membuat State, kita bisa menggunakan function <code>useState(initial)</code>.</li>
                    <li>
                        Function <code>useState</code> akan mengembalikan array dengan 2 nilai:
                        <ol>
                            <li>Nilai state saat ini</li>
                            <li>Function untuk mengubah nilai state tersebut</li>
                        </ol>
                    </li>
                    <li>
                        Component yang menggunakan State ini akan otomatis di-render ulang ketika state-nya berubah.
                    </li>
                    <li>
                        Referensi: <a href="https://react.dev/reference/react/useState" target="_blank">
                            https://react.dev/reference/react/useState
                        </a>
                    </li>
                </ul>

                <h6> State Terisolasi dan Private</h6>
                <ul>
                    <li>State merupakan data yang terisolasi dan bersifat private secara lokal terhadap Component yang menggunakannya.</li>
                    <li>
                        Artinya, jika kita me-render <b>Component</b> yang sama berkali-kali, maka State dari tiap Component tersebut akan terpisah
                        satu sama lain. (*setiap Component memiliki State-nya sendiri-sendiri, walaupun Component tersebut sama)
                    </li>
                </ul>
            </div>
        </div>
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
        <div className="tab-pane fade show" id="result" role="tabpanel" aria-labelledby="result-tab">
            <div className="row m-0">
                <div className="col-4">
                    <p className='divider c-warn mb-2'> tanpa menggunakan useState</p>
                    <button className='btn btn-primary d-inline me-3' onClick={witoutUseState}> increment</button>
                    counter : {counter}
                </div>
                <div className="col-4">
                    <p className='divider c-green mb-2'> menggunakan useState</p>
                    <button className='btn btn-primary d-inline me-3' onClick={withUseState}> increment</button>
                    counter : {jumlah}
                </div>
                <div className="col m-0">
                    <LoggerDisplay />
                </div>
            </div>
        </div>
    )
}




