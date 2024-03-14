import React, { useState } from "react";
import { useAuth } from '../../Context/Auth/Auth1';
import { useNavigate } from 'react-router-dom';
import style from './LoginPage.module.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);
      console.log("Logged in as", email);
      navigate('/main');
    } catch (error) {
      console.error("Error in login", error);
      setError("Invalid email or password");
    }
  };

  return (
    <form className={style.loginForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>

      {error && <p className={style.error}>{error}</p>} {}
    </form>
  );
};

export default Login;