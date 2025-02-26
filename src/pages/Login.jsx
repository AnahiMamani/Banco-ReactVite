import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Login.css"; // Importação do CSS

function Login() {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate(); // Para redirecionar de página

    const handleLogin = (event) => {
        event.preventDefault(); // Impede o recarregamento da página ao enviar o form

        if (cpf === "123" && senha === "1234") {
            navigate("/banco"); // Redireciona para a tela do banco
        } else {
            alert("CPF ou senha incorretos!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>CPF:</label>
                        <input 
                            type="text" 
                            placeholder="Digite seu CPF" 
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Senha:</label>
                        <input 
                            type="password" 
                            placeholder="Digite sua senha" 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
