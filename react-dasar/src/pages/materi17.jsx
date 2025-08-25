import '@assets/css/NotesPage.css';
import TabbedCard from '../components/tabCard';

export default function Materi17() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <h3>Event Propagation</h3>

            <ul>
                <li>Event di React Component akan selalu disebarkan ke Component yang ada di atasnya (<strong>Event Propagation</strong>).</li>
                <li>Misalnya, kita memiliki <code>&lt;div&gt;</code> dengan event <code>onClick</code>, lalu di dalamnya ada <code>&lt;button&gt;</code> yang juga memiliki <code>onClick</code>.</li>
                <li>Ketika <code>button</code> diklik, maka <code>onClick</code> di <code>button</code> akan terpanggil, dan selanjutnya <code>onClick</code> di <code>div</code> juga akan terpanggil.</li>
                <li>Jika kita tidak ingin hal itu terjadi, maka kita bisa menghentikan proses event propagation tersebut dengan method <code>stopPropagation()</code>.</li>
                <li>Referensi :
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation" target="_blank">
                        MDN - stopPropagation()
                    </a>
                </li>
            </ul>

            <h6>Prevent Default</h6>
            <ul>
                <li>Selain menghentikan Event Propagation, hal yang biasa dilakukan saat membuat Event Handler adalah menghentikan default action menggunakan <code>preventDefault()</code>.</li>
                <li>Misalnya, saat kita membuat Form, dan ketika <code>div</code> dipicu oleh <code>onClick</code>, kita ingin menghentikan aksi submit form secara default.</li>
                <li>Referensi :
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault" target="_blank">
                        MDN - preventDefault()
                    </a>
                </li>
            </ul>
        </>
    )
}


function Result() {

    function Toolbar({ onClick }) {
        return (
            <div className='d-grid gap-2 bg-info-subtle p-4 rounded-3' onClick={onClick}>
                <button className='btn btn-outline-primary' onClick={onClick}>first button</button>
                <button className='btn btn-outline-primary' onClick={onClick}>second button</button>
            </div>
        )
    }

    function SearchForm() {
        return (
            <form className='d-flex' action="">
                <input type="text" className='form-control me-2 w-75'/>
                <button className='btn btn-primary w-25' onClick={(e) => {
                    e.preventDefault();
                    alert('wait searcing ...')
                }}> search</button>
            </form>
        )
    }

    return (
        <>

            <p className='divider c-green mb-2'>menggunakan stopPropagation</p>
            <Toolbar onClick={(e) => { e.stopPropagation(); alert('you click toolbar') }} />

            <p className='divider c-green mt-3 mb-2'>menggunakan preventDefault</p>
            <SearchForm />

        </>
    );
}





