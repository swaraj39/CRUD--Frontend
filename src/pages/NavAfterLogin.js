import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NavAfterLogin({ name }) {


    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ffffff' }}>
            <div className="container-fluid " style={{color:'#ff0000'}}>
                <a className="navbar-brand" href="#">Altarians Management System</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
                        <li className="nav-item ml-2">
                            <Link className="nav-link active" to="/dashboard">Home</Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link className="nav-link" to="/allUser">All Users</Link>
                        </li>
                    {/*    fetch all users */}
                    </ul>
                    <span className="navbar-brand" style={{ fontWeight: 'bold' }}>
                        Hello, {name} {/* fallback if name not loaded yet */}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default NavAfterLogin;
