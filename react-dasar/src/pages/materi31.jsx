import '@assets/css/NotesPage.css';
import TabbedCard from '../components/tabCard';
import { ProfileContext } from './additional/profile/profileContext';
import Profile from './additional/profile/profile';
import ProfileAddress from './additional/profile/profileAddress';
import ProfileForm from './additional/profile/profileForm';
import { useState } from 'react';

export default function Materi31() {
    return (
        <>
            <TabbedCard noteContent={<Catatan />} resultContent={<Result />} />
        </>
    );
}

function Catatan() {
    return (
        <>
            <h3>Context & State</h3>

            <h6>Penggunaan Context dan State</h6>
            <ul>
                <li>
                    <strong>Untuk mengubah Context, kita harus menggunakan Provider</strong>.
                    Hal ini karena Context hanya bisa diakses oleh komponen di bawahnya, tidak bisa oleh komponen di atasnya atau yang sejajar.
                </li>
                <li>Selain itu, komponen di bawahnya hanya bisa membaca data dari Context, tidak bisa mengubah data.</li>
                <li>Oleh karena itu, jika ingin membuat data di Context bisa diubah dengan mudah, bisa menggunakan bantuan State.</li>
            </ul>

            <h6>Sebelum Menggunakan Context</h6>
            <ul>
                <li> Context mungkin lebih mudah digunakan dibanding mengirim semua data State melalui Props.</li>
                <li>Tapi, jangan terlalu sering menggunakan Context untuk hal yang sederhana.</li>
                <li>Gunakan Context jika memang perlu. Jika masih sederhana, bisa gunakan State dan Props dulu. Jika sudah terlalu kompleks dan terlalu dalam
                    mengirim Props-nya, baru pertimbangkan untuk mengubahnya ke Context.</li>
            </ul>
        </>
    )
}

function Result() {
    const [name, setName] = useState("Zhafira");

    return (
        <div className='text-center'>
            <ProfileContext.Provider value={name}>
                <h3>Profile App</h3>
                <ProfileForm name={name} setName={setName} />
                <Profile />
                <ProfileAddress />
            </ProfileContext.Provider>
        </div>
    )
}




