
import { useEffect, useRef, useState } from "react"
import formatRupiah from "../../../components/rupiahFormat"

export default function ProductList() {
    const [products, setProducts] = useState([])
    const loaded = useRef(false)

    useEffect(() => {
        if (loaded.current === false) {             // agar tidak terjadi infinite loop
            fetch('/data/products.json')
                .then(response => response.json())
                .then(data => {
                    setProducts(data)
                    loaded.current = true
                })
        }

        return () => {
            console.log('Product List component unmounting');
            
        }
    })

    function Product({ product }) {
        return(
            <div className="card p-1 px-2 m-1">
                <h5>{product.name}</h5>
                <span>harga : {formatRupiah(product.price)}</span>
            </div>
        )
    }

    return (
        <>
            <h4 className="text-center">Product List</h4>
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