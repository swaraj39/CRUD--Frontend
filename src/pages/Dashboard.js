import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import NavAfterLogin from "./NavAfterLogin";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    // 1️⃣ Check if user is logged in
    useEffect(() => {
        axios.get("/test", {
            withCredentials: true
        })
            .then(res => {
                setUser(res.data);
                console.log(res.data.name);
            })
            .catch(err => {
                console.log("User not logged in", err);
                setUser("");
            })
            .finally(() => setLoading(false));
    }, []);

    // 2️⃣ Fetch products only if user exists
    useEffect(() => {
        if (!user) return;

        axios.get("/get/allproducts")
            .then(res => {
                setProducts(Array.isArray(res.data) ? res.data : []);
            })
            .catch(err => {
                console.log("Error fetching products", err);
                setProducts([]);
            });
    }, [user]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status" />
            </div>
        );
    }

    if (!user || user === "") {
        return <Login />;
    }

    return (
        <>
            <NavAfterLogin name={user?.name || "User"} />

            <section className="bg-dark-subtle text-dark text-center py-5 px-3">
                <div className="container">
                    <h1 className="fw-bold display-6 display-md-4">
                        Read Good, Build Awesome React Apps
                    </h1>

                    <p className="lead mt-3 fs-6 fs-md-5">
                        A modern one-page React design powered by Bootstrap
                    </p>

                    <div className="d-flex justify-content-center mt-4">
                        <button
                            className="btn btn-dark btn-lg rounded-pill px-4 px-md-5 w-100 w-md-auto"
                            onClick={() => navigate(`/addUser`)}
                        >
                            Add User
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-black text-white text-center py-3 mt-auto">
                <small className="fs-6">
                    Made with ❤️ using React & Bootstrap
                </small>
            </footer>
        </>
    );
}
