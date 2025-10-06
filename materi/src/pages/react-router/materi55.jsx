import TabbedCard from "../../components/tabCard";

export default function Materi55() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <h3>Use Search Param</h3>
            <ul>
                <li>saat menggunakan URL, kadang kita akan memanfaatkan Query Parameter untuk mengirim data</li>
                <li>React Router menyediakan Hooks <code>useSearchParams()</code> yang bisa kita gunakan untuk mendapatkan data Query Parameter</li>
                <li><a href="https://api.reactrouter.com/v7/functions/react_router.useSearchParams.html" target="_blank">Dokumentasi useSearchParams</a></li>
                <li><code>useSearchParams()</code> akan mengembalikan Array yang berisi object (URLSearchParams dan setter functionnya)</li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams" target="_blank">MDN: URLSearchParams</a></li>
            </ul>

        </>
    )
}