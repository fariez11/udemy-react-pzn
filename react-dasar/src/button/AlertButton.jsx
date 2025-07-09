export default function AlertButton({ text, message }) {
    function handleClick(e) {
        console.log(e);
        console.log(e.target);

        alert(message)
    }

    return (
        <button className="btn btn-secondary" onClick={handleClick}>{text}</button>
    )
}