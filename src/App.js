//import Homehotel from './homeHotel';
//import Customerhome from './customer_home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutus from "./aboutUs";
import Firstpage from "./firstPage";
import Homehotel from "./homeHotel";
import Loginpage from "./LoginPage";
import Signup from "./signupPage";
import { useState } from "react";
import LodgingPage from "./lodgingPage";
import Hotelseat from "./hotelseat";
import Paymentpage from "./paymentPage";
import Paymentpage2 from "./paymentPage2";

function App() {
  const [user, setLoginUser] = useState({});
  const [payment, setPayment] = useState({ price: 0, num: 0, type: "",max:0});
  const [payment2, setPayment2] = useState({ price: 0, num: 0, type: "" });
  const [reserved,setReserved]=useState([]);
  const [seats,set_Reserved_Seat]=useState({id:"", from: "", to: "",person:"",phno:""})
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Firstpage />
        </Route>
        <Route exact path="/aboutus">
          <Aboutus />
        </Route>
        <Route exact path="/loginpage">
          <Loginpage setLoginUser={setLoginUser} />
        </Route>
        <Route exact path="/signuppage">
          <Signup />
        </Route>
        <Route exact path="/hotelhome">
          {user && user._id ? (
            <Homehotel setLoginUser={setLoginUser} user={user}/>
          ) : (
            <Loginpage setLoginUser={setLoginUser} />
          )}
        </Route>
        <Route exact path="/lodgingPage">
          {user && user._id ? (
            <LodgingPage setPayment={setPayment} user={user} setReserved={setReserved}/>
          ) : (
            <Loginpage setLoginUser={setLoginUser} />
          )}
        </Route>
        <Route exact path="/hotelseat">
          {user && user._id ? (
            <Hotelseat setPayment2={setPayment2} user={user} set_Reserved_Seat={set_Reserved_Seat}/>
          ) : (
            <Loginpage setLoginUser={setLoginUser} />
          )}
        </Route>
        <Route exact path="/paymentpage">
          {user && user._id ? (
            <Paymentpage obj={payment} reserved={reserved}/>
          ) : (
            <Loginpage setLoginUser={setLoginUser} />
          )}
        </Route>
        <Route exact path="/paymentpage2">
          {user && user._id ? (
            <Paymentpage2 obj={payment2} seats={seats}/>
          ) : (
            <Loginpage setLoginUser={setLoginUser} />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
