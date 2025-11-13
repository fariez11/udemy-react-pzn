import TabbedCard from '../../components/tabCard';
import { todos } from '@assets/data/dataObject';
import Todo from '../additional/Todo';
import Title from '../../components/title';

export default function Materi13() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <Title text={'Collection Component'} additional={true} />
            <ul>
                <li>Kita sering kali ingin menampilkan Component yang sama berulang-ulang berdasarkan koleksi data.</li>
                <li>JSX sendiri tidak memiliki fitur perulangan seperti <code>for</code> atau <code>foreach</code>. </li>
                <li>Untuk menampilkan banyak Component, kita memanfaatkan JavaScript, seperti method <code>map()</code> pada array.</li>
                <li>Misalnya, kita bisa mengubah data to-do list menjadi array, dan gunakan <code>map()</code> untuk menampilkan setiap item sebagai Component.</li>
            </ul>

            <h6>Component Key</h6>
            <ul>
                <li>
                    Saat menggunakan method <code>map()</code>, kamu mungkin akan melihat peringatan seperti:
                    <em>"Missing key prop for element iterator"</em>.
                </li>
                <li>React membutuhkan setiap Component dalam list memiliki atribut <code>key</code> yang unik (string atau number).</li>
                <li>Kenapa butuh key? Agar React bisa mengenali Component tersebut ketika ada perubahan, seperti posisi atau isinya.</li>
            </ul>
        </>
    )
}

function Result() {

    // const result = todos.map((todo) => {                         ~> jika menggunakan {}
    //     return <Todo {...todo} />
    // })

    return (
        <ul className='list-group col-6'>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    );

}





