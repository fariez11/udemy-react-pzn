export default function AlertButton({ text, message }) {
    function handleClick() {
        alert(message)
    }

    return (
        <button className="btn btn-secondary" onClick={handleClick}>{text}</button>
    )
}