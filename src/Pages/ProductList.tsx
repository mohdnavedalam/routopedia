import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Product List</div>
            <br />
            <div>
                <button onClick={() => navigate("/Product/Create")}>Add Product</button>
            </div>
        </>
    );
};

export default ProductList;