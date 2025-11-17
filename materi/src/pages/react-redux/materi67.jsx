import TabbedCard from "../../components/tabCard";

export default function Materi67() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <Title text={'Selector'} additional={false} />
            <ul>
                <li>sebelumnya kita sudah bisa mendapatkan data <b>State</b> menggunakan <code>useSelector()</code></li>
                <li>kadang kita ingin membuat <b>fungsi khusus</b> untuk mengambil data dari State → inilah yang disebut <b>Selector</b></li>
                <li>Reducer <b>bukan</b> untuk mengambil data dari State, melainkan untuk mengubah State</li>
                <li>untuk mengambil data yang lebih detail (misalnya hasil perhitungan), kita bisa membuat <b>Selector manual</b></li>
            </ul>

            <h6>Selector dengan Parameter</h6>
            <ul>
                <li>mirip dengan Action, Selector juga bisa ditambahkan <b>Parameter</b></li>
                <li>misalnya kita buat selector baru yang menerima parameter <code>kalinya</code>, agar pengguna bisa menentukan pengali dari data yang diambil</li>
            </ul>
        </>
    )
}