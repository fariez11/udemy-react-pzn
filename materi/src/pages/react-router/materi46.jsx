import TabbedCard from "../../components/tabCard";

export default function Materi46() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={null} />
    )
}

function Note() {
    return (
        <>
            <Title text={'Router Library'} additional={false} />
            <ul>
                <li>Salah satu hal yang bisa kita lakukan dibanding mengganti-ganti halaman secara manual, adalah menggunakan library khusus untuk itu, yaitu Router Library</li>
                <li>Router Library adalah library yang digunakan agar Component yang ditampilkan bisa berbeda-beda tergantung dari URL yang diakses</li>
                <li>Dengan begitu, kita bisa fokus membuat Component untuk halaman, tidak perlu memikirkan lagi kompleksitas bagaimana cara melakukan routing (menentukan Component mana yang ditampilkan untuk URL diakses)</li>
                <li>Untungnya, banyak sekali Router Library yang tersedia untuk React</li>
            </ul>

            <h6>React Router</h6>
            <ul>
                <li>Ada banyak sekali Router Library yang bisa kita gunakan untuk React</li>
                <li><a href="https://react.libhunt.com/libs/router/react" target="_blank">Daftar Router Library untuk React</a></li>
                <li>Namun pada materi ini, kita akan menggunakan salah satu Router Library yang populer, yaitu adalah React Router</li>
                <li><a href="https://reactrouter.com" target="_blank">React Router Official Website</a></li>
                <li>React Router adalah salah satu library untuk routing yang open source dan saat ini sangat populer digunakan di ekosistem React</li>
                <li><a href="https://github.com/remix-run/react-router" target="_blank">React Router GitHub Repository</a></li>
            </ul>

        </>
    )
}

function Result() {
    return (
        <></>
    )
}