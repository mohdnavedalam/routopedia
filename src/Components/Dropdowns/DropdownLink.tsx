import { Link } from "react-router-dom";

const DropdownLink = () => {
    return (
        <div className="dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Product">Product</Link></li>
                <li><Link className="dropdown-item" to="/Product/List">Product List</Link></li>
                <li><Link className="dropdown-item" to="/Product/Details">Product Details</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/Product/Create">Create Product</Link></li>
            </ul>
        </div>
    );
};

export default DropdownLink;