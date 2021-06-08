import { useState } from "react";
import LogOut from "../components/pages/authentication/components/LogOut";
import Home from "../components/pages/home";
import Cart from "../components/pages/cart";
import Category from "../components/pages/Category";
import Order from '../components/pages/profile/orders'
import WishList from "../components/pages/wishList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "../components/utils/Search";
import Wrapper from "../components/pages/authentication/";
import { Button } from "../styles/widgets/widgets";

function Routes() {
  const [showModal, setShowModal] = useState(false);
  let logged = localStorage.getItem("isLogged");

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Search />
      {!logged && <Button onClick={openModal}>Login</Button>}

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
            <Route path="/wishlist">
              <WishList />
            </Route>
            <Route path="/profile/order">
              <Order />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;
