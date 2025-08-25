import formatRupiah from "../../../components/rupiahFormat";

export default function Product({ product }) {
    return (
        <div className="card p-1 px-2 m-1">
            <h5>{product.name}</h5>
            <span>harga : {formatRupiah(product.price)}</span>
        </div>
    )
}