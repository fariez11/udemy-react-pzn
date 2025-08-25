import TabbedCard from "../components/tabCard"

export default function Materi38() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )

    function Note() {
        return (
            <>
                <h3>Jangan Gunakan Effect</h3>
                <ul>
                    <li><strong>Effect Hooks</strong> adalah cara di luar kebiasaan biasa di React.</li>
                    <li>Effect memungkinkan kita untuk berinteraksi dengan sistem eksternal seperti Non-React Component, network, dan lain-lain.</li>
                </ul>

                <h6>Jika Tidak Ada Interaksi dengan Sistem Eksternal, Jangan Gunakan Effect</h6>
                <p>
                    Jika aplikasi kita tidak berinteraksi dengan sistem eksternal, maka sebaiknya hindari penggunaan <code>Effect</code>. Dan
                    Mengurangi penggunaan <code>Effect</code> akan membuat kode kita lebih mudah dibaca, lebih cepat dieksekusi, dan lebih minim error.
                </p>

                <h6>Jangan Gunakan Effect untuk Inisialisasi Aplikasi</h6>
                <ul>
                    <li>
                        Terkadang, beberapa proses perlu dilakukan di awal sebelum halaman ditampilkan. Dalam kasus seperti ini,
                        gunakan kode JavaScript langsung di luar React.
                    </li>
                    <li>
                        Jangan menggunakan <code>Effect</code> untuk melakukan inisialisasi aplikasi karena <code>Effect</code> akan dieksekusi setelah render,
                        yaitu setelah halaman ditampilkan, dan akan dieksekusi ulang jika terjadi render ulang.
                    </li>
                </ul>

                <h6>Jangan Gunakan Effect untuk Mengubah Data di Server</h6>
                <ul>
                    <li>Jika ada logika di dalam <code>Effect</code> yang melakukan perubahan data di server, kita harus berhati-hati. </li>
                    <li>
                        karena <code>Effect</code> bisa saja dieksekusi berkali-kali karena render ulang, yang dapat menyebabkan perubahan data di server terjadi 
                        lebih dari yang diinginkan.
                    </li>
                    <li>Sebaiknya gunakan <code>Event Handler</code> jika ingin mengubah data di server sehingga kita dapat mengontrol kapan perubahan tersebut terjadi.</li>
                </ul>

                <h6>Ringkasan</h6>
                <ul>
                    <li>Jika tidak ada interaksi dengan sistem eksternal, hindari penggunaan <code>Effect</code> untuk menjaga kode tetap sederhana dan mudah dipahami.</li>
                    <li>Jangan gunakan <code>Effect</code> untuk inisialisasi aplikasi karena proses tersebut sebaiknya dilakukan langsung dengan JavaScript di luar React.</li>
                    <li>Hindari penggunaan <code>Effect</code> untuk mengubah data di server, karena render ulang dapat menyebabkan perubahan data terjadi berkali-kali.</li>
                    <li>Jika tidak ada interaksi dengan External System, maka sebaiknya jangan gunakan Effect</li>
                </ul>
            </>
        )
    }

    function Result() {
        return (
            <>
            </>
        )
    }
}