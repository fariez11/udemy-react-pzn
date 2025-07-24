export default function Todo({ key, text, isCompleted, isDeleted=false }) {
    if (isDeleted) {
        // return null                              ~> contoh menggunakan null component
        return (
            <li className="list-group-item d-flex justify-content-between text-muted" key={key}>
                <del>{text}</del> {isDeleted && <i className='bi bi-x-circle text-danger'></i>}
            </li>
        )
    } else {
        return (
            <li className={`list-group-item d-flex justify-content-between align-items-center ${isCompleted ? "text-muted" : ""}`} key={key}>
                {text}
                {isCompleted && <i className='bi bi-check-circle text-success'></i>}
                {!isCompleted && <i className='bi bi-clock text-warning'></i>}
            </li>
        )
    }
}