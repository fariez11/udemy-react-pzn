import '@assets/css/NotesPage.css';
import '@assets/css/materi11.css'
import TabbedCard from '../components/tabCard';
import { motivations } from '@assets/data/dataObject';

export default function Materi11() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <h3>Style</h3>
            <ul>
                <li>Sampai saat ini, kita hanya membahas HTML dan JS di JSX, lalu bagaimana dengan <strong>CSS</strong>?</li>
                <li>CSS sendiri bukan bagian dari JSX. Jika kita ingin membuat style CSS, kita perlu membuatnya dalam file CSS, atau  langsung di atribut <code>style</code> menggunakan kurung kurawal ganda yang pernah dicontohkan sebelumnya.</li>
                <li>Namun, kali ini kita akan mencoba menggunakan file CSS.</li>
                <li>Dalam JSX, untuk menambahkan style, kita tidak menggunakan atribut <code>class</code>, melainkan menggunakan <code>className</code>.</li>
                <li>Lihat dokumentasi lebih lanjut tentang penerapan CSS pada JSX di sini :</li>
            </ul>
            <a href="https://react.dev/reference/react-dom/components/common#applying-css-styles" target="_blank" rel="noopener noreferrer">
                React Docs - Applying CSS Styles
            </a>
        </>
    )
}

function Result() {

    const slicedMotivations = motivations.slice(7);
    const MotivationCard = ({ quote, translation }) => (
        <div className="card example text-center">
            <div className="card-title">{quote}</div>
            <div className="card-translation">{translation}</div>
        </div>
    );

    return (
        <div className="p-2">
            {slicedMotivations.map((item, index) => (
                <MotivationCard key={index} quote={item.en} translation={item.idn} />
            ))}
        </div>
    )
}





