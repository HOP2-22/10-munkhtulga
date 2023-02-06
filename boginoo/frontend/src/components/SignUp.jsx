import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const handleChangeUser = (event) => {
    setUser(event.target.value);
    console.log(user);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSignUp = async (req, res) => {
    try {
      const response = await axios.post("http://localhost:6900/auth/register", {
        email: user,
        password: password,
      });
      console.log(response);
      setUser(response.data.email);
      navigate("/loggedin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <input onChange={handleChangeUser}></input>
      <input type="password" onChange={handleChangePassword}></input>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};
export default SignUp;
