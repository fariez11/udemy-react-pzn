import TabbedCard from "../../components/tabCard";

export default function CreateProject() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={null} />
    )
}

function Note() {
    return (
        <>
            <h3>Setup & Membuat Project</h3>
            <h6>Membuat Project</h6>
            <ul>
                <li><code>npm create vite@latest belajar-react-redux -- --template react</code></li>
                <li>update ke versi 19</li>
                <li>install <code>react-router</code></li>
                <li>install <code>@reduxjs/toolkit</code></li>
                <li>install <code>react-redux</code></li>
            </ul>

            <h6>Setup</h6>
            <ul>
                <li>saat ingin menggunakan Redux, kita harus membuat <b>Provider</b> terlebih dahulu</li>
                <li>caranya: aplikasi yang kita buat dibungkus dalam komponen <code>Provider</code> milik redux</li>
                <li>selanjutnya ada parameter yang wajib dibuat, yaitu <b>Store</b> (materi selanjutnya)</li>
            </ul>


        </>
    )
}