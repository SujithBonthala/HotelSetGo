import loginAvatar from "./login_avatar.png";
import "./paymentPage.css";
//import { useHistory } from "react-router-dom";

function Paymentpage()
{
    return(
        <div> 
            <div className="top">
                <h1>HotelSetGo</h1>
                <img src={loginAvatar} alt="avatar" className="avatar" />
            </div>
            <br/><br/>
            <div id='d1'>
            <label id='l1'>Invoice</label><br/>
            <ul id='u1'>
                
            </ul><br/>
            <label id='l2'>Total Price: Rs. </label>
            </div>
            <br/><br/><br/><br/><br/>
            <div id='d2'>
            <label id='l3'>Payment Options</label><br/><br/>
            <form action="">
                <input type="radio" name="Payment" className='i1'/><label className='i2'>Net Banking</label><br/>
                <input type="radio" name="Payment" className='i1'/><label className='i2'>Credit Card</label><br/>
                <input type="radio" name="Payment" className='i1'/><label className='i2'>Debit Card</label><br/>
                <input type="radio" name="Payment" className='i1'/><label className='i2'>Paypal</label><br/><br/>
                <button value="Submit" id='s1'>Confirm Payment</button>
            </form>
            </div>
        </div>
    )
}

export default Paymentpage;