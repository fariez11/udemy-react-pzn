import '@assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import { ProfileContext } from './additional/profile (30-31)/profileContext';
import Profile from './additional/profile (30-31)/profile';
import ProfileAddress from './additional/profile (30-31)/profileAddress';

export default function Materi30() {
    return (
        <>
            <TabbedCard noteContent={<Catatan />} resultContent={<Result />} />
        </>
    );
}

function Catatan() {
    return (
        <>
            <h3>Context</h3>

            <h6>Context</h6>
            <ul>
                <li>Selain menggunakan State Hooks seperti <code>useState()</code> dan <code>useReducer()</code>, ada juga hooks lain yaitu <code>useContext()</code>.</li>
                <li><a href="https://react.dev/reference/react/useContext">Referensi useContext</a></li>
                <li>Context biasanya digunakan untuk mengirimkan informasi dari Parent Component ke Child Component melalui props.</li>
                <li>Namun, jika Anda harus mengirim informasi melalui banyak komponen, maka pengelolaan props menjadi lebih rumit.</li>
                <li>Misalnya, jika memiliki satu informasi yang digunakan oleh banyak komponen, maka mengirimkan ke semua komponen melalui props akan menjadi sulit dikelola.</li>
                <li><strong>Context</strong> memungkinkan Parent Component untuk membuat informasi yang bisa digunakan oleh semua komponen di bawahnya, terlepas dari seberapa dalam struktur komponen tersebut.</li>
                <li>Banyak yang mengatakan bahwa Context adalah <strong>Global State</strong>.</li>
            </ul>

            <h6>Membuat Context</h6>
            <ul>
                <li>Untuk membuat Context, kita menggunakan function <code>createContext()</code>. <a href="https://react.dev/reference/react/createContext">Referensi createContext</a></li>
                <li>Setelah membuat Context, kita bisa mengaksesnya menggunakan <code>useContext()</code>. <a href="https://react.dev/reference/react/useContext">Referensi useContext</a></li>
                <li>Untuk mengubah data di dalam Context, kita menggunakan <code>Provider</code> yang terdapat pada Context. 
                Semua komponen di bawahnya secara otomatis akan mendapatkan nilai yang diubah dalam Context Provider. 
                <a href="https://react.dev/reference/react/createContext#provider">Referensi Provider di Context</a></li>
            </ul>
        </>
    )
}

function Result() {
    return (
        <div className='text-center'>
            <ProfileContext.Provider value="Zhafira">
                <h3>Profile App</h3>
                <Profile />
                <ProfileAddress />
            </ProfileContext.Provider>
        </div>
    )
}




