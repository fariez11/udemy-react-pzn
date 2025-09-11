
import Button from 'react-bootstrap/Button';
import * as icons from 'react-icons/bs'
import { useNavigate } from 'react-router';
export default function Home() {

    const navigate = useNavigate()
    
    function handleClick() {
        navigate({pathname: '/about'})
    }
    return (
        <>
            <icons.BsHouse size={50}/>
            <h1>Halaman Home</h1>
            <span> Selamat Datang di Halaman Home</span>
            <br />
            <Button varriant="primary" className='mt-5' onClick={handleClick}> go to about page</Button>
        </>
    )
}