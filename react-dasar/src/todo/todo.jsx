export default function Todo({ text, isComplete, isDeleted = false }) {
    if (isDeleted) {
        return null
    } else {
        return (
            <li>
                {/* {isComplete ? <del>{text}</del> : text} */}
                {text} {isComplete && "(done)"}
            </li>
        )
    }
}