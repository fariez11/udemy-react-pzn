import TabbedCard from "../../components/tabCard";

export default function Materi65() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={null} />
    )
}

function Note() {
    return (
        <>
            <h3>Action</h3>
            <ul>
                <li><b>Action</b> di Redux sebenarnya adalah Reducer, namun cara membuatnya lebih mudah</li>
                <li>kita bisa membuat Action dengan cara membuat semua function Reducer di <b>Slice</b></li>
                <li>secara otomatis, nama function Reducer akan bisa dipakai sebagai Action di Redux</li>
            </ul>

            <h6>Immer Library</h6>
            <ul>
                <li>React menyarankan agar data di State bersifat <b>Immutable</b></li>
                <li>di materi React Dasar kita sudah belajar tentang <b>Immer Library</b> untuk mempermudah</li>
                <li>saat menggunakan Redux, Redux secara otomatis sudah menggunakan Immer Library ketika memakai Reducer</li>
                <li>dengan begitu, kita tidak perlu melakukan copy data manual, karena sudah otomatis dilakukan oleh Immer</li>
            </ul>

            <h6>Memanggil Action</h6>
            <ul>
                <li>setelah membuat Action menggunakan Reducer, kita bisa memanggil Action tersebut dengan <b>dispatch</b></li>
                <li>untuk membuat Dispatch, gunakan function <code>useDispatch()</code></li>
                <li><a href="https://react-redux.js.org/api/hooks#usedispatch" target="_blank">Dokumentasi useDispatch</a></li>
                <li>selanjutnya, gunakan Action yang sudah dibuat untuk menentukan Reducer mana yang akan dipanggil</li>
            </ul>

            <h6>Action Parameter</h6>
            <ul>
                <li>kadang kita ingin mengirim <b>parameter</b> di Action</li>
                <li>semua parameter yang dikirim di Action otomatis akan disimpan di attribute <code>payload</code> pada parameter ke-2 di Reducer</li>
                <li>contoh: saat memanggil <code>increment(2)</code>, maka Reducer akan menerima <code>(state, action)</code> di mana:
                    <ul>
                        <li><code>action.type</code> = "counter/increment"</li>
                        <li><code>action.payload</code> = 2</li>
                    </ul>
                </li>
                <li><b>payload</b> bisa berupa tipe data apapun: number, string, array, object, dll</li>
            </ul>

        </>
    )
}