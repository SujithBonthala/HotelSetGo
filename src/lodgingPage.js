import loginAvatar from "./login_avatar.png";
import "./lodgingPage.css";
import { useHistory } from "react-router-dom";
const options=[
    {
        label: "King-Sized bedroom",
        value: "king",
    },
    {
        label: "Queen-Sized bedroom",
        value: "queen",
    },
    {
        label: "Single bedroom",
        value: "single",
    },
    {
        label: "Double bedroom",
        value: "double",
    },
];
function LodgingPage(){
    const history = useHistory();
    return(
        <div>
            <div className="top">
                <h1>HotelSetGo</h1>
                <img src={loginAvatar} alt="avatar" className="avatar" />
            </div>
            <br/><br/><br/><br/>
            <div>
            <form action="POST" id='f1'>
                <br/><br/><br/>
                <label id='l1'><b>Lodging</b></label><br/><br/><br/><br/>
                <label id='l2'><b>Check-In: </b></label>
                <input type="date" id='i1'/>
                <label id='l3'><b>Check-Out: </b></label>
                <input type="date" id='i2'/><br/><br/>
                <label for="room" id='l4'><b>Room Type: </b></label>
                <select id='s1' name="room">
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>))}
                </select>
                <label for="num" id='l5'><b>No. of rooms: </b></label>
                <input type="number" name="num" id='i3'/><br/><br/>
                <label for="cno" id='l6'><b>Contact No.: </b></label>
                <input type="number" name="cno" id='i4'/>
                <label id='l7'><b>Total Price: </b></label><label id='l8'><b>Rs. </b></label><br/><br/><br/><br/>
                <button value="booking" id='b1'><b>Confirm Booking</b></button>
            </form>
            </div>
        </div>
    );
}

export default LodgingPage;