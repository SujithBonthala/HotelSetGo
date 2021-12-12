import loginAvatar from "./login_avatar.png";
import "./paymentPage.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Paymentpage2({ obj,seats }) {
  const history = useHistory();
  //alert(obj.price)
  return (
    <div className="paymentbody">
      <div className="top5">
        <h1>HotelSetGo</h1>
        <img src={loginAvatar} alt="avatar" className="avatar5" />
      </div>
      <br />
      <br />
      <div id="d1">
        <label id="L1">Invoice</label>
        <br />
        <ul id="u1">
          <li>
            Number Of Guests: {obj.num}
          </li>
          <li>
            Price: {obj.price}
          </li>
          <li>
            Seater: {obj.type}
          </li>
        </ul>
        <br />
        <label id="L2">Total Price: Rs.{obj.price} </label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="d2">
        <label id="L3">Payment Options</label>
        <br />
        <br />
        <form action="">
          <input type="radio" name="Payment" className="i1"/>
          <label className="i2">Net Banking</label>
          <br />
          <input type="radio" name="Payment" className="i1"/>
          <label className="i2">Credit Card</label>
          <br />
          <input type="radio" name="Payment" className="i1"/>
          <label className="i2">Debit Card</label>
          <br />
          <input type="radio" name="Payment" className="i1" />
          <label className="i2">Paypal</label>
          <br />
          <br />
          <button
            value="Submit"
            id="S1"
            onClick={() => {
              if (document.querySelector('input[type="radio"]:checked')) {
                if (seats) {
                  axios
                  .put("http://localhost:8000/hotelseat", seats)
                  .then((res) => {
                      swal(res.data.message);
              });
                
                swal("Payment Successful!!");
                history.push("/hotelhome");
              }
            }
              else{
                  swal("Transaction not successfull..")
                  history.push('/hotelhome')
              }
            }}
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Paymentpage2;
