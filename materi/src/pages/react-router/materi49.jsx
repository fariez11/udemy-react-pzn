import TabbedCard from "../../components/tabCard"

export default function Materi49() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <h3>Routing</h3>
            <ul>
                <li>adalah pemetaan antara URL, path, dan komponen yang akan ditampilkan</li>
                <li>untuk melakukan Routing, kita bisa menggunakan komponen <code>&lt;Routes&gt;</code></li>
                <li><a href="https://api.reactrouter.com/v7/functions/react_router.Routes.html" target="_blank">Dokumentasi Routes</a></li>
                <li>dan untuk pemetaan tiap Routing nya, kita bisa gunakan komponen <code>&lt;Route&gt;</code></li>
                <li><a href="https://api.reactrouter.com/v7/functions/react_router.Route.html" target="_blank">Dokumentasi Route</a></li>
            </ul>

            <h6>Nested Route</h6>
            <ul>
                <li>saat nanti kita membuat routing, kadang terdapat routing yang memiliki prefix yang sama</li>
                <li>jika kita harus membuat satu per satu, maka akan tidak efektif ketika pembuatan kode nya</li>
                <li>untungnya, React Router mendukung Nested Route</li>
                <li>kita bisa menggunakan komponen <code>&lt;Route&gt;</code> di dalam komponen <code>&lt;Route&gt;</code>, dan secara otomatis Route path diatasnya akan digunakan sebagai prefix path untuk child Routenya</li>
            </ul>

            <h6>Index Route</h6>
            <ul>
                <li>komponen <code>&lt;Route&gt;</code> memiliki atribut spesial bernama <code>index</code></li>
                <li>Atribut ini digunakan sebagai default halaman Index</li>
                <li>ini biasanya digunakan untuk path awal, misal <code>/</code>, atau untuk nested path <code>/data/...</code></li>
                <li>contoh sebelumnya, saat kita membuka <code>/data</code>, maka tidak ada komponen yang ditampilkan, kita bisa tampilkan komponen yang kita mau dengan menggunakan Route Index</li>
            </ul>
        </>
    )
}