import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    return (
        <>
            <div>Product Details</div>
            <br />
            <p>Product ID: {id}</p>
        </>
    );
};

export default ProductDetails;