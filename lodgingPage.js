import loginAvatar from "./login_avatar.png";
import "./lodgingPage.css";
//import { useHistory } from "react-router-dom";
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
                <label id='l1'>Lodging</label><br/><br/><br/><br/>
                <label id='l2'>Check-In: </label>
                <input type="date" id='i1'/>
                <label id='l3'>Check-Out: </label>
                <input type="date" id='i2'/><br/><br/>
                <label for="room" id='l4'>Room Type: </label>
                <select id='s1' name="room">
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>))}
                </select>
                <label for="num" id='l5'>No. of rooms: </label>
                <input type="number" name="num" id='i3'/><br/><br/>
                <label for="cno" id='l6'>Contact No.: </label>
                <input type="number" name="cno" id='i4'/>
                <label id='l7'>Total Price: </label><label id='l8'>Rs. </label><br/><br/><br/><br/>
                <button value="booking" id='b1'>Confirm Booking</button>
            </form>
            </div>
        </div>
    );
}

export default LodgingPage;