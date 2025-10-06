import TabbedCard from "../../components/tabCard";

export default function Materi53() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <h3>Navigation</h3>
            <ul>
                <li>salah satu yang biasa kita lakukan saat membuat web adalah berpindah dari satu halaman ke halaman lainnya</li>
                <li>biasanya untuk berpindah halaman, kita menggunakan Anchor Element, yaitu menggunakan tag <code>&lt;a&gt;</code></li>
                <li>namun permasalahannya adalah, ketika menggunakan Anchor Element, browser akan melakukan reload ke halaman baru</li>
                <li>hal ini artinya halaman akan dimuat ulang, termasuk object React juga akan dibuat ulang semuanya</li>
                <li>hal ini mungkin akan memperlambat proses perpindahan halaman</li>
            </ul>

            <h6>Link Element</h6>
            <ul>
                <li>React Router menyediakan komponen <code>Link</code> sebagai pengganti Anchor Element</li>
                <li>berbeda dengan Anchor Element, komponen <code>Link</code> tidak akan melakukan reload halaman</li>
                <li><a href="https://api.reactrouter.com/v7/functions/react_router.Link.html" target="_blank">Dokumentasi Link</a></li>
            </ul>

            <h6>Attribute To</h6>
            <ul>
                <li>di komponen <code>Link</code>, atribut <code>to</code> menerima parameter object</li>
                <li>object tersebut memiliki atribut:
                    <ul>
                        <li><code>pathname</code> : untuk lokasi path</li>
                        <li><code>search</code> : untuk query param</li>
                        <li><code>hash</code> : untuk fragment</li>
                    </ul>
                </li>
            </ul>

            <h6>NavLink</h6>
            <ul>
                <li>salah satu yang biasa kita lakukan ketika membuat Link adalah membedakan style Link yang sedang aktif dan tidak aktif</li>
                <li>biasanya dilakukan pengecekan: jika URL path yang sedang dikunjungi sama dengan tujuan Link, maka kita ubah stylenya menjadi aktif</li>
                <li>React Router menyediakan komponen <code>NavLink</code> untuk mempermudah hal ini</li>
                <li>cara penggunaannya sama seperti <code>Link</code>, namun jika URL path saat ini sama dengan tujuan <code>NavLink</code>, maka secara otomatis akan menggunakan style <code>a.active</code></li>
                <li><a href="https://api.reactrouter.com/v7/functions/react_router.NavLink.html" target="blank">Dokumentasi NavLink</a></li>
            </ul>
        </>
    )
}