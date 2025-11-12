export default function Title({ text, additional }) {
    return (
        <div className="d-flex align-items-center position-relative border-secondary border-bottom mb-3">
            <h3 className="mx-auto mb-1 ">{ text }</h3>
            {
                additional ?
                    <a
                        type="button"
                        className="text-success position-absolute end-0 me-3"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight">
                        <i className="bi bi-journal-plus" style={{ fontSize: "23px" }}></i>
                    </a>
                    : ''
            }
        </div>
    )
}