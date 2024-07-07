import React from "react";

const DropdownButton = () => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        
    );
};

export default DropdownButton;