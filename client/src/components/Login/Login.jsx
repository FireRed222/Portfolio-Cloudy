import { useState } from "react";
import axios from "axios";
import s from "./Login.module.css";

const Login = ({ setIsAdmin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password");
      return;
    }

    try {
      const res = await axios.get("http://localhost:3000/users", {
        params: { username, password },
      });

      if (res.data.length > 0) {
        setIsAdmin(true);
        localStorage.setItem("isAdmin", "true");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed", err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className={s.div}>
      <div className={s.container}>
        <input
          className={s.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={s.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={s.btn} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
