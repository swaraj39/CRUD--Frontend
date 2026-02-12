
    import { useState } from "react";
    export default function SearchExample() {
        const [search, setSearch] = useState("");

        const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

        // Filter users based on search input (case-insensitive)
        const filteredUsers = users.filter(user =>
            user.toLowerCase().includes(search.toLowerCase())
        );

        return (
            <div className="container mt-3">
                <h3>Search Users</h3>

                {/* Search input */}
                <input
                    type="text"
                    placeholder="Type to search..."
                    className="form-control mb-3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Render filtered list */}
                <ul className="list-group">
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user, index) => (
                            <li key={index} className="list-group-item">
                                {user}
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">No results found</li>
                    )}
                </ul>
            </div>
        );
    }
