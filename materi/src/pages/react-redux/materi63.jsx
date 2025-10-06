import TabbedCard from "../../components/tabCard";

export default function Materi63() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={null} />
    )
}

function Note() {
    return (
        <>
            <h3>Store</h3>
            <ul>
                <li>merupakan tempat dimana data <b>State</b> disimpan</li>
                <li>saat menggunakan Redux, kita perlu membuat <b>Store</b> terlebih dahulu</li>
                <li>nanti data State yang dibuat akan kita masukkan ke dalam Store tersebut</li>
                <li>untuk membuat Store, bisa menggunakan function <code>configureStore()</code></li>
                <li><a href="https://redux-toolkit.js.org/api/configureStore" target="_blank">Dokumentasi configureStore</a></li>
            </ul>
        </>
    )
}