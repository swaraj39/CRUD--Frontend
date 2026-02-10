import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import NavAfterLogin from "./NavAfterLogin";

function UserList() {
    const [user, setUser] = useState(null);
    const [userList, setUserList] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [search, setSearch] = useState("");

    // FETCH USERS
    useEffect(() => {
        axios.get("/getAllUsers")
            .then(res => setUserList(res.data))
            .catch(() => setUserList([]));

        axios.get("/test")
            .then(res => setUser(res.data))
            .catch(() => setUser(null));
    }, []);

    // DELETE
    const deleteUser = (email) => {
        axios.delete(`/users/${email}`, { withCredentials: true })
            .then(res => setUserList(res.data))
            .catch(err => console.log(err));
    };

    // UPDATE
    const submitUpdate = (e) => {
        e.preventDefault();

        axios.put(`/user/${editUser.email}`, editUser, { withCredentials: true })
            .then(res => {
                setUserList(res.data);
                setEditUser(null);
            })
            .catch(err => console.log(err));
    };

    const filteredUsers = userList.filter(u => {
        const q = search.toLowerCase();

        const idText = String(u.id || u._id || "").toLowerCase();
        const displayId = String(`BAC00${u.id || u._id || ""}`).toLowerCase();

        return (
            (u.name || "").toLowerCase().includes(q) ||
            (u.email || "").toLowerCase().includes(q) ||
            String(u.phone || "").toLowerCase().includes(q) ||
            String(u.dob || "").toLowerCase().includes(q) ||
            idText.includes(q) ||
            displayId.includes(q)
        );
    });



    return (
        <>
            <NavAfterLogin name={user?.name || ""} />

            <div className="container mt-3">

                {/* ===== SEARCH BAR ===== */}
                <div className="row mb-3">
                    <div className="col-md-4 ms-auto">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name, email or phone"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* ===== POPUP MODAL ===== */}
                {editUser && (
                    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
                        <div className="modal-dialog">
                            <div className="modal-content p-3">

                                <h6>Update User</h6>

                                <form onSubmit={submitUpdate}>
                                    <input
                                        className="form-control mb-2"
                                        value={editUser.name}
                                        onChange={e => setEditUser({ ...editUser, name: e.target.value })}
                                        placeholder="Name"
                                    />

                                    <input
                                        className="form-control mb-2"
                                        value={editUser.email}
                                        onChange={e => setEditUser({ ...editUser, email: e.target.value })}
                                        placeholder="Email"
                                    />

                                    <input
                                        className="form-control mb-2"
                                        value={editUser.dob}
                                        onChange={e => setEditUser({ ...editUser, dob: e.target.value })}
                                        placeholder="Date of Birth"
                                    />

                                    <input
                                        className="form-control mb-2"
                                        value={editUser.phone}
                                        onChange={e => setEditUser({ ...editUser, phone: e.target.value })}
                                        placeholder="Mobile Number"
                                    />

                                    <div className="text-end">
                                        <button className="btn btn-success btn-sm me-2">Save</button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                            onClick={() => setEditUser(null)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                )}

                {/* ===== USER TABLE ===== */}
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map(u => (
                            <tr key={u.id}>
                                <td>BAC00{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.dob}</td>
                                <td>{u.phone}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => setEditUser(u)}
                                    >
                                        Update
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteUser(u.email)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No users found
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default UserList;
