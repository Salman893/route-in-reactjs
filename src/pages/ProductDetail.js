import { useParams } from "react-router-dom";

const ProductDetail = props => {
    const params = useParams();

    return (
        <section>
            <h1>ProductDetail</h1>
            <p>{params.productId}</p>
        </section>
    )
}

export default ProductDetail;