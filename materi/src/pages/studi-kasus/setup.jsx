import TabbedCard from "../../components/tabCard";

export default function Setup() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <h3>Setup Backend</h3>
            <h6>Setup CORS</h6>
            <ul>
                <li>saat nanti menjalankan aplikasi di komputer, Backend Project dan Frontend Project akan berjalan di HTTP Port yang berbeda</li>
                <li>secara default, Browser akan melarang ini, dan akan terjadi error CORS (Cors Origin Resource Sharing)</li>
                <li>jadi kita perlu membolehkan hal ini dulu, caranya kita perlu setup di Backend Project dengan menambahkan library CORS untuk ExpressJS</li>
                <li><code>npm install cors</code></li>
            </ul>

            <h3>Setup Frontend</h3>
            <h6>React Use</h6>
            <ul>
                <li>salah satu hooks library yang populer di React adalah react-use, berisi Hooks yang bisa digunakan dengan mudah</li>
                <li>pada materi ini kita akan menggunakan library ini juga untuk membantu mempermudah pembuatan project</li>
                <li><a href="https://github.com/streamich/react-use">Dokumentasi react-use</a></li>
                <li><code>npm i react-use</code></li>
            </ul>

            <h6>Sweet Alert</h6>
            <ul>
                <li>adalah library yang bisa digunakan untuk menampilkan alert yang lebih baik dibandingkan alert bawaan dari Web Browser</li>
                <li><a href="https://sweetalert2.github.io">Dokumentasi SweetAlert2</a></li>
                <li><code>npm i sweetalert2</code></li>
            </ul>

            <h3>Challenge</h3>
            <h6>Implement Index Path</h6>
            <ul>
                <li>buat halaman path <code>/</code></li>
                <li>cek jika user belum login, redirect ke halaman <code>/login</code></li>
                <li>jika user sudah login, redirect ke halaman <code>/dashboard/contact</code></li>
            </ul>

            <h6>Validasi Session di dashboard</h6>
            <ul>
                <li>di semua halaman <code>/dashboard</code></li>
                <li>Validasi jika user belum login, redirect ke halaman <code>/login</code></li>
            </ul>

            <h6>Tailwinds CSS</h6>
            <ul>
                <li>perbaiki cara menggunakan Tailwinds CSS</li>
                <li><a href="https://tailwindcss.com/docs/installation/using-vite">Dokumentasi Tailwind CSS</a></li>
            </ul>

            <h6>Reusable Component</h6>
            <ul>
                <li>pisahkan beberapa bagian yang bisa dijadikan komponen sehingga bisa digunakan ulang tanpa harus membuat kode yang sama</li>
                <li>misalnya: Contact Card, Contact Form (create & edit), Address Form (create & edit), Paging, dan lain-lain</li>
            </ul>

            <h6>Deploy</h6>
            <ul>
                <li>deploy aplikasi Frontend dan Backend di Server, agar bisa diakses via internet</li>
            </ul>
        </>
    )
}