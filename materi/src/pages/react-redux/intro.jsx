import TabbedCard from "../../components/tabCard";

export default function IntroReactRouter() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={null} />
    )
}

function Note() {
    return (
        <>
            <h3>Intro React Redux</h3>

            <h6>Slide</h6>
            <a href="https://docs.google.com/presentation/d/1BZzs5mGeEU6HIOZgRoAd3b2eDq9Oy8OBPnFN0lcf-iY/edit?usp=sharing" target="_blank">
                https://docs.google.com/presentation/d/1BZzs5mGeEU6HIOZgRoAd3b2eDq9Oy8OBPnFN0lcf-iY/edit?usp=sharing
            </a>

            <h6>Source Code</h6>
            <a href="https://github.com/ProgrammerZamanNow/belajar-reactjs-redux" target="_blank">
                https://github.com/ProgrammerZamanNow/belajar-reactjs-redux
            </a>

            <h6>Global State Management</h6>
            <ul>
                <li>sebelumnya, kita sudah belajar tentang State Management di React, untuk manajemen data di dalam komponen</li>
                <li>kita juga sudah belajar tentang Context, yang digunakan untuk manajemen data dari komponen parent ke child</li>
                <li>lantas bagaimana jika ada kebutuhan data (state) yang memang ingin bisa diakses secara global?</li>
                <li>artinya state bisa diakses dari manapun, komponen manapun, bahkan jika berbeda parent sama sekali, layaknya Global State Management</li>
                <li>jawabannya, kita butuh bantuan sebuah tempat untuk menyimpan state tersebut, atau kita bisa sebut <b>Store</b></li>
            </ul>
        </>
    )
}
