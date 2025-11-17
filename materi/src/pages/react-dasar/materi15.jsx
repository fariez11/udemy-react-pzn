import TabbedCard from '../../components/tabCard';
import Title from '../../components/title';

export default function Materi15() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <Title text={'Event Handler'} additional={false} />
            <ul>
                <li>Seperti yang kita tahu di HTML Element, kita bisa menambahkan Event Handler.</li>
                <li>Sama juga dengan React Component, kita bisa menambahkan Event Handler pada Element di React Component.</li>
                <li>Ada banyak sekali jenis Event Handler yang bisa kita tambahkan.</li>
                <li>Lihat referensi resmi :
                    <a href="https://react.dev/reference/react-dom/components/common" target="_blank">
                        klik disini
                    </a>
                </li>
            </ul>

            <h6>Menambah Event Handler</h6>
            <ul>
                <li>Untuk menambah Event Handler, biasanya kita akan tambahkan Function sebagai Handlernya.</li>
                <li>Bisa dalam bentuk Anonymous Function, Arrow Function, atau membuat Function terlebih dahulu di dalam scope Component-nya.</li>
                <li>Nama Function untuk Handler biasanya diawali dengan nama <strong>"handle"</strong> dan diikuti dengan jenis Event Handler, misalnya <code>handleClick()</code>, <code>handleMouseEnter()</code>, dan lain-lain.</li>
            </ul>

            <h6>Membaca props di Event Handler</h6>
            <ul>
                <li>Salah satu keuntungan membuat Function Event Handler di dalam Component adalah, kita bisa membaca Props yang digunakan oleh Component tersebut.</li>
            </ul>

            <h6>Event Handler sebagai Props</h6>
            <ul>
                <li>Seperti yang dibahas di materi Props, Props sebenarnya adalah Javascript Object.</li>
                <li>Javascript Object bisa memiliki atribut dengan tipe function.</li>
                <li>Oleh karena itu, kita juga bisa membuat Event Handler di Props.</li>
                <li>Saat membuat atribut di Props yang berisikan Event Handler, biasanya nama attributenya akan diawali dengan <strong>"on"</strong>, misalnya <code>onSmash</code>, <code>onHit</code>, dan lain-lain.</li>
            </ul>
        </>
    )
}


function Result() {
    function handleClick() {
        alert('Button Clicked')
    }

    function MyButton({ text, onSmash }) {
        return (
            <button className='btn btn-success bg-opacity-10' onClick={onSmash}>{text}</button>
        )
    }

    return (
        <>
            <div className="col d-grid gap-2">
                <button className='btn btn-primary' onClick={handleClick}> named function</button>
                <MyButton text="smash button" onSmash={() => alert('you smash me')}></MyButton>
            </div>
        </>
    );
}





