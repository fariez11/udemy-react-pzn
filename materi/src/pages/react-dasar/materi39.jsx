import TabbedCard from '../../components/tabCard';
import { useImmerReducer } from 'use-immer';
import { NoteDispatchContext, NotesContext } from '../additional/note/context & reducer/noteContext';
import NoteListContext from '../additional/note/context & reducer/noteList';
import NoteForm from '../additional/note/context & reducer/noteForm';
import { learningList } from '../../assets/data/dataObject';
import LoggerDisplay from '../../components/logDisplay';
import Title from '../../components/title';


export default function Materi39() {
    return (
        <TabbedCard noteContent={<Catatan />} resultContent={<Result />} />
    )
}

function Catatan() {
    return (
        <>
            <Title text={'Memo'} additional={false} />
            <h6>Memoization</h6>
            <ul>
                <li>adalah teknik optimasi untuk mempercepat program komputer, dengan cara menyimpan data secara sementara dari hasil kalkulasi (yang biasanya berat), sehingga tidak perlu dilakukan kalkulasi ulang.</li>
                <li>ini adalah bagian dari Performance Hooks, dimana kita bisa menggunakan function <code>useMemo(callback, [dependencies])</code></li>
                <li><a href="https://react.dev/reference/react/useMemo" target="_blank"> Referensi useMemo</a></li>
                <li>ini cocok untuk kasus misal kita perlu memanggil kode yang berat, dan hasilnya selalu sama, dibandingkan kita panggil terus-terusan setiap proses render, lebih baik kita lakukan sekali saja, dan pada proses pemanggilan berikutnya, kita cukup kembalikan hasil yang pertama.</li>
            </ul>
        </>
    )
}

let id = 0;
// const initialNotes = [
//     { id: id++, text: "Learn HTML", done: false },
//     { id: id++, text: "Learn CSS", done: false },
//     { id: id++, text: "Learn Javascript", done: false },
//     { id: id++, text: "Learn React", done: false },
// ];

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
                    <div className="row mx-0">
                        <div className="col-7">
                            <div className="d-flex flex-column align-items-center">
                                <NoteForm />
                                <NoteListContext />
                            </div>
                        </div>
                        <div className="col">
                            <LoggerDisplay />
                        </div>
                    </div>
                </NoteDispatchContext.Provider>
            </NotesContext.Provider>
        </>
    )
}

