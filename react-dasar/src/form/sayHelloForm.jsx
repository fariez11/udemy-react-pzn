export default function SayHello() {

    function handleClick(e) {
        e.preventDefault()
        const name = document.getElementById('input_name').value
        document.getElementById('result_text').textContent = `hello ${name}`
    }

    return (
        <div>
            <form className="row g-2 d-flex justify-content-center">
                <div className="col-4">
                    <input type="text" className="form-control" id="input_name" />
                </div>
                <div className="col-auto">
                    <button className="btn btn-warning d-block" onClick={handleClick}> say hello</button>
                </div>
                <div className="col-auto">
                    <h5 id="result_text" className="mt-1"> Hello World</h5>
                </div>
            </form>

        </div>
    )
}