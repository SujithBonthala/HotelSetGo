//import Homehotel from './homeHotel';
//import Customerhome from './customer_home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutus from "./aboutUs";
import Firstpage from "./firstPage";
import Loginpage from "./LoginPage";
import Signup from "./signupPage";

function App() {
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
          <Loginpage />
        </Route>
        <Route exact path="/signuppage">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
