import React, { Suspense, useState, lazy } from "react";
import Home from "../components/pages/home";
import Header from "../components/utils/header";
import Footer from "../components/utils/footer";
import Category from "../components/pages/Category";
import Loading from "../components/utils/loader";
import Products from "../components/pages/Category/Components/viewproduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offers from "../components/pages/offer-page";
import ScrollToTop from "../components/utils/restore-scroll/Scroll";
import { getCustomer } from "../services/api/loaded-services";

const Errors = lazy(() => import("../components/utils/errors"));
const Cart = lazy(() => import("../components/pages/cart"));
const WishList = lazy(() => import("../components/pages/wishList"));
const Profile = lazy(() => import("../components/pages/profile"));
function Routes() {
  const [logged, setLogged] = useState(getLogged);

  function getLogged() {
    if (localStorage.getItem("isLogged")) {
      getCustomer();
      return true;
    }
    return false;
  }

  const setLogin = () => {
    setLogged(true);
  };

  const setLogOut = () => {
    setLogged(false);
  };
  return (
    <Router>
      <ScrollToTop />
      <Header func={setLogOut} />
      <Switch>
        <Route exact path="/" component={() => <Home logged={logged} />} />
        <Route path="/category" component={Category} />
        <Route path="/products/:id" component={Products} />
        <Route path="/offers/:index" component={Offers} />

        <Suspense fallback={<Loading />}>
          {logged ? (
            <>
              <Route path="/cart" component={Cart} />
              <Route path="/wishlist" component={WishList} />
              <Route path="/profile" component={Profile} />
            </>
          ) : (
            <Route path="*" component={() => <Errors func={setLogin} />} />
          )}
        </Suspense>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
