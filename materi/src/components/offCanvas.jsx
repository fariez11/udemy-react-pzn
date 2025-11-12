
import '@assets/css/offCanvas.css'


export default function OffCanvas({content}) {
    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="fst-italic fw-semibold" id="offcanvasRightLabel">*catatan tambahan</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {content}
                </div>
            </div>
        </>
    )
}