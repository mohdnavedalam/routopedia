import React from "react";

const DropdownSelect = () => {
    return (
        <div className="dropdown">
            <select className="form-select">
                <option selected>Dropdown</option>
                <option value="Action">Action</option>
                <option value="Another Action">Another Action</option>
                <hr className="dropdown-divider" />
                <option value="Somrthing else here">Something else here</option>
            </select>
        </div>
    );
};

export default DropdownSelect;