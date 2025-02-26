import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Login from "./pages/Login"
import Banco from "./pages/Banco"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/banco" element={<Banco />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);