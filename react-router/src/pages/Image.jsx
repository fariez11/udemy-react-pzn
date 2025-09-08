import * as icons from 'react-icons/bs'
import { useParams } from 'react-router';
export default function Image() {
    const params = useParams();
    return (
        <>
            <icons.BsCardImage size={60} className='text-info p-1 bg-info-subtle rounded-5' />
            <h1>Halaman Image</h1>
            <span> Image ke : {params['*']}</span>
        </>
    )
}