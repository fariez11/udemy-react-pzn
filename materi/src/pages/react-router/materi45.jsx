import TabbedCard from "../../components/tabCard";
import imgServerSideRender from "@assets/img/server-side-render.png"
import imgClientSideRender from "@assets/img/client-side-render.png"

export default function Materi45() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={null} />
    )
}

function Note() {
    return (
        <>
            <h3>Pengenalan Single Page Application</h3>

            <h6>Client atau Server Side</h6>
            <ul>
                <li>Saat kita membuat Web, terdapat dua pilihan yang bisa kita pilih, CSR (Client Side Render) atau SSR (Server Side Render)</li>
                <li>Saat kita menggunakan Frontend Framework seperti React, biasanya pilihan pertama adalah menggunakan CSR (Client Side Render)</li>
                <li>Hal ini akan menjadikan bagian Server tidak menangani halaman Web lagi dan tidak perlu membuat halaman HTML lagi, semua dikerjakan di Client oleh React</li>
                <li>Secara otomatis CSR akan semakin cepat dibandingkan SSR, karena komunikasi ke Server bisa dibuat minimal dan data yang dikirim/diterima terlalu besar</li>
            </ul>
            <div className="row m-0 p-0">
                <div className="col p-0 pe-2">
                    <h6>Diagram Server Side Render</h6>
                    <img src={imgServerSideRender} alt="Diagram Server Side Render" className="img-fluid rounded-end-4 rounded-bottom-4 px-0 d-block mx-auto" style={{ width: "95%" }} />
                </div>
                <div className="col p-0 ps-2">
                    <h6>Diagram Client Side Render</h6>
                    <img src={imgClientSideRender} alt="Diagram Client Side Render" className="img-fluid rounded-start-4 rounded-top-4 px-0 d-block mx-auto" style={{ width: "95%" }} />
                </div>
            </div>


            <h6>Multi Page Application</h6>
            <ul>
                <li>Sebelumnya, ketika belajar React Dasar, kita membuat banyak sekali halaman HTML, dan tiap halaman HTML menampilkan component React</li>
                <li>Hal ini artinya walaupun aplikasi yang sudah kita buat adalah CSR, namun tetap MultiPage</li>
                <li>Problem dengan MPA (Multi Page Application) adalah, setiap berganti halaman maka Browser akan menjalankan ulang</li>
            </ul>
        </>
    )
}
