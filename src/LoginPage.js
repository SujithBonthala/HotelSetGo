//import { useHistory } from "react-router-dom";
import "./LoginPage.css";
import loginAvatar from "./login_avatar.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

import axios from "axios";

function Loginpage({ setLoginUser }) {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:8000/loginpage", user).then((res) => {
      swal(res.data.message);
      setLoginUser(res.data.user);
      history.push("/hotelhome");
    });
  };

  return (
    <div className="loginPage">
      <div className="loginbox">
        <img src={loginAvatar} alt="avatar" className="avatar2" />
        <h1>Login</h1>
        <form>
          <p>Username</p>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <input type="button" name="login" value="Login" onClick={login} />
          <br />
          <a href="#">Forgot Password</a>
          <br />
          <a href="signupform.html">Create account</a>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
