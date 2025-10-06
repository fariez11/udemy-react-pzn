import TabbedCard from "../../components/tabCard"

export default function Materi50() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <h3>Outlet</h3>
            <ul>
                <li>saat kita membuat halaman Web, kadang beberapa halaman memiliki Layout yang sama, misal header dan footer nya sama, namun isi contentnya berbeda</li>
                <li>sebenarnya kita bisa menggunakan JSX untuk melakukan ini dengan menggunakan <code>children</code></li>
                <li>namun, React Router memiliki cara yang lebih mudah, kita bisa membuat <code>Route</code> dengan component yang digunakan sebagai Layout</li>
                <li>lalu kita bisa tambahkan <code>Route</code> di dalamnya yang digunakan sebagai children</li>
                <li>namun, kita tidak menggunakan <code>children</code> Prop lagi, melainkan menggunakan Component <code>Outlet</code></li>
                <li><a href="https://api.reactrouter.com/v7/functions/react_router.Outlet.html" target="_blank">Dokumentasi Outlet</a></li>
            </ul>
        </>
    )
}