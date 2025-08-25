import TabbedCard from "../components/tabCard";
import ProductList from "./additional/product/productList";

export default function Materi35() {
    return (
        <TabbedCard noteContent={<Note />} resultContent={<Result />} />
    )

    function Note() {
        return ('')
    }

    function Result() {
        return (
            <>
                <ProductList />
            </>
        )
    }


}