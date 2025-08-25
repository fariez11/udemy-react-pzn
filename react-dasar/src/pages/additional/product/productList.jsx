
import Product from "./product"

export default function ProductList(){
    const [products, setProducts] = useState([])
    const loaded = useRef(false)

    useEffect(() => {
        if (loaded.current === false){
            fetch('prodcuts.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                loaded.current = true
            })
        }
    })

    return (
        <> 
        <h4>Product List</h4>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </>
    );
}