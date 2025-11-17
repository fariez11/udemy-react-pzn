import TabbedCard from '../../components/tabCard';
import { useState } from 'react';
import Title from '../../components/title';

export default function Materi19() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <Title text={'Hooks'} additional={false} />
            <ul>
                <li>adalah fitur di <strong>React</strong> yang bisa digunakan di dalam <em>Component</em>.</li>
                <li>Ada banyak sekali fitur yang bisa kita gunakan melalui React Hooks.</li>
                <li>Materi Hooks akan dibahas secara bertahap.</li>
                <li>Dokumentasi resmi:
                    <a href="https://react.dev/reference/react/hooks" target="_blank" rel="noopener noreferrer">
                        https://react.dev/reference/react/hooks
                    </a>
                </li>
            </ul>

            <h6>*tambahan dari gpt</h6>
            <table border="1" cellPadding="8" cellSpacing="0">
                <thead>
                    <tr className='text-center'>
                        <th>Hooks</th>
                        <th>Fungsi</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr>
                        <td><code>useEffect</code></td>
                        <td>Menjalankan kode saat component mount / update / unmount</td>
                    </tr>
                    <tr>
                        <td><code>useRef</code></td>
                        <td>Menyimpan referensi ke elemen DOM atau nilai tanpa render ulang</td>
                    </tr>
                    <tr>
                        <td><code>useContext</code></td>
                        <td>Mengakses data dari React Context</td>
                    </tr>
                    <tr>
                        <td><code>useReducer</code></td>
                        <td>Alternatif <code>useState</code> untuk state yang kompleks</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}


function Result() {

    const [count, setCount] = useState(0);
    const tambah = () => setCount(count + 1);
    const kurang = () => setCount(count - 1);

    return (
        <div className='text-center'>
            <h2>Counter: {count}</h2>
            <div className="d-flex gap-2 justify-content-center">
                <button className='btn btn-outline-primary' onClick={kurang}><i className='bi bi-dash-circle'></i></button>
                <button className='btn btn-outline-primary' onClick={tambah}><i className='bi bi-plus-circle'></i></button>
            </div>
        </div>
    )
}





