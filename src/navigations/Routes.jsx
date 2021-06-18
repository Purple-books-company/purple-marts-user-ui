import React, { Suspense, useState, lazy } from "react";
import Loading from "../components/utils/loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../components/pages/home"));
const Search = lazy(() => import("../components/utils/search"));
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
const Products = lazy(() =>
  import("../components/pages/Category/Components/viewproduct")
);
const Category = lazy(() => import("../components/pages/Category"));

function Routes() {
  const [logged, setLogged] = useState(localStorage.getItem("isLogged"));

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        {/* <Header /> */}

        <Search />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
        </Switch>
        {logged ? (
          <>
            <LogOut />
            <Switch>
              <Route path="/cart" component={Cart} />
              <Route path="/wishlist" component={WishList} />
              <Route path="/profile/order" component={Order} />
              <Route path="/profile/info" component={Profile} />
              <Route path="/details" component={OrderDetails} />
              <Route component={Home} />
            </Switch>
          </>
        ) : (
          <>
            <Route path="/cart" component={Errors} />
            <Route path="/wishlist" component={Errors} />
            <Route path="/profile/order" component={Errors} />
            <Route path="/profile/info" component={Errors} />
            <Route path="/details" component={Errors} />
          </>
        )}
      </Suspense>
    </Router>
  );
}

export default Routes;
