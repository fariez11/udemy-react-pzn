import '@assets/css/NotesPage.css';
import TabbedCard from '../components/tabCard';
import { motivations } from '@assets/data/dataObject';
export default function Materi10() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <h3>Nested Component</h3>
            <ul>
                <li>JSX mendukung pembuatan <strong>Nested Component</strong>.</li>
                <li>Hal ini memungkinkan kita membuat Component yang di dalamnya bisa ditambahkan Component lain secara dinamis.</li>
                <li>Agar sebuah Component bisa memiliki Component lain di dalamnya, kita bisa menggunakan atribut khusus bernama <code>children</code> pada Props.</li>
                <li>Contohnya, kita bisa membuat Component bernama <code>Container</code> dan mengisinya dengan Component lainnya di dalamnya.</li>
            </ul>
        </>
    )
}

function Result() {
    const firstTen = motivations.slice(0, 10);
    const sortedMotivations = [...firstTen].sort(
        (shorter, longer) => shorter.en.length - longer.en.length
    );

    // Komponen anak
    const MotivationList = ({ items }) => (
        <ul>
            {items.map((item) => (
                <li key={item.id} className="mb-2 list-unstyled">
                    <strong>"{item.en}"</strong>
                    <br />
                    <em>{item.idn}</em>
                </li>
            ))}
        </ul>
    );

    // Komponen utama (parent)
    return (
        <div className='text-center'>
            <h3>Motivasi Hari Ini:</h3>
            <MotivationList items={sortedMotivations} />
        </div>
    );
}





