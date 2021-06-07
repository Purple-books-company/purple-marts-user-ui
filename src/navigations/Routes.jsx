import { useState } from "react";
import LogOut from "../components/pages/authentication/components/LogOut";
import Home from "../components/pages/home";
import Cart from "../components/pages/cart";
import Category from "../components/pages/Category";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "../components/utils/Search";
import Wrapper from "../components/pages/authentication/";

function Routes() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Search />
      <button onClick={openModal}>Login</button>
      <LogOut />
      <Wrapper showModal={showModal} setShowModal={setShowModal} />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/auth/login">
              <Wrapper />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;
