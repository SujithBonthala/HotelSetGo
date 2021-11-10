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

function App() {
  const [user, setLoginUser] = useState({});
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
          <LodgingPage />
        </Route>
        <Route exact path="/hotelseat">
          <Hotelseat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
