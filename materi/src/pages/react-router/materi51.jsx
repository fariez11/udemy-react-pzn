import TabbedCard from "../../components/tabCard";

export default function Materi51() {
    return (
        <TabbedCard noteContent={<Notes />} resultContent={null} />
    )
}

function Notes() {
    return (
        <>
            <h3>Route Param</h3>
            <ul>
                <li>saat kita membuat URL path, kadang kita tidak membuat path yang statis, kadang kita membuat path yang dinamis</li>
                <li>misal kita ingin menambahkan id / kode pada Path, misal <code>/product/123</code>, dimana <code>123</code> adalah id dari product</li>
                <li>di React Router, kita juga bisa lakukan itu dengan menambah tanda <code>:</code> (titik dua) diikuti dengan nama param, misal <code>/products/:id</code>, <code>id</code> dianggap sebagai parameter dinamis</li>
                <li>jika kita menggunakan <code>/product/123</code>, maka <code>123</code> akan dianggap sebagai data parameter <code>id</code></li>
            </ul>

            <h6>useParams()</h6>
            <ul>
                <li>saat kita membuat path yang dinamis, biasanya kita ingin mendapatkan informasi path yang dinamis tersebut</li>
                <li>seluruh dynamic param yang terdapat di URL path secara otomatis akan disimpan dalam object</li>
                <li>kita bisa mengambilnya menggunakan function <code>useParams()</code></li>
                <li><a href="https://api.reactrouter.com/v7/functions/react_router.useParams.html">Dokumentasi useParams</a></li>
                <li>misal, kita bisa menambahkan <code>useParams()</code> pada komponen <code>ProductDetail</code></li>
            </ul>

            <h6>Multiple Route Param</h6>
            <ul>
                <li>kita bisa menambahkan dynamic param pada path lebih dari satu</li>
                <li>yang penting kita gunakan nama dynamic param yang berbeda</li>
                <li>contoh: <code>/user/:userId/address/:addressId</code></li>
                <li>maka kita bisa dapatkan informasi <code>userId</code> dan <code>addressId</code> di object hasil dari <code>useParams()</code></li>
            </ul>
        </>
    )
}