import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const navigate = useNavigate();

    // const handleit = () => {
    //     window.location.replace("/login");
    // }
    return (
        <nav className="navbar navbar-expand-lg "
        style={{backgroundColor:'#ff8651'}}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Altarians Management System</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
    );
}

export default Navbar;
