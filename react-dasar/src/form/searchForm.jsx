export default function SearchForm() {
    return (
        <form className="d-flex">
            <input type="text" className="form-control me-2" />
            <button className="btn btn-success" onClick={(e) => {
                e.preventDefault()
                alert('You Search')
            }}>search</button>
        </form>
    )
}