import loginAvatar from "./login_avatar.png";
import './hotelseat.css';
import { useHistory } from "react-router-dom";


function Hotelseat(){

    const history = useHistory();
    return(
    <div className="seatbody">
        <div className="top3">
            <h1>HotelSetGo</h1>
            <img src={loginAvatar} alt="avatar" className="avatar3"/>
        </div>
    <div className="box2">
        <h1>Restaurant Reservation</h1>
        <form action="login.html">
            Number of Guests: 
            <input type="text" name="guests" placeholder="Enter number of guests"/><br/><br/>
            Date: <input type="date" name="date" placeholder = "Date"/>
            Arrival Time: <input type="time" name="arrival" placeholder = "Arrival Time"/><br/><br/>
            Any Special Requests? <input type="text" name="requests" placeholder = "Special Requests"/><br/>
            <input type="button" value="Back" onClick={()=>{history.push('/hotelhome')}}/>
            <input type="button" value="Confirm"/>
        </form>
    </div>
    </div>
    )
}


export default Hotelseat;