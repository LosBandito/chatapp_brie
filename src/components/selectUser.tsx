import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SelectUser = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Failed to fetch users", error);
            }
        };

        const fetchUsername = async () => {
            try {
                const { data } = await axios.get(
                    `http://localhost:5000/verify-token`,
                    { withCredentials: true }
                );
                setUsername(data.username);
            } catch (error) {
                console.error("Failed to fetch username", error);
            }
        };

        fetchUsers();
        fetchUsername();
    }, []);

    return (
        <><select>
            {users.map((user) => (
                user.username !== username && (
                    <option key={user._id} value={user.username}>
                        {user.username}
                    </option>
                )
            ))}
        </select>
            <button
                style={{marginLeft: "100px"}}
                onClick={() => navigate("/")}
            >
                Back to homepage
            </button>

            <button
                style={{marginLeft: "100px"}}
                onClick={() => navigate("/chat")}
            >
                Start chat with selected user
            </button>
        </>
    );
};

export default SelectUser;