// Home.js
import React from 'react';
import Navbar from '../pages/Navbar';
import { useNavigate } from 'react-router-dom';
import NavAfterLogin from "./NavAfterLogin";
function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar/>

            {/* Main Content */}
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>Welcome to My Website!</h1>
                <p>This is some content below the navbar.</p>
                <button
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#ff8651',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    onClick={() => navigate("/login")}
                >
                    Learn More
                </button>
            </div>


        </div>
    );
}

export default Home;
