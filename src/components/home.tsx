import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:5000/logout", {
                withCredentials: true,
            });
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };
    useEffect(() => {
        const verifyToken = async () => {
            try {
                const { data } = await axios.get(
                    `http://localhost:5000/verify-token`,
                    { withCredentials: true }
                );
                if (data.isAuthenticated) {
                    setUsername(data.username);
                } else {
                    navigate("/login");
                }
            } catch (error) {
                setError("An error occurred while verifying the token");
            }
        };

        verifyToken();
    }, [navigate]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div className="text-blue-500">This text should be blue if Tailwind CSS is working correctly.</div>
            <div>
                <h1>Welcome Home {username}</h1>
                <button onClick={handleLogout}>Logout</button>
                <button
                    style={{marginLeft: "100px"}}
                    onClick={() => navigate("/users")}
                >
                    View Users
                </button>
            </div>
        </div>
    );
};

export default Home;