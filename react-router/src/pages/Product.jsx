import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function Product() {
    const [searchParam] = useSearchParams();
    const navigate = useNavigate();

    const [seacrh, setSearch] = useState(searchParam.get('category') || '');

    function handleSearch() {
        navigate({ pathname: '/data/products', search: `?search=${seacrh}` })
    }
    return (
        <>
            <h2>Product Page</h2>
            <div className="d-flex justify-content-center mt-4 mb-2">
                <InputGroup className="w-50">
                    <Form.Control aria-describedby="basic-addon2" value={seacrh} onChange={(e) => setSearch(e.target.value)} />
                    <Button variant="primary" id="button-addon2" onClick={handleSearch}>Search</Button>
                </InputGroup>
            </div>

            <p>kamu mencari : {searchParam.get("search")}</p>
        </>
    )
}