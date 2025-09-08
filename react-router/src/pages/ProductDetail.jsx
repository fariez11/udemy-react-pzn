import * as icons from 'react-icons/bs'
import { useParams } from 'react-router';
export default function ProductDetail() {

    const param = useParams();

    return (
        <>
            <icons.BsBack size={50} className='text-info p-1 bg-dark rounded-1' />
            <h1>Halaman Product Detail ke {param.id}</h1>
            <span> Selamat Datang di Halaman Product Detail</span>
        </>
    )
}