import TabbedCard from "../../components/tabCard";

export default function Materi64() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={null} />
    )
}

function Note() {
    return (
        <>
            <h3>State</h3>
            <ul>
                <li>setelah membuat <b>Store</b>, kita bisa mulai membuat <b>State</b> di Store</li>
                <li>integrasi antara Store dan State dilakukan via <b>Reducer</b></li>
                <li>Redux menggunakan konsep <b>Slice</b> yang merupakan kombinasi dari State + Reducer</li>
                <li>untuk membuat Slice, bisa menggunakan function <code>createSlice()</code></li>
                <li><a href="https://redux-toolkit.js.org/api/createSlice" target="_blank">Dokumentasi createSlice</a></li>
                <li>saat membuat State, kita perlu tentukan <b>initial value</b> (nilai awal)</li>
            </ul>

            <h6>Meregistrasikan Reducer</h6>
            <ul>
                <li>setelah membuat State menggunakan Slice, kita perlu <b>registrasikan Reducer</b> dari Slice tersebut ke dalam Store</li>
            </ul>

            <h6>Menggunakan State</h6>
            <ul>
                <li>untuk menggunakan State yang ada di Store, bisa menggunakan function <code>useSelector()</code></li>
                <li><a href="https://react-redux.js.org/api/hooks#useselector" target="_blank">Dokumentasi useSelector</a></li>
                <li>kita bisa tentukan State mana yang akan digunakan dengan menyebutkan nama state yang sama dengan nama di Slice</li>
            </ul>

            <h6>Immutable State</h6>
            <ul>
                <li>di React, kita diberi function untuk mengubah State</li>
                <li>sedangkan di Redux, hal itu tidak ada</li>
                <li>kita <b>tidak bisa langsung mengubah</b> nilai di State</li>
                <li>untuk mengubah data di State, kita harus menggunakan <b>Action</b></li>
            </ul>

        </>
    )
}