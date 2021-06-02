import Login from "../components/authentication/login";
import Register from "../components/authentication/register";
import Home from "../components/pages/home";
import Category from "./components/pages/Category";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/category">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;
