import TabbedCard from "../../components/tabCard";
import Title from "../../components/title";

export default function Materi54() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <Title text={'Use Navigate'} additional={false} />
            <ul>
                <li>pada kasus tertentu, mungkin kita ingin melakukan navigasi dari satu halaman ke halaman lain menggunakan JS</li>
                <li>untuk melakukan ini, React Router menyediakan Hooks <code>useNavigate()</code> <a href="https://api.reactrouter.com/v7/functions/react_router.useNavigate.html" target="_blank">Dokumentasi useNavigate</a></li>
                <li><code>useNavigate()</code> akan mengembalikan function yang bisa kita gunakan untuk berpindah ke halaman lain <a href="https://api.reactrouter.com/v7/interfaces/react_router.NavigateFunction.html" target="_blank">NavigateFunction</a></li>
                <li>kita bisa gunakan parameter Path <a href="https://api.reactrouter.com/v7/interfaces/react_router.Path.html" target="_blank">Path</a></li>
                <li>atau number (<i>untuk maju/mundur</i>)</li>
            </ul>

            <h6>tambahan*</h6>
            <ul>
                <li><b>mundur</b> untuk balik ke halaman sebelumnya → b ~&gt; a</li>
                <li><b>maju</b> untuk balik ke halaman setelah back (mundur) → a ~&gt; b</li>
            </ul>

        </>
    )
}