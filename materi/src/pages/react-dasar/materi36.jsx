import { useEffect, useState } from "react";
import TabbedCard from "../../components/tabCard";
import Product from "../additional/product/Product";
import Title from "../../components/title";

export default function Materi36() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )
}
function Note() {
    return (
        <>
            <Title text={'Effect Dependencies'} additional={false} />
            <p>
                <strong>useEffect</strong> di React digunakan untuk menangani efek samping setelah komponen selesai di-render.
                Secara default, <code>useEffect</code> akan dieksekusi setiap kali render selesai, yang berarti efek akan dipanggil setiap kali komponen mengalami perubahan.
            </p>

            <h6>Penggunaan Dependencies</h6>
            <p>
                <code>useEffect()</code> memiliki dua parameter:
            </p>
            <ul>
                <li><strong>Callback function:</strong> Fungsi yang akan dijalankan setelah render selesai.</li>
                <li><strong>Dependencies:</strong> Array yang berisi state atau props yang mengontrol kapan efek harus dijalankan.</li>
            </ul>

            <p>
                Jika salah satu dependencies berubah, <code>useEffect</code> akan dijalankan kembali. Jika tidak ada perubahan pada dependencies, maka efek tidak akan dipanggil lagi.
            </p>

            <h6>Empty Dependencies</h6>
            <p>
                Kadang-kadang, Anda hanya ingin menjalankan <code>useEffect</code> sekali saja setelah komponen pertama kali di-render.
                Dalam kasus seperti itu, Anda bisa menggunakan array kosong (<code>[]</code>) sebagai dependencies.
                Dengan cara ini, efek hanya akan dipanggil sekali setelah render pertama dan tidak akan dipanggil lagi pada render berikutnya.
            </p>

            <h6>Ringkasan</h6>
            <ul>
                <li>Secara default, <code>useEffect</code> dijalankan setiap kali komponen di-render ulang.</li>
                <li>Dependencies array mengontrol kapan <code>useEffect</code> dijalankan ulang, yaitu ketika salah satu dependencies berubah.</li>
                <li>Dengan menggunakan array kosong (<code>[]</code>) sebagai dependencies, <code>useEffect</code> hanya dijalankan sekali pada saat render pertama kali.</li>
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
        if (load) {   // agar tidak terjadi infinite loop
            fetch('/data/products.json')
                .then(response => response.json())
                .then(data => { setProducts(data) })
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
