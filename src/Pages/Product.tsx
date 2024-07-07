import { Link, useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    return (
        <>
        <div>Product</div>
        <div>
            <button onClick={() => {navigate("/Product/Create")}}>Add Product</button>
            <br />
            <Link to={`/Product/Details/5`}>
                <button>Navigate to Product Details - 5</button>
            </Link>
        </div>
        </>
    );
};

export default Product;