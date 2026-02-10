import { useState } from "react";
import axios from "../axiosConfig";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const params = new URLSearchParams();
            params.append("username", username);
            params.append("password", password);

            await axios.post("http://localhost:8081/login", params.toString(), {
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            });

            window.location.replace("/dashboard");
        } catch {
            setError("Invalid username or password");
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await axios.post("/signin", {
                email: username,
                password,
                name
            });
            alert("Signup successful!");
            setIsLogin(true); // switch back to login
        } catch {
            setError("Signup failed");
        }
    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">

                        {/* TOGGLE BUTTONS */}
                        <div className="btn-group w-100 mb-3">
                            <button
                                className={`btn ${isLogin ? "btn-primary" : "btn-outline-primary"}`}
                                onClick={() => setIsLogin(true)}
                            >
                                Sign In
                            </button>
                            <button
                                className={`btn ${!isLogin ? "btn-primary" : "btn-outline-primary"}`}
                                onClick={() => setIsLogin(false)}
                            >
                                Sign Up
                            </button>
                        </div>

                        {error && (
                            <div className="alert alert-danger text-center">
                                {error}
                            </div>
                        )}

                        {/* CARD */}
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="text-center mb-3">
                                    {isLogin ? "Sign In" : "Sign Up"}
                                </h3>

                                <form onSubmit={isLogin ? handleLogin : handleSignup}>

                                    {!isLogin && (
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                placeholder="Name"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            placeholder="Username"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <button className="btn btn-success w-100">
                                        {isLogin ? "Login" : "Create Account"}
                                    </button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
