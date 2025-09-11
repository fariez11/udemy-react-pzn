import Button from 'react-bootstrap/Button';
import * as icons from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router';
export default function Image() {

    const navigate = useNavigate();
    const params = useParams();
    return (
        <>
            <icons.BsCardImage size={60} className='text-info p-1 bg-info-subtle rounded-5' />
            <h1>Halaman Image</h1>
            <span> Image ke : {params['*']}</span>
            <br />
            <div className="d-flex gap-2 mt-5 justify-content-center">
                <Button varriant="primary" onClick={() => navigate(-1)}> previous page</Button>
                <Button varriant="primary" onClick={() => navigate('/data')}> next page</Button>
            </div>
        </>
    )
}