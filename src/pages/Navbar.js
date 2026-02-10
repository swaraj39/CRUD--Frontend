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
                <a className="navbar-brand" href="#">SRG App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                {/*    <ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
                {/*        <li className="nav-item">*/}
                {/*            <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                {/*        </li>*/}
                {/*        <li className="nav-item">*/}
                {/*            <a className="nav-link" href="#">Link</a>*/}
                {/*        </li>*/}
                {/*        <li className="nav-item dropdown">*/}
                {/*            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"*/}
                {/*               aria-expanded="false">*/}
                {/*                Dropdown*/}
                {/*            </a>*/}
                {/*            <ul className="dropdown-menu">*/}
                {/*                <li><a className="dropdown-item" href="#">Action</a></li>*/}
                {/*                <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                {/*                <li>*/}
                {/*                    <hr className="dropdown-divider"/>*/}
                {/*                </li>*/}
                {/*                <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                {/*            </ul>*/}
                {/*        </li>*/}
                {/*        <li className="nav-item">*/}
                {/*            <a className="nav-link disabled" aria-disabled="true">Disabled</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}

                {/*    <button type="button" className="btn btn-light" onClick={() => navigate("/login")}>Get Started</button>*/}
                {/*    /!*<button type="button" className="btn btn-light" onClick={handleit}>Get Started</button>*!/*/}
                {/*</div>*/}
            </div>
        </nav>
    );
}

export default Navbar;
