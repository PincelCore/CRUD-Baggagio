import React from "react";
import Login from './Login/Login';
import './reset.css';
import 'typeface-inter';
import Home from "./Home/Home";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const userData = response.data;

      setUser(userData);
      setIsLoggedIn(true);
    } catch (error) {
      if (error.response.status === 404) {
        alert('Usuário não encontrado');
      } else {
        console.log(error);
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={handleLogout} user={user} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
