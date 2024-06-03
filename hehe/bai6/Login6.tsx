import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const validUser = {
    email: "user@example.com",
    password: "password123",
    role: "admin",
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    if (
      loginData.email === validUser.email &&
      loginData.password === validUser.password &&
      loginData.role === validUser.role
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/account");
    } else {
      setError("Thông tin đăng nhập không chính xác");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={loginData.role}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
