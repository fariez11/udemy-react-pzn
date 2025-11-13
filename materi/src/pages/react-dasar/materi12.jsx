import TabbedCard from '../../components/tabCard';
import { todos } from '@assets/data/dataObject';
import Todo from '../additional/Todo';
import Title from '../../components/title';

export default function Materi12() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <Title text={'Conditional'} additional={true} />
            <ul>
                <li>Saat kita membuat halaman web, seringkali kita menampilkan tampilan yang berbeda pada kondisi tertentu.</li>
                <li>Hal ini juga bisa dilakukan di JSX, di mana kita bisa menambahkan kondisi menggunakan JavaScript, dan mengembalikan Component yang berbeda berdasarkan kondisi yang diinginkan.</li>
                <li>Misalnya, kita akan membuat halaman <strong>todoList</strong>, dan jika to-do sudah selesai, kita akan mencoret teks elementnya.</li>
            </ul>
            <h6>Null Component</h6>
            <ul>
                <li>Pada kasus tertentu, mungkin ada kondisi di mana kita ingin mengembalikan Component, atau tidak mengembalikan apapun.</li>
                <li>Kita bisa mengembalikan <code>null</code> untuk menandakan bahwa tidak ada Component yang dikembalikan.</li>
            </ul>
            <h6>Ternary Operator</h6>
            <ul>
                <li>Pada kasus yang lebih sederhana, kita bisa menggunakan <strong>Ternary Operator</strong> JavaScript di JSX.</li>
            </ul>
            <h6>Logical AND</h6>
            <ul>
                <li>Di beberapa kasus yang lebih sederhana, kadang di JSX kita bisa memanfaatkan <strong>Logical AND</strong> di JavaScript.</li>
                <li>Misalnya, jika kondisi terpenuhi, maka akan menampilkan sesuatu, jika tidak terpenuhi, maka tidak ada yang ditampilkan.</li>
            </ul>
        </>
    )
}

function Result() {
    return (
        <div className="d-flex justify-content-center">
            <ul className="list-group w-50">
                {todos.length === 0 ? (
                    <li className="list-group-item text-muted">No todos found</li>
                ) : (
                    <>
                        <Todo key={1} isCompleted={true} text="Belajar HTML dan CSS" isDeleted={true} />
                        <Todo key={2} isCompleted={true} text="Belajar JSX dan Javascript di JSX" />
                        <Todo key={3} isCompleted={true} text="Belajar Props dan Nested Component" />
                        <Todo key={4} isCompleted={true} text="Belajar Style" />
                        <Todo key={5} isCompleted={false} text="Belajar Conditional" />
                    </>
                )}
            </ul>
        </div>
    )
}




