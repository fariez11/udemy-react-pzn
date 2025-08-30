import '@assets/css/NotesPage.css';
import TabbedCard from '../../components/tabCard';
import { useImmer, useImmerReducer } from 'use-immer';
import NoteList from '../additional/note/noteList';
import NoteForm from '../additional/note/noteForm';
import { learningList } from '../../assets/data/dataObject';

export default function Materi29() {
    return (
        <>
            <TabbedCard noteContent={<Catatan />} resultContent={<Result />} />
        </>
    );
}

function Catatan() {
    return (
        <>
            <h3>Reducer</h3>
            <ul>
                <li>Sebelumnya kita sudah bahas banyak tentang <strong>Hooks State</strong> menggunakan <code>useState()</code>.</li>
                <li>Selain itu, terdapat fitur Hooks State lain, yaitu <strong>Reducer</strong>, menggunakan <a href="https://react.dev/reference/react/useReducer" target="_blank">useReducer</a>.</li>
            </ul>

            <h6>Reducer</h6>
            <ul>
                <li>Pada kasus membuat Component yang memiliki banyak proses update State, kadang menyulitkan untuk maintain-nya,
                    karena banyak Event Handler yang harus dibuat juga untuk mengubah data State-nya.</li>
                <li>Pada kasus seperti ini, kita bisa mengkonsolidasi semua logic untuk update State di sebuah Function di luar Component,
                    atau kita sebut dengan <em>reducer</em>.</li>
            </ul>

            <h6>Menggunakan Reducer</h6>
            <ul>
                <li>Sekarang kita akan fokus ke NoteApp-nya.</li>
                <li>Kita bisa lihat bahwa terdapat 3 aksi untuk update notes: <em>add</em>, <em>update</em>, dan <em>delete</em>.
                    Itu semua disimpan di dalam function yang berbeda-beda dan Event Handler yang berbeda-beda juga.</li>
                <li>Menggunakan reducer agak sedikit berbeda dengan mengubah State secara langsung — alih-alih memberi tahu React apa yang harus
                    dilakukan dengan mengubah State, menggunakan Reducer kita memberi tahu React apa yang sudah dilakukan pengguna (<em>action</em>),
                    lalu implementasi logic dari action tersebut dilakukan di tempat yang terpisah.</li>
            </ul>

            <h6>Membuat Reducer Function</h6>
            <ul>
                <li>Reducer Function adalah kode dimana kita menyimpan logic kita. Reducer Function memiliki dua parameter: <code>state</code> saat ini
                    dan <code>action</code> object.Return dari function tersebut adalah state selanjutnya.</li>
            </ul>

            <h6>useImmer</h6>
            <ul>
                <li>Library <code>use-immer</code> juga mendukung Reducer, sehingga kita bisa lebih mudah karena kita bisa mengedit data draft dibanding
                    membuat data baru dari State yang ada. Kita bisa menggunakan method <code>useImmerReducer()</code>.</li>
            </ul>

            <h6><span className='text-danger'>*additional</span></h6>
            <ul>
                <li>Hasilnya tetap sama, tetapi secara kode agak sedikit berbeda karena saat menggunakan <strong>reducer</strong> (terutama dengan <code>useImmerReducer</code>),
                    logika pengelolaan state dipusatkan dalam satu fungsi <code>reducer</code>, sehingga komponen menjadi lebih ringkas dan terstruktur,
                    sementara sebelum menggunakan reducer logika perubahan state tersebar di setiap event handler.</li>
            </ul>
        </>
    )
}

// ======== Data & Reducer ========
let id = 0;

function NoteReducer(catatan, action) {
    // --- Sebelum mengguanakan immer ---
    // switch (action.type) {
    //     case "ADD_NOTE":
    //         return [...catatan, { id: id++, text: action.text, done: false }];
    //     case "UPDATE_NOTE":
    //         return catatan.map((note) =>
    //             note.id === action.note.id ? action.note : note
    //         );
    //     case "DELETE_NOTE":
    //         return catatan.filter((note) => note.id !== action.note.id);
    //     default:
    //         return catatan;
    // }

    // --- Setelah mengguanakan immer ---
    if (action.type === "ADD_NOTE") {
        catatan.push({ id: id++, text: action.text, done: false });
    }
    if (action.type === "UPDATE_NOTE") {
        const index = catatan.findIndex((note) => note.id === action.id);
        catatan[index].text = action.text;
        catatan[index].done = action.done;
    }
    if (action.type === "DELETE_NOTE") {
        const index = catatan.findIndex((note) => note.id === action.id);
        catatan.splice(index, 1);
    }
}

function Result() {
    const [notes, setNotes] = useImmer(learningList);

    function handleAddNote(text) {
        setNotes((draft) => {
            draft.push({ id: id++, text, done: false });
        });
    }

    function handleChangeNote(note) {
        setNotes((draft) => {
            const index = draft.findIndex((item) => item.id === note.id);
            draft[index] = note;
        });
    }

    function handleDeleteNote(note) {
        setNotes((draft) => {
            const index = draft.findIndex((item) => item.id === note.id);
            draft.splice(index, 1);
        });
    }

    // --- Sesudah menggunakan Reducer ---
    const [catatan, dispatch] = useImmerReducer(NoteReducer, learningList);

    function handleAddNoteReducer(text) {
        dispatch({ type: "ADD_NOTE", text: text });
    }

    function handleChangeNoteReducer(note) {
        dispatch({ ...note, type: "UPDATE_NOTE" });
    }

    function handleDeleteNoteReducer(note) {
        dispatch({ type: "DELETE_NOTE", id: note.id });
    }

    return (
        <div>
            <h3 className='mb-1'>Note App</h3>
            <div className="row mx-0">
                <div className="col">
                    <p className='divider c-green my-3'>sebelum menggunakan reducer</p>
                    <NoteForm onAddNote={handleAddNote} />
                    <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
                </div>
                <div className="col">
                    <p className='divider c-info my-3'>setelah menggunakan reducer</p>
                    <NoteForm onAddNote={handleAddNoteReducer} />
                    <NoteList notes={catatan} onChange={handleChangeNoteReducer} onDelete={handleDeleteNoteReducer} />
                </div>
                <span className='text-center text-muted mt-3'>*perbedaan ada di bagian code</span>
            </div>
        </div>
    )
}




