export default function MyButton({ text, onSmash }) {
    return (
        <button className="btn btn-secondary" onClick={onSmash}>{text}</button>
    )
}