import React from 'react'
import {useNavigate} from "react-router-dom";
import bancoLogo from '/banco.png'
import Home from '.Home.jsx'
import './App.css'

function App() {
  const navigate = useNavigate();
  
  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={bancoLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Banco Vida</h1>
      <div className="card">
        <p>Um banco mais perto de você.</p>
        <button onClick={()=> NavigationPreloadManager("/home")}>
          Acessar conta
        </button>
      </div>
      <a href='' className="read-the-docs">
        Crie sua conta aqui.
      </a>
    </>
  )
}

export default App
