import "./signup.css";
import loginAvatar from "./login_avatar.png";

function Signup() {
  return (
    <div className="loginPage">
      <div className="loginbox">
        <img src={loginAvatar} alt="avatar" className="avatar2" />
        <h1>Sign Up</h1>
        <form action="login.html">
          <p>Name</p>
          <input type="text" name="name" placeholder="Enter Name" />
          <p>Mobile Number</p>
          <input type="text" name="phone" placeholder="Enter Mobile Number" />
          <p>Username</p>
          <input type="text" name="username" placeholder="Enter Username" />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <p>Confirm Password</p>
          <input
            type="password"
            name="password"
            placeholder="Re-enter Password"
          />
          <input type="submit" name="signup" value="Sign-Up" />
          <br />
        </form>
      </div>
    </div>
  );
}

export default Signup;
