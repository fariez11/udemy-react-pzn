import Todo from "./todo.jsx"

export default function TodoList() {

    const listData = [
        {
            id: 1,
            text: "Learn HTML",
            isComplete: true,
            isDeleted: true
        },
        {
            id: 2,
            text: "Learn CSS",
            isComplete: true
        },
        {
            id: 3,
            text: "Learn Javascript",
            isComplete: true
        },
        {
            id: 4,
            text: "Learn Anngular",
            isComplete: false
        },
        {
            id: 5,
            text: "Learn ReactJS",
            isComplete: false
        },
    ]

    // const todos = listData.map((todo) => {              menggunakan kurung kurawal
    //     return <Todo {...todo} />
    // })
    // const todos = listData.map((todo) => (<Todo {...todo} />))
    return (
        <ul className="text-start">
            {listData.map((todo) => (<Todo {...todo} />))}                  {/* Collection of Component */}
        </ul>
    )
}