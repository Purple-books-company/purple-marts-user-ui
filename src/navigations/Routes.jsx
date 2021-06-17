import React, { Suspense, useState, lazy } from "react";
import { Button } from "../styles/widgets/widgets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../components/pages/home"));
const Search = lazy(() => import("../components/utils/Search"));
const Wrapper = lazy(() => import("../components/pages/authentication/"));
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
  const [showModal, setShowModal] = useState(false);
  const [logged, setLogged] = useState(localStorage.getItem("isLogged"));

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Header /> */}
        <Search />
        {!logged && <Button onClick={openModal}>Login</Button>}

        <LogOut />
        <Wrapper showModal={showModal} setShowModal={setShowModal} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/wishlist" component={WishList} />
          <Route path="/profile/order" component={Order} />
          <Route path="/profile/info" component={Profile} />
          <Route path="/details" component={OrderDetails} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
