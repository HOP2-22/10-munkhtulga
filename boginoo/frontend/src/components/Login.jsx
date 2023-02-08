import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authcontext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState(null);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:6900/auth/login", {
        email,
        password,
      });
      setCurrentUser({
        id: response.data.id,
        email: response.data.email,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ paddingTop: 200 }}>
      <input color="neutral" onChange={handleChangeEmail} />
      <input type="password" color="neutral" onChange={handleChangePassword} />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Login;
