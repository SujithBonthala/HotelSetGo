import loginAvatar from "./login_avatar.png";
import "./firstPage.css";
import { useHistory } from "react-router-dom";
function Firstpage() {
  const history = useHistory();
  return (
    <div className="full">
      <div className="top">
        <h1>HotelSetGo</h1>
        <img src={loginAvatar} alt="avatar" className="avatar" />
      </div>
      <div className="box">
        <form action="login.html">
          Login to an existing account:
          <br />
          <input type="button" name="login" value="Login"  onClick={()=>{history.push('/loginpage')}}/>
        </form>
        <form action="signup.html">
          Create a new account:
          <br />
          <input type="button" name="signup" value="Sign-Up" onClick={()=>{history.push('/signuppage')}} />
        </form>
        <form action="aboutus.html">
            About Us:<br/>
            <input type="button" name="aboutus" value="About Us"  onClick={()=>{history.push('/aboutus')}}/>
        </form>
      </div>
    </div>
  );
}

export default Firstpage;
