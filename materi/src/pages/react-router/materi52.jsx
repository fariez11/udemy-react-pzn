import TabbedCard from "../../components/tabCard";
import Title from "../../components/title";

export default function Materi52() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <Title text={'Star Segment'} additional={false} />
            <ul>
                <li>jika route diakhiri dengan <code>/*</code> (star segment), maka itu akan cocok dengan karakter apapun, termasuk karakter <code>/</code> itu sendiri</li>
            <li>misal, ketika kita memiliki path <code>/files/*</code>, maka itu akan cocok dengan <code>/files/contoh</code> dan <code>/files/lagi/contoh</code></li>
            <li>star segment juga bisa diambil nilainya pada <code>useParams()</code></li>
        </ul>

        <h6>Star Segment sebagai Not Found Page</h6>
        <ul>
            <li>apa yang terjadi jika kita mengakses URL path yang tidak tersedia di Router?</li>
            <li>kita akan mendapatkan error bahwa tidak ada route yang cocok dengan path yang kita akses</li>
            <li>salah satu yang biasa dilakukan di React Router adalah, kita bisa menambahkan star segment untuk path <code>/*</code> pada bagian bawah sebagai handler untuk halaman <i>Not Found</i></li>
            <li>sekarang kita bisa buat komponen <code>NotFound</code>, dan registrasikan ke route path <code>/*</code></li>
        </ul>
    </>
    )
}