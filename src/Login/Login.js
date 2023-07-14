import React, { useState } from 'react';
import './login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.trim() === '') {
      alert('Por favor, digite o login do Github');
      return;
    }

    onLogin(username);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="login-container">
      <div className='white'>
        <img src="https://pbs.twimg.com/profile_images/1372304699601285121/5yBS6_3F_400x400.jpg" alt="Logo" />
      </div>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' placeholder="Login do GitHub" value={username} onChange={handleInputChange} />
          <button type="submit">Entrar</button>
        </form>
      </div>
      <a href="https://github.com/PincelCore" id="author" target="_blank" rel="noopener noreferrer">© Dawi Alves</a>
    </div>
  );
}

export default Login;
