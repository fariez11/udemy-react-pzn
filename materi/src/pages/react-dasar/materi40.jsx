import TabbedCard from "../../components/tabCard";
import useOnline from "../additional/online/onlineHook";

export default function Materi40() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )
}

function Note() {
    return (
        <>
            <h3>Custom Hooks</h3>
            <ul>
                <li>React secara default sudah memiliki banyak Hooks yang bisa kita gunakan untuk mempermudah membuat aplikasi menggunakan React</li>
                <li>Namun, kita juga bisa membuat Hooks secara manual jika kita mau</li>
                <li>Membuat Hooks biasanya menggunakan function dengan awalan "use"</li>
                <li>Contoh, kita akan membuat Hooks untuk mendeteksi apakah sedang Online atau Offline</li>
            </ul>

            <h6>Referensi Lengkap</h6>
            <span className="text-center"><a href="https://react.dev/reference/react" target="_blank">klik disini</a></span>

        </>
    )
}

function Result() {

    const connection = useOnline()

    return (
        <>
            <h3>Online Check</h3>
            <div className={'card text-center ' + (connection.isOnline ? 'bg-success-subtle' : 'bg-danger-subtle')}>
                <h5 className={'my-5 ' + (connection.isOnline ? 'text-success' : 'text-danger')}><i className={connection.isOnline ? 'bi bi-wifi' : 'bi bi-wifi-off'}></i> {connection.isOnline ? 'Sedang Terhubung Dengan Wifi' : 'Sedang Tidak Terhubung Degan Wifi'}</h5>
            </div>

            <div className="text-center">
                <span className="text-muted">*jika ingin ada perubahan coba hidup / matikan koneksi anda</span>
            </div>
        </>
    )
}