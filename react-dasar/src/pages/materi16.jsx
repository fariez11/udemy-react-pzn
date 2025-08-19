import '@assets/NotesPage.css';
import TabbedCard from '../components/tabCard';
import LogDisplay from '../components/logDisplay';

export default function Materi16() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    );
}

function Note() {
    return (
        <>
            <h3>Event Object</h3>
            <ul>
                <li>Saat kita membuat Event Handler Function, kita bisa menambah <strong>Event Object</strong> sebagai parameter di function tersebut.</li>
                <li>React Event Object kompatibel dengan standard DOM Event Object.</li>
                <li>Lihat referensi resmi React dan MDN:
                    <ul>
                        <li>
                            <a href="https://react.dev/reference/react-dom/components/common#react-event-object" target="_blank">
                                React Event Object Reference
                            </a>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event" target="_blank">
                                MDN DOM Event Documentation
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}


function Result() {


    // const MyButton = ({text, message}) => (<button className='btn btn-primary' onClick={handleClick}>{text}</button>)
    function MyButton({ text, message }) {

        function handleClick(e) {
            console.log(e.target);
            alert(message)
        }
        return (
            <button className='btn btn-primary' onClick={handleClick}>{text}</button>
        )
    }
    return (
        <>
            <div className="row mx-2">
                <div className="col-7 d-flex flex-column align-items-center justify-content-center">
                    <MyButton text={'arrow function'} message='you click me'> arrow function</MyButton>
                </div>
                <div className="col">
                    <LogDisplay />
                </div>
            </div>
        </>
    );
}





