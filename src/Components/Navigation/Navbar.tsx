import React from "react";
import DropdownLink from "../Dropdowns/DropdownLink";
import DropdownButton from "../Dropdowns/DropdownButton";
import DropdownSelect from "../Dropdowns/DropdownSelect";
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark mt-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                        <li className="nav-item">
                            <DropdownLink />
                        </li>
                        <li className="nav-item">
                            <DropdownButton />
                        </li>
                        <li className="nav-item">
                            <DropdownSelect />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;