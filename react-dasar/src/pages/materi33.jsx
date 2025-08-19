import '@assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import { useRef, useState } from 'react';

export default function Materi33() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <h3>Ref</h3>


        </>
    )
}

function Timer() {

    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const timer = useRef(null);

    function handleStart() {
        setStart(Date.now());
        setNow(Date.now());

        timer.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
    }


    return (
        <>
            <h4>timer : {now - start} ms</h4>
            <div className="d-flex gap-2">
                <button className='btn btn-outline-info' onClick={handleStart}> <i className='bi bi-play-circle-fill' ></i></button>
                <button className='btn btn-outline-info' onClick={handleStop}> <i className='bi bi-pause-circle-fill'></i></button>
            </div>
        </>
    )
}


function Result() {
    const counter = useRef(0);
    function handleClick(e) {
        alert(`you click me ${counter.current++} times`);
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <button className='btn btn-primary' onClick={handleClick}> click me</button>
                <hr className='w-100' />
                <Timer />
            </div>
        </>

    );
}





