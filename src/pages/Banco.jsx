import React from "react";
import "./../styles/Login.css"; // Importação do CSS


function Banco() {
    return (
        <div className="banco-container">
            <h2>Bem-vindo ao Banco</h2>
            <p>Escolha uma opção:</p>
            <button>Sacar</button>
            <button>Adicionar Dinheiro</button>
            <button>Transferir</button>
        </div>
    );
}

export default Banco;
