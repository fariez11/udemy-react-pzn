import '@assets/css/NotesPage.css';
import TabbedCard from '../components/tabCard';


export default function Materi9() {

    const data = {
        text: 'text ini dikirim dari spread syntax melalui props'
    }
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result text={data.text} />} />
    );
}


function Note() {
    return (
        <>
            <h3>Props</h3>
            <ul>
                <li>React Component menggunakan <strong>Props</strong> untuk berkomunikasi.</li>
                <li>Parent Component bisa mengirim informasi ke Child Component dengan menggunakan Props.</li>
                <li>Props itu mirip seperti atribut di HTML element, tetapi kita bisa mengirim nilai JavaScript seperti object, array, function, atau tipe data lainnya.
                </li>
            </ul>
            <h6>Menambah Props</h6>
            <ul>
                <li>Untuk menambahkan Props pada Component, kita hanya perlu menambahkan parameter object pada function di Component.</li>
                <li>Parameter Props tersebut merupakan JavaScript Object, sehingga kita bisa mengakses detail atribut yang dikirim dari parent melalui Props.</li>
            </ul>
            <h6>Destructuring Props</h6>
            <ul>
                <li>Salah satu kebiasaan programmer React adalah melakukan destructuring parameter pada Props.</li>
                <li>Ini mempermudah pembacaan, karena kita bisa langsung melihat atribut apa yang tersedia pada Component tersebut.</li>
                <li>Karena Props adalah JavaScript Object, maka kita juga bisa menambahkan fitur seperti default value pada Props.</li>
            </ul>
            <h6>Mengirim Props</h6>
            <ul>
                <li>Untuk mengirim Props, kita bisa menggunakan atribut seperti pada HTML element saat menggunakan Component.</li>
            </ul>
            <h6>Spread Syntax</h6>
            <ul>
                <li>Terkadang, mengirim Props dari Parent Component ke Child Component bisa terasa merepotkan jika jumlahnya banyak.</li>
                <li>Jika kita hanya ingin meneruskan semua Props ke Child Component tanpa menyebutkan satu per satu, kita bisa menggunakan <strong>Spread Syntax</strong> di JavaScript.
                </li>
            </ul>
        </>
    )
}

function Result({ text = 'mohon maaf, text belum tersedia' }) {
    return (
        <h5 className='text-center'>
            {text.toLocaleUpperCase()}
        </h5>
    )
}





