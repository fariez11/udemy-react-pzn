import '@assets/NotesPage.css';
import TabbedCard from '../components/tabCard';


export default function Materi6() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <h3>Component</h3>
            <ul>
                <li><strong>React Component</strong> mendukung semua elemen <strong>HTML</strong> dan <strong>SVG</strong>.</li>
                <li>Jadi kita tidak perlu khawatir saat membuat Component, karena semua elemen DOM yang umum <em>pasti didukung</em>.</li>
                <li>
                    Dokumentasi lengkap:{' '}
                    <a href="https://react.dev/reference/react-dom/components" target="_blank" rel="noopener noreferrer">
                        https://react.dev/reference/react-dom/components
                    </a>
                </li>
            </ul>

            <h6>Multiple Component</h6>
            <ul>
                <li>Sebelumnya, kita membuat <em>satu file JSX</em> untuk <strong>satu Component</strong>.</li>
                <li>Meskipun itu adalah <em>praktek yang baik</em>, <strong>bukan berarti wajib dilakukan</strong>.</li>
                <li>Component pada dasarnya hanyalah sebuah <strong>function</strong> yang mengembalikan <strong>React Element</strong>.</li>
                <li>
                    Maka dari itu, kita bisa:
                    <ul>
                        <li>Membuat banyak Component dalam satu file (misalnya untuk komponen kecil).</li>
                        <li>Atau tetap memisahkan file untuk keterbacaan dan perawatan kode.</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}


function Result() {
    return (
        <div className="card text-center py-5 my-2">
            <h5 className='fw-lighter'>
                halaman ini adalah hasil dari component yang sudah kamu buat
            </h5>
            <h5 className='fw-lighter'>Selamat & Semangat Belajar :)</h5>
            <h5>You can do it!</h5>
            <h5 className='fw-lighter'>ingat!</h5><h5>Success is MENTALITY!</h5>
        </div>
    )
}





