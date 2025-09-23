import TabCard from "../../components/TabCard"

export default function Materi47_48() {
    return (
        <TabCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <h3>Setup & Membuat Project</h3>
            <h6>Membuat Project</h6>
            <ul>
                <li><code>npm create vite@latest react-router -- --template react</code></li>
                <li>pastikan menggunakan versi react terbaru</li>
            </ul>

            <h6>Menambah Library React Router</h6>
            <ul>
                <li><code>npm i react-router</code></li>
            </ul>

            <h6>Setup</h6>
            <ul>
                <li>berbeda dengan MPA, ketika membuat SPA, kita cukup membuat satu halaman HTML sebagai entry point (titik masuk) semua request</li>
                <li>nanti, penentuan komponen mana yang akan ditampilkan, diurus oleh React Router</li>
            </ul>

            <h6>Browser Router</h6>
            <ul>
                <li>ketika menggunakan React Router, saat melakukan render komponen menggunakan React, kita bisa bungkus aplikasi React kita menggunakan komponen <code>BrowserRouter</code></li>
                <li><a href="https://api.reactrouter.com/v7/functions/react_router.BrowserRouter.html" target="_blank">Dokumentasi BrowserRouter</a></li>
            </ul>
        </>
    )
}