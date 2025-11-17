import { useEffect, useState, useRef } from "react";
import TabbedCard from "../../components/tabCard";
import Product from "../additional/product/Product";
import Title from "../../components/title";


export default function Materi35() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )
}

function Note() {
    return (
        <>
            <Title text={'Effect'} additional={false} />

            <h6>Effect Hooks</h6>
            <ul>
                <li>Beberapa komponen mungkin perlu berkomunikasi dengan sistem eksternal, misalnya berkomunikasi dengan Non-React Component, berkomunikasi dengan Server, dll.</li>
                <li>Effect Hooks memungkinkan kita untuk membuat kode yang dijalankan setelah proses render, sehingga kita bisa berkomunikasi dengan sistem di luar React.</li>
                <li>Effect terjadi setelah proses render selesai.</li>
                <li>Untuk membuat Effect, kita bisa menggunakan <code>useEffect()</code>.</li>
                <li>Referensi: <a href="https://react.dev/reference/react/useEffect" target="_blank">https://react.dev/reference/react/useEffect</a></li>
            </ul>

            <h6>Kenapa Tidak Cukup dengan Event Handler?</h6>
            <ul>
                <li>Kita tahu bahwa komponen harus bersifat Pure dan tidak memiliki efek samping.</li>
                <li>Untuk kode yang memiliki efek samping, biasanya kita menggunakan Event Handler.</li>
                <li>Namun, kadang ada kebutuhan untuk membuat komponen yang memang memiliki efek samping sesuai dengan respons dari Server (di sinilah Effect Hooks dibutuhkan).</li>
            </ul>

            <h6>Infinite Loop</h6>
            <ul>
                <li>Secara default, Effect akan dieksekusi setelah proses render.</li>
                <li>Kita perlu hati-hati, karena jika dalam Effect kita mengubah State, maka bisa terjadi infinite loop yang menyebabkan proses render ulang terus-menerus tanpa henti.</li>
            </ul>

            <h6>Effect Clean Up</h6>
            <ul>
                <li>Pada beberapa kasus, kita mungkin perlu melakukan sesuatu setelah eksekusi Effect selesai dilakukan.</li>
                <li>Misalnya, pada blok try-catch terdapat blok finally. Di Effect juga terdapat proses yang disebut dengan Clean Up.</li>
                <li>Clean Up akan dieksekusi setelah proses Effect selesai.</li>
                <li>Cara melakukannya cukup mudah, kita tinggal mengembalikan <code>Closure Function</code> di dalam Effect.</li>
            </ul>
        </>
    )
}

function Result() {
    const [products, setProducts] = useState([])
    const loaded = useRef(false)

    useEffect(() => {
        if (loaded.current === false) {             // agar tidak terjadi infinite loop
            fetch('/data/products.json')
                .then(response => response.json())
                .then(data => {
                    setProducts(data)
                    loaded.current = true
                })
        }

        return () => {
            console.log('Product List component unmounting');

        }
    })

    return (
        <>
            <h4 className="text-center">Product List</h4>
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
