import '@assets/css/NotesPage.css';
import TabbedCard from '../../components/tabCard';
import { religi } from '@assets/data/dataObject';

export default function Materi7() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} /> 
    );
}

function Note() {
    return (
        <>
            <h3>JSX</h3>
            <ul>
                <li>
                    Web dibuat menggunakan <strong>HTML</strong>, <strong>CSS</strong>, dan <strong>JavaScript</strong>.
                    Biasanya kita menyimpan konten di file HTML, desain di CSS, dan logika aplikasi di JavaScript.
                    Umumnya, file-file ini dipisahkan.
                </li>
                <li>
                    Saat ini, web sudah lebih interaktif. Sering kali, konten HTML ditampilkan berdasarkan logika aplikasi di JavaScript.
                </li>
                <li>
                    Oleh karena itu, <strong>React</strong> menggunakan logika aplikasi dan membuat konten di satu tempat yang sama, yaitu <strong>JSX</strong>.
                </li>
            </ul>

            <h6>Mengubah HTML ke JSX</h6>
            <ul>
                <li>Saat mengubah kode HTML ke JSX, kita tidak bisa langsung <em>copy-paste</em> kodenya.</li>
                <li>JSX memiliki aturan yang lebih ketat dibanding HTML. Contohnya, saat menggunakan tag element, kita wajib menggunakan tag tutup.</li>
                <li>Misalnya, kita tidak bisa menggunakan: <code>&lt;img src=""&gt;</code></li>
                <li>Kita harus menggunakan: <code>&lt;img src=""/&gt;</code></li>
                <li>Beberapa atribut di tag element pun berbeda. Kita akan bahas secara bertahap.</li>
            </ul>

            <h6>Aturan JSX</h6>
            <ul>
                <li>Component hanya boleh mengembalikan satu element. Jika kita ingin mengembalikan beberapa element, kita harus membungkusnya dalam parent element.</li>
                <li>Wajib menutup semua tag element.</li>
                <li>
                    Atribut menggunakan <strong>CamelCase</strong>. Atribut di element JSX akan dikonversi ke variable JS,
                    oleh karena itu nama atribut harus mengikuti cara penulisan variable di JS, yaitu tidak bisa menggunakan tanda strip (<code>-</code>).
                    Contohnya: gunakan <code>className</code> (bukan <code>class-name</code>).
                </li>
            </ul>


            <h6>JSX Converter</h6>
            <p>Jika misalnya kita sudah punya kode HTML dan ingin mengkonversinya ke JSX, disarankan menggunakan converter agar tidak perlu dilakukan secara manual :
                <a href="https://transform.tools/html-to-jsx" target="_blank" rel="noopener noreferrer">https://transform.tools/html-to-jsx</a>
            </p>
        </>

    )
}


function Result() {

    return (
        <ul className="list-group list-group-flush">
            {religi.map((msg, index) => (
                <li key={index} className="list-group-item">
                    <p className="fw-semibold">"{msg.text}"
                        <small className="text-muted  text-end"> - {msg.author}</small>
                    </p>
                    <p className="text-secondary"><em>{msg.translation}</em></p>
                </li>
            ))}
        </ul>
    );
};









