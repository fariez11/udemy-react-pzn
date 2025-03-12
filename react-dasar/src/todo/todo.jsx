export default function Todo({ text, isComplete, isDeleted = false }) {
    if (isDeleted) {
        return null
    } else {
        return (
            <li className="text-center">
                {/* {isComplete ? <del>{text}</del> : text} */}
                {text} {isComplete && "(done)"}
            </li>
        )
    }
}