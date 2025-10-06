import TabbedCard from "../../components/tabCard";

export default function Materi56() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <h3>Use Location</h3>
            <ul>
                <li>untuk mendapatkan URL saat ini, sebenarnya kita bisa menggunakan <code>window.location.href</code></li>
                <li>tapi React Router menyediakan Hook <code>useLocation()</code>, yang bisa digunakan untuk mendapatkan lokasi path saat ini</li>
                <li><a href="https://api.reactrouter.com/v7/functions/react_router.useLocation.html" target="_blank">Dokumentasi useLocation</a></li>
                <li>hasil return dari <code>useLocation()</code> adalah object <code>Location</code></li>
                <li>dengan object ini kita bisa dapat informasi lengkap dari location, seperti path, query sampai ke <code>#fragment</code></li>
                <li><a href="https://api.reactrouter.com/v7/interfaces/react_router.Location.html" target="_blank">Interface Location</a></li>
            </ul>

        </>
    )
}