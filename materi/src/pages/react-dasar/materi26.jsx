import { useImmer } from 'use-immer';
import TabbedCard from '../../components/tabCard';
import { useState } from "react";

export default function Materi26() {
    return (
        <>
            <TabbedCard noteContent={<Note />} resultContent={<Result />} />
        </>
    );
}


function Note() {
    return (
        <>
            <h3>Sharing State</h3>
            <ul>
                <li>
                    Kadang, kita ingin membuat <strong>State</strong> yang digunakan oleh beberapa <em>Component</em> sekaligus dan selalu berubah bersama-sama.
                    Inilah yang disebut dengan <strong>Sharing State</strong>.
                </li>
                <li>
                    Untuk melakukan ini, kita harus memindahkan lokasi State dari masing-masing Component ke <strong>Parent Component</strong>-nya.
                    Kemudian, kita mengirim State tersebut ke anak-anaknya melalui <strong>Props</strong>.
                </li>
                <li>Misalnya, pada kasus <em>Form Task</em>, kita bisa membaginya menjadi dua Child Component:
                </li>
                <ul>
                    <li>Satu untuk <strong>TaskForm</strong></li>
                    <li>Satu lagi untuk <strong>TaskList</strong></li>
                </ul>
                <li>
                    Kita akan membuat <strong>State</strong> di komponen induk (Parent) dan <strong>membagikan</strong> State tersebut ke
                    <code>TaskForm</code> dan <code>TaskList</code> melalui Props, agar kedua komponen tersebut tetap sinkron.
                </li>
            </ul>
        </>

    )
}

function TaskForm({ setItems }) {                             // bisa jadi file sendiri
    const [item, setItem] = useState("")
    const handleChange = (e) => setItem(e.target.value)
    function handleClick(e) {
        e.preventDefault();
        // onSubmit(item);
        // setItems((draft) => draft.push(item));            ~> error dikarenakan Immer tidak memperbolehkan kamu memodifikasi draft dan mengembalikan nilai selain undefined.
        // setItems((draft) => void draft.push(item));       ~> void adalah operator di JavaScript yang: Menjalankan (draft.push(item)) tetapi selalu mengembalikan undefined
        setItems((draft) => {
            draft.push(item)
        })
        setItem("");
    }

    return (
        <>
            <h4 className='text-center'>Create Task</h4>
            <form className='d-flex gap-3 mb-3'>
                <input type="text" className='form-control w-75' value={item} onChange={handleChange} />
                <button className='btn btn-outline-primary w-25' onClick={handleClick}><i className='bi bi-plus-circle'></i> add</button>
            </form>
        </>
    )
}

function TaskList({ items = [] }) {                          // bisa jadi file sendiri
    return (
        <div className='text-center'>
            <h4 className='text-center'>List Task</h4>
            {items.map((item, index) =>
                <li key={index} className='list-unstyled'>{item}</li>
            )}
        </div>
    )
}

function Result() {
    const [items, setItems] = useImmer([])

    return (
        <>
            <TaskForm setItems={setItems} />
            <TaskList items={items} />
        </>
    )
}




