import { useState } from "react";
import LogOut from "../components/pages/authentication/components/LogOut";
import Home from "../components/pages/home";
import Cart from "../components/pages/cart";
import Category from "../components/pages/Category";
import Order from "../components/pages/profile/orders";
import WishList from "../components/pages/wishList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "../components/utils/Search";
import Wrapper from "../components/pages/authentication/";
import { Button } from "../styles/widgets/widgets";
import Products from "../components/pages/Category/Components/viewproduct";
import Profile from "../components/pages/profile";
import OrderDetails from "../components/pages/profile/orders/details";
import Header from "../components/utils/Header";

function Routes() {
  const [showModal, setShowModal] = useState(false);
  const [logged, setLogged] = useState(localStorage.getItem("isLogged"));
  console.log(process.env);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Router>
      <Header />
      <Search />
      {!logged && <Button onClick={openModal}>Login</Button>}

      <LogOut />
      <Wrapper showModal={showModal} setShowModal={setShowModal} />

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
        <Route path="/products">
          <Products />
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
        <Route path="/profile/info">
          <Profile />
        </Route>
        <Route path="/details">
          <OrderDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
