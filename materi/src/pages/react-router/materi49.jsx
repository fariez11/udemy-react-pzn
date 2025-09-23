import TabbedCard from "../../components/TabCard";

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
        </>
    )
}