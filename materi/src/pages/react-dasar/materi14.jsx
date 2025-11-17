import TabbedCard from '../../components/tabCard';
import Title from '../../components/title';

export default function Materi14() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <Title text={'Pure Component'} additional={false} />
            <ul>
                <li>Dalam pemrograman, kita mengenal yang namanya <strong>Pure Function</strong>.</li>
                <li>Sumber: <a href="https://en.wikipedia.org/wiki/Pure_function" target="_blank">https://en.wikipedia.org/wiki/Pure_function</a></li>
                <li>Sebuah function disebut sebagai <strong>Pure Function</strong> jika memenuhi dua kriteria berikut:</li>
                <li>Function akan mengembalikan nilai yang sama untuk nilai parameter yang sama.</li>
                <li>Function tidak memiliki efek samping, tidak ada perubahan pada variable non-local (variable yang berada di luar function).</li>
                <br />
                <li>React mengasumsikan bahwa setiap <strong>Component</strong> yang kita buat adalah <strong>Pure Function</strong>.</li>
                <li>Ini berarti bahwa React Component yang kita buat harus selalu mengembalikan <strong>JSX</strong> yang sama dengan input yang sama.</li>
                <li>Walaupun sebenarnya kita bisa saja membuat React Component yang tidak pure, tapi hal ini sangat tidak disarankan, karena setiap memanggil Component dengan input sama bisa menghasilkan nilai yang tidak konsisten.</li>
                <br />
                <li>Kita harus menghapus efek samping dari Component. Contohnya, kita bisa memindahkan variabel <code>counter</code> menjadi local variable di <code>Table</code>, dan gunakan Props sebagai counternya.</li>
            </ul>
            <h6>Dimana bisa melakukan efek samping?</h6>
            <ul>
                <li>React menyediakan tempat khusus jika kita ingin membuat Component yang bisa menghasilkan efek samping.</li>
                <li>Efek samping dari Component biasanya ditempatkan di <strong>Event Handler</strong>, yaitu aksi yang terjadi ketika berinteraksi dengan Component.</li>
                <li>Atau ketika misalnya Component tergantung dengan external system (misalnya API), maka React menyediakan function <code>useEffect()</code>.</li>
            </ul>

            <p>sumber: <a href="https://react.dev/reference/react/useEffect" target="_blank">https://react.dev/reference/react/useEffect</a></p>
        </>
    )
}


function Result() {

    let counter = 0
    function Row({ text }) {
        counter++
        return (
            <tr>
                <td className='p-1'>{counter}</td>
                <td className='p-1'>{text}</td>
            </tr>
        )
    }

    // solusi
    function PureRow({ id, text }) {
        return (
            <tr>
                <td className='p-1'>{id}</td>
                <td className='p-1'>{text}</td>
            </tr>
        )
    }

    return (
        <>
            <div className="row mx-1">
                <div className="col">
                    <p className='border-start border-4 border-warning bg-warning bg-opacity-10 p-2 rounded-1 mb-1'>tidak direkomendasikan (ada side effectnya) *menggunakan StrictMode</p>
                    <table border='1' className='table-bordered text-center'>
                        <tbody>
                            <Row text="satu" />
                            <Row text="dua" />
                            <Row text="tiga" />
                            <Row text="empat" />
                        </tbody>
                    </table>
                </div>
                <div className="col">
                    <p className='border-start border-4 border-success bg-success bg-opacity-10 p-2 rounded-1 mb-1'>Solusi</p>
                    <table border='1' className='table-bordered text-center'>
                        <tbody>
                            <PureRow id={1} text="satu" />
                            <PureRow id={2} text="dua" />
                            <PureRow id={3} text="tiga" />
                            <PureRow id={4} text="empat" />
                        </tbody>
                    </table>
                </div>
                {/* <div className="col">
                    <LogDisplay />
                </div> */}
            </div>
        </>
    );
}





