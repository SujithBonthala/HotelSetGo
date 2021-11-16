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

function App() {
  const [user, setLoginUser] = useState({});
  const[price,setPrice]=useState(0);
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
            <Homehotel setLoginUser={setLoginUser}/>
          ) : (
            <Loginpage setLoginUser={setLoginUser} />
          )}
        </Route>
        <Route exact path="/lodgingPage">
          <LodgingPage setPrice={setPrice}/>
        </Route>
        <Route exact path="/hotelseat">
          <Hotelseat />
        </Route>
        <Route exact path="/paymentpage">
          <Paymentpage price={price}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
