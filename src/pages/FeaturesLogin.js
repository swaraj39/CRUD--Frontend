import React, {useEffect, useState} from 'react';
import NavAfterLogin from "./NavAfterLogin";
import axios from "../axiosConfig";

function FeaturesLogin() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("https://curd-backend-oxyd.onrender.com/test")
            .then(res => setUser(res.data))
            .catch(err => setUser(null));
    }, []);
    return (
        <>
        <NavAfterLogin name={user ? user.name : ""} />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Features</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}>Feature 1</div>
                <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}>Feature 2</div>
                <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}>Feature 3</div>
            </div>
        </div>
        </>
    );
}

export default FeaturesLogin;
