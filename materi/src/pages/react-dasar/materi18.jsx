import TabbedCard from '../../components/tabCard';
import Title from '../../components/title';

export default function Materi18() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <Title text={'Side Effect'} additional={false} />
            <ul>
                <li><strong>Apakah komponen boleh memiliki Side Effect (efek samping)?</strong></li>
                <ul>
                    <li>Tentu saja boleh.</li>
                    <li>Namun, biasanya efek samping muncul karena adanya interaksi dari pengguna, misalnya melalui <em>event handler</em>.</li>
                </ul>

                <li><strong>Contoh Side Effect:</strong></li>
                <ul>
                    <li>Mengubah teks di halaman saat tombol diklik.</li>
                    <li>Menampilkan pesan ke <code>console</code> (console.log).</li>
                    <li>Mengakses atau mengubah DOM secara langsung.</li>
                </ul>
            </ul>
            <h6>Catatan: DOM Manipulation</h6>
            <ul>
                <li>Sebelumnya kita sering menggunakan <em>DOM Manipulation</em> untuk mengubah elemen HTML.</li>
                <li>Dalam React, pendekatan ini tidak disarankan secara langsung.</li>
                <li>Alasannya: bisa membuat data dan tampilan menjadi tidak sinkron jika perubahan terjadi dari berbagai sumber/event.</li>
                <li>React lebih menyarankan menggunakan <strong>state</strong> dan <strong>props</strong> untuk mengelola perubahan UI.</li>
            </ul>
        </>
    )
}


function Result() {

    function handleClick(e) {
        e.preventDefault();
        const name = document.getElementById('textName').value
        document.getElementById('textHello').innerText = `Halo ${name}`
    }

    return (
        <>
            <p className='divider c-green mb-2'>tidak direkomendasikan (karena masih menggunakan DOM) </p>
            <form className="d-flex">
                <input type="text" className="form-control w-75 me-2" id='textName' />
                <button type="submit" className="btn btn-primary w-25" onClick={handleClick}>say hello</button>
            </form>
            <h4 id='textHello' className='fw-lighter mt-3 text-center'>Hello World</h4>
        </>
    )
}





