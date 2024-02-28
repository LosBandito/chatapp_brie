import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


import Login from "./components/login.tsx";
import Register from "./components/register.tsx";
import SelectUser from "./components/selectUser.tsx";
import Home from "./components/home.tsx";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/users" element={<SelectUser/>}/>
                <Route path="/chat" element={<SelectUser/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
