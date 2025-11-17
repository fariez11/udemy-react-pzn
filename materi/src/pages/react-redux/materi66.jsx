import TabbedCard from "../../components/tabCard";

export default function Materi66() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <Title text={'Global State'} additional={false} />
            <ul>
                <li>State yang disimpan di <b>Store</b> bisa diakses secara <b>global</b> dari komponen manapun</li>
                <li>contoh kasus: kita menambahkan elemen di beberapa URL berbeda, meskipun komponennya sama, tetap bisa menggunakan <b>state yang sama</b> karena datanya diambil dari Store</li>
                <li>artinya, meskipun komponen di-render ulang, nilai state tetap konsisten karena bersumber dari Store</li>
            </ul>
        </>
    )
}