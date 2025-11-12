import TabbedCard from '../../components/tabCard';
import { useImmerReducer } from 'use-immer';
import { NoteDispatchContext, NotesContext } from '../additional/note/context & reducer/noteContext';
import NoteListContext from '../additional/note/context & reducer/noteList';
import NoteForm from '../additional/note/context & reducer/noteForm';
import { learningList } from '../../assets/data/dataObject';


export default function Materi32() {
    return (
        <>
            <TabbedCard noteContent={<Catatan />} resultContent={<Result />} />
        </>
    );
}

function Catatan() {
    return (
        <>
            <h3>Context & Reducer</h3>
            <ul>
                <li>Sebelumnya kita sudah bahas tentang Reducer, sama seperti State, Reducer juga bisa kita integrasikan dengan Context.</li>
                <li>Pada kasus ketika membuat Component yang sudah kompleks, dan menggunakan Reducer, kita bisa mengirim State dan Reducer menggunakan Context ke Child Component.</li>
                <li>Sehingga lebih mudah dibanding menggunakan Props.</li>
                <li>Misal kita coba modifikasi halaman Notes yang sebelumnya sudah kita buat:</li>
            </ul>

            <h6>Pindahkan Event Handler</h6>
            <ul>
                <li>Karena method Dispatch ada di Context, jadi kita tidak perlu mengirim Event Handler lagi dari Parent Component ke Child Component melalui Props.</li>
                <li>Kita bisa langsung pindahkan ke Child Component, karena Child Component bisa mengakses Dispatch Function.</li>
            </ul>
        </>
    )
}

let id = 0;

function NoteReducer(catatan, action) {
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
    const [notes, dispatch] = useImmerReducer(NoteReducer, learningList);

    return (
        <>
            <NotesContext.Provider value={notes}>
                <NoteDispatchContext.Provider value={dispatch}>
                    <h3>Note App</h3>
                    <div className="d-flex flex-column align-items-center">
                        <NoteForm />
                        <NoteListContext />
                    </div>
                </NoteDispatchContext.Provider>
            </NotesContext.Provider>
        </>
    )
}




