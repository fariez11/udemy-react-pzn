export default function Toolbar({ onClick }) {
    return (
        <div onClick={onClick} className="mt-1 d-flex justify-content-around bg-primary-subtle p-2 rounded-3">
            <button className="btn btn-primary" onClick={onClick}>First</button>
            {/* <span>event propagation</span> */}
            <button className="btn btn-primary" onClick={onClick}>Second</button>
        </div>
    )
}