export default function TabbedCard({ noteContent, resultContent }) {
    return (
        <div className="card w-100 p-0 border-0">
            <div className="card-header pt-2 pb-0 px-0">
                <ul className="nav nav-pills d-flex mb-0 pb-0">
                    <li className="nav-item flex-fill text-center" role="presentation">
                        <a className="nav-link tab-card active text-light" id="notes-tab" data-bs-toggle="tab" data-bs-target="#notes"
                            type="button" role="tab" aria-controls="home" aria-selected="true">
                            catatan
                        </a>
                    </li>
                    <li className="nav-item flex-fill text-center" role="presentation">
                        <a className="nav-link tab-card text-light" id="result-tab" data-bs-toggle="tab" data-bs-target="#result" type="button"
                            role="tab" aria-controls="profile" aria-selected="true" >
                            hasil
                        </a>
                    </li>
                </ul>
            </div>

            <div className="card-body px-3 pb-3 rounded-bottom-3">
                <div className="overflow-y-auto scroll-body" style={{ maxHeight: "calc(90vh - 100px)" }}>

                    <div className="tab-content" id="myTabsContent">
                        <div className="tab-content" id="myTabsContent">
                            <div className="tab-pane fade show active" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                                <div className="row mx-1 catatan fst-italic">
                                    {noteContent}
                                </div>
                            </div>
                            <div className="tab-pane fade show " id="result" role="tabpanel" aria-labelledby="result-tab">
                                {resultContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
