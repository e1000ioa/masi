import React from 'react';
import './Login.css'; // Importa los estilos

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <h1>Bienvenido</h1>
      </div>
      <form>
        <div className="input-group">
          <input type="text" placeholder="Email or Phone Number" required />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="login-btn">Ingresar</button>
      </form>
      <div className="social-login">
        <button className="google-btn">Iniciar sesión con Google</button>
        <button className="facebook-btn">Iniciar sesión con Facebook</button>
      </div>
    </div>
  );
};

export default Login;
