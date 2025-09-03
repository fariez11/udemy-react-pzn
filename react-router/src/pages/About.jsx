import * as icons from 'react-icons/bs'
export default function About() {
    return (
        <>
            <icons.BsQuestionCircle size={50} className='text-info p-1 bg-dark rounded-5' />
            <h1>Halaman About</h1>
            <span> Selamat Datang di Halaman About</span>
        </>
    )
}