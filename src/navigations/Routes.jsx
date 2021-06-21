import React, { Suspense, useState, lazy } from "react";
import Home from "../components/pages/home";
import Category from "../components/pages/Category";
import Loading from "../components/utils/loader";
import Products from "../components/pages/Category/Components/viewproduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Errors = lazy(() => import("../components/utils/errors"));
const Cart = lazy(() => import("../components/pages/cart"));
const WishList = lazy(() => import("../components/pages/wishList"));
const Order = lazy(() => import("../components/pages/profile/orders"));
const Profile = lazy(() => import("../components/pages/profile"));
const LogOut = lazy(() =>
  import("../components/pages/authentication/components/LogOut")
);
const OrderDetails = lazy(() =>
  import("../components/pages/profile/orders/details")
);

function Routes() {
  const [logged, setLogged] = useState(localStorage.getItem("isLogged"));

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />

        <Suspense fallback={<Loading />}>
          {/* <Header /> */}

          {logged ? (
            <>
              <LogOut />
              <Route path="/cart" component={Cart} />
              <Route path="/wishlist" component={WishList} />
              <Route path="/profile/order" component={Order} />
              <Route path="/profile/info" component={Profile} />
              <Route path="/details" component={OrderDetails} />
              {/* <Route component={Home} /> */}
            </>
          ) : (
            <Route path="*" component={Errors} />
          )}
        </Suspense>
      </Switch>
    </Router>
  );
}

export default Routes;
