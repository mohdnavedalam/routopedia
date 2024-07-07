import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    return (
        <>
        <div>Product</div>
        <div>
            <button onClick={() => {navigate("/Product/Create")}}>Add Product</button>
        </div>
        </>
    );
};

export default Product;