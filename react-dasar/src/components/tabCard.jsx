// TabbedCard.jsx
export default function TabbedCard({ noteContent, resultContent }) {
    return (
        <div className="card w-100 p-0">
            <div className="card-header py-2 px-2 bg-card-header">
                <ul className="nav nav-pills d-flex">
                    <li className="nav-item flex-fill text-center me-1" role="presentation">
                        <a className="nav-link active text-success" id="notes-tab" data-bs-toggle="tab" data-bs-target="#notes"
                            type="button" role="tab" aria-controls="home" aria-selected="true">
                            catatan
                        </a>
                    </li>
                    <li className="nav-item flex-fill text-center mx-1" role="presentation">
                        <a className="nav-link text-success" id="result-tab" data-bs-toggle="tab" data-bs-target="#result" type="button"
                            role="tab" aria-controls="profile" aria-selected="true" >
                            hasil
                        </a>
                    </li>
                </ul>
            </div>

            <div className="card-body overflow-y-auto" style={{ maxHeight: "calc(99vh - 100px)" }}>
                <div className="tab-content" id="myTabsContent">

                    <div className="tab-content" id="myTabsContent">
                        <div className="tab-pane fade show active" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                            <div className="row mx-1 catatan fst-italic">
                                {noteContent}
                            </div>
                        </div>
                        <div className="tab-pane fade show" id="result" role="tabpanel" aria-labelledby="result-tab">
                            {resultContent}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
