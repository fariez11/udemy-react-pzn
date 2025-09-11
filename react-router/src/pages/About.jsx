import Button from 'react-bootstrap/Button'
import * as icons from 'react-icons/bs'
import { useNavigate } from 'react-router'
export default function About() {

    const navigate = useNavigate()

    return (
        <>
            <icons.BsQuestionCircle size={50} className='text-info p-1 bg-dark rounded-5' />
            <h1>Halaman About</h1>
            <span> Selamat Datang di Halaman About</span>

            <br />
            <div className="d-flex gap-2 mt-5 justify-content-center">
                <Button varriant="primary" onClick={() => navigate(-1)}> previous page</Button>
                <Button varriant="primary" onClick={() => navigate('/images/*')}> next page</Button>
            </div>
        </>
    )
}