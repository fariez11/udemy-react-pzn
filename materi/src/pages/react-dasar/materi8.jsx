import '@assets/css/NotesPage.css';
import TabbedCard from '../../components/tabCard';

export default function Materi8() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <h3>JavaScript di JSX</h3>
            <ul>
                <li>Terkadang, kita memiliki kasus di mana kita ingin mengakses kode JavaScript di dalam JSX.</li>
                <li>Pada kasus seperti ini, kita bisa menggunakan <strong>kurung kurawal</strong> untuk menyisipkan kode JavaScript di JSX.</li>
            </ul>

            <h6>Kurung Kurawal di JSX</h6>
            <ul>
                <li>Penggunaan kurung kurawal di JSX hanya bisa dilakukan pada dua lokasi:</li>
                <li>Sebagai teks </li>
                <li>Sebagai nilai atribut pada tag element, misalnya: <code>&lt;img src=&#123;location&#125; /&gt;</code></li>
            </ul>

            <h6>Kurung Kurawal Ganda di JSX</h6>
            <ul>
                <li>Pada beberapa atribut, seperti <code>style</code>, kita bisa menggunakan <em>JavaScript Object</em> sebagai parameter.</li>
                <li>Contohnya: <code>&lt;div style=&#123;&#123; color: 'red', fontWeight: 'bold' &#125;&#125;&gt;Hello&lt;/div&gt;</code></li>
            </ul>
        </>
    )
}


function Result() {
    const text = 'Hello, World!';
    const words = 'Selamat Belajar React dari Programmer Zaman Now';
    const paragraf = {
        color: "#0dcaf0",
        backgroundColor: '#cff4fc',
        padding: "0.5rem",
        borderRadius: "10px",
    }
    return (
        <div className="row mx-1 text-center py-3">
            <p style={{ color: 'salmon', paddingBottom: '0.5rem' }}>{text.toUpperCase()}</p>
            <p style={paragraf}>{words.replaceAll(' ', ('-'))}</p>
        </div>
    );
}




