import { useEffect, useState } from "react";
import TabbedCard from "../components/tabCard";
import Product from "./additional/product/Product";

export default function Materi37() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )
}

function Note() {
    return (
        <>
            <h3>Async Code di `useEffect`</h3>

            <p>
                Ketika berinteraksi dengan sistem eksternal seperti memanggil API atau melakukan operasi asynchronous lainnya,
                sering kali kita menggunakan kode <strong>Async Await</strong>.
                Namun, ada beberapa hal yang perlu diperhatikan saat menggunakan <code>async/await</code> di dalam <code>useEffect</code>.
            </p>

            <h6>Kenapa `useEffect` Tidak Mendukung Async Function?</h6>
            <p>
                <code>useEffect</code> di React tidak bisa langsung menjalankan fungsi <code>async</code> karena <code>useEffect</code> mengharapkan fungsi yang bersifat <strong>synchronous</strong>.
                Jika kita menggunakan <code>async</code> langsung di dalam <code>useEffect</code>, fungsi tersebut akan mengembalikan sebuah <strong>Promise</strong>,
                yang bisa menyebabkan perilaku yang tidak diinginkan.
            </p>

            <h6>Alternatif Menggunakan `Promise` di `useEffect`</h6>
            <p>
                Jika kita tidak ingin menggunakan <code>async/await</code>, kita bisa langsung menggunakan <code>Promise</code> di dalam <code>useEffect</code>.
                Dengan begitu, kita bisa menangani operasi asynchronous tanpa harus mengubah <code>useEffect</code> menjadi asynchronous.
            </p>

            <h6>Jika Ingin Menggunakan Async Await</h6>
            <p>
                Jika kita memang ingin menggunakan <code>async/await</code>, kita perlu membuat fungsi <code>async</code> terpisah yang kemudian dipanggil di dalam <code>useEffect</code>.
                Ini akan menjaga agar <code>useEffect</code> tetap bersifat synchronous dan memudahkan kita untuk menangani operasi asynchronous dengan cara yang lebih bersih.
            </p>

            <h6>Ringkasan</h6>
            <ul>
                <li><code>useEffect</code> tidak langsung mendukung fungsi <code>async</code> karena mengharapkan fungsi synchronous.</li>
                <li>Kita bisa menggunakan <code>Promise</code> di dalam <code>useEffect</code> tanpa harus menggunakan <code>async/await</code>.</li>
                <li>Jika ingin menggunakan <code>async/await</code>, buatlah fungsi <code>async</code> terpisah yang dipanggil di dalam <code>useEffect</code>.</li>
            </ul>

        </>
    )
}

function Result() {
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState('')

    function handleClick() {
        setLoad(true)
    }

    useEffect(() => {
        setMessage('Data loaded successfully')
    })

    useEffect(() => {

        async function fetchProducts() {
            const response = await fetch('/data/products.json');
            const data = await response.json();
            setProducts(data);
        }


        if (load) {   // agar tidak terjadi infinite loop
            fetchProducts()
        }

        return () => {
            console.log('Product List component unmounted');
        }
    }, [load]) // dependency array, jika ada perubahan pada load maka useEffect akan dijalankan kembali

    return (
        <>
            <h4 className="text-center">Product List</h4>
            <div className="text-center my-2">
                {/* <button className="btn btn-success" onClick={handleClick}><i className={`bi ${!load ? 'bi-eye' : 'bi-eye-slash'}`}></i> </button> */}
                {!load ? <button className="btn btn-success" onClick={handleClick}><i className="bi bi-eye"></i></button> : <span className="text-success">{message}</span>}
            </div>
            <div className="row m-0 justify-content-center">
                {products.map(product => (
                    <div className="col-5">
                        <Product key={product.id} product={product} />
                    </div>
                ))}

            </div>
        </>
    );
}
