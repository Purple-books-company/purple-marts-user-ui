import Login from "../components/authentication/login";
import Register from "../components/authentication/register";
import Home from "../components/pages/home";
import Cart from "../components/pages/cart";
import Category from "../components/pages/Category";
import Order from '../components/pages/profile/orders'
import WishList from "../components/pages/wishList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "../components/common/Search";
import Products from "../components/pages/Category/Components/viewproduct";
import Profile from "../components/pages/profile";
import OrderDetails from "../components/pages/profile/orders/details";

function Routes() {
  return (
    <div>
      <Search />
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
        </div>
      </Router>
    </div>
  );
}

export default Routes;
