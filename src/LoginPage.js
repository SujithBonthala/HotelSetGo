//import { useHistory } from "react-router-dom";
import './LoginPage.css'
import loginAvatar from "./login_avatar.png";

function Loginpage() {
  //const history = useHistory();
  return (
    <div className="loginPage">
      <div className="loginbox">
        <img src={loginAvatar} alt="avatar" className="avatar2" />
        <h1>Login</h1>
        <form>
          <p>Username</p>
          <input type="text" name="username" placeholder="Enter Username" />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <input type="submit" name="login" value="Login" />
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
