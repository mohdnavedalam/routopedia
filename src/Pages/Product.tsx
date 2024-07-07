import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    const [goToProduct, setGoToProduct] = useState(() => {
        return false;
    });
    const handleSetGoToProduct = () => {
        setGoToProduct((prevState: any) => {
            return {
                ...prevState,
                goToProduct: true
            }
        });
    };
    return (
        <>
        <div>Product</div>
        <div>
            <button onClick={() => {navigate("/Product/Create")}}>Add Product</button>
            <br />
            <Link to={`/Product/Details/5`}>
                <button>Navigate to Product Details - 5</button>
            </Link>
            <br />
            {goToProduct && <Navigate to="/Product/Details/3" />}
            <button onClick={handleSetGoToProduct}>Navigate to Product Details - 3 (useState)</button>
        </div>
        </>
    );
};

export default Product;