import React, { useState } from 'react';
import './Login.css';
import logoNexus from '../nexus.png';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tentativa de login com:', { email, senha });
  };

  return (
    <div className="login-container">
      {/* Área da Logo */}
      <div className="logo-section">
        <div className="logo-section">
        <img src={logoNexus} alt="Nexus Logo" className="logo-img" />
        </div>
      </div>

      {/* Formulário de Login */}
      <form onSubmit={handleSubmit} className="login-form">
        
        {/* Campo de Email */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="ex. usuario123@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Campo de Senha */}
        <div className="input-group senha-group">
          <label htmlFor="senha">Senha</label>
          <div className="password-wrapper">
            <input 
              type={mostrarSenha ? "text" : "password"} 
              id="senha" 
              placeholder="ex. usuario@123"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="toggle-password"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          <a href="#esqueceu" className="forgot-password">Esqueceu a senha ?</a>
        </div>

        {/* Botão de Login */}
        <div className="action-section">
          <p className="signup-text">Não tem cadastro ?</p>
          <button type="submit" className="btn-login">Login</button>
        </div>

 {/* Redes Sociais */}
         <div className="social-section">
          <p>Cadastre-se com</p>
        <div className="social-icons">
        <button type="button" className="social-btn">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="social-icon-img" />
    
    </button>
    <button type="button" className="social-btn">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="social-icon-img" />
    </button>

    <button type="button" className="social-btn">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="social-icon-img" />
    </button>
  </div>
</div>

      </form>
    </div>
  );
}

export default Login;