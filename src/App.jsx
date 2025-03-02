import React from "react";
import { useNavigate } from "react-router-dom";
import bancologo from "/banco.png";
import "./App.css";

function App() {
    const navigate = useNavigate(); // Hook para navegação

    return (
        <>
            <div>
                <a href="" target="_blank">
                    <img src={bancologo} className="logo" alt="React logo" />
                </a>
            </div>
            <h1>Banco Vida</h1>
            <div className="card">
                <p>Um banco mais perto de você.</p>
                <button onClick={() => navigate("/login")}>
                    Acessar conta
                </button>
            </div>
            <a href="" className="read-the-docs">
                Crie sua conta aqui.
            </a>
        </>
    );
}

export default App;
