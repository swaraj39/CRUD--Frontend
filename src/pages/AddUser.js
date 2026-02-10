import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import NavAfterLogin from "./NavAfterLogin";

function AddUser() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        dob: "",
        phone: ""
    });
    const [res, setRes] = useState("");

    const [user, setUser] = useState(null);

    // Check if user is logged in
    useEffect(() => {
        axios.get("/test", { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(() => setUser(null));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "/add-user",
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log("Server response:", response.data);
            setRes(response.data);

            alert(response.data.message || "User created successfully!");

            // Optional: clear form
            setFormData({
                name: "",
                email: "",
                password: "",
                dob: "",
                phone: ""
            });
            window.location.replace("/dashboard");

        } catch (error) {
            console.error("Error saving user:", error.message);

            const msg = error.response?.data || error.message;
            alert(msg);
        }


    };


    return (
        <>
            <NavAfterLogin name={user?.name} />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-4">
                                <h3 className="text-center mb-4 fw-bold">
                                    ➕ Add New User
                                </h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter full name"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter email"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter password"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter phone number"
                                        />
                                    </div>

                                    <button className="btn btn-success w-100 fw-semibold">
                                        Create User
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

export default AddUser;
