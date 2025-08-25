import { useEffect, useState } from "react";
import TabbedCard from "../components/tabCard";
import Product from "./additional/product/Product";

export default function Materi36() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )

    function Note() {
        return (
            <>
                <h3>Effect Dependencies</h3>

            </>
        )
    }

    function Result() {
        const [products, setProducts] = useState([])
        const [load, setLoad] = useState(false)
        const [message, setMessage] = useState('')

        function handleClick() {
            setLoad(true)
        }

        useEffect(() => {
            setMessage('Data loaded successfully')
        })

        useEffect(() => {
            if (load) {   // agar tidak terjadi infinite loop
                fetch('/data/products.json')
                    .then(response => response.json())
                    .then(data => { setProducts(data) })
            }

            return () => {
                console.log('Product List component unmounted');
            }
        }, [load]) // dependency array, jika ada perubahan pada load maka useEffect akan dijalankan kembali

        return (
            <>
                <h4 className="text-center">Product List</h4>
                <div className="text-center my-2">
                    {/* <button className="btn btn-success" onClick={handleClick}><i className={`bi ${!load ? 'bi-eye' : 'bi-eye-slash'}`}></i> </button> */}
                    { !load ? <button className="btn btn-success" onClick={handleClick}><i className="bi bi-eye"></i></button> : <span className="text-success">{message}</span> }
                </div>
                <div className="row m-0 justify-content-center">
                    {products.map(product => (
                        <div className="col-5">
                            <Product key={product.id} product={product} />
                        </div>
                    ))}

                </div>
            </>
        );
    }
}