import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import product_card from "../../../../api/Products.json";
import {
  Badge,
  Card,
  CardImg,
  CardProductBottomDetails,
  CardProductDescription,
  CardProductName,
  CardProductOffer,
  CardProductOldprice,
  CardWishlist,
  LabelforSize,
  Size,
  Shopcol,
  Shopcard,
  Shoplist,
  Shopbyprice,
  Shopbysize,
} from "../../../../styles/pages/category-styles";

const Card1 = () => {
  const [radioPrice, SetRadioPrice] = useState("100to200");
  const [radioSize, SetRadioSize] = useState("XXL");
  const [toggleHeart, setToggleHeart] = useState(false);
  console.log(radioPrice);
  function HeartToggle(id) {
    setToggleHeart(!toggleHeart);
    console.log(id);
    console.log(toggleHeart);
  }
  const listItems1 = product_card.slice(0, 10).map((item, id) => (
    <Card className="col-xs-6 col-md-4 col-lg-2" key={id}>
      <Badge Status={item.badge}>{item.badge}</Badge>
      <a href="/products">
        <CardImg
          alt="Card image"
          className="card-img-top"
          variant="top"
          src={item.thumb}
        />
      </a>
      <div className="card-block">
        <CardProductName href="/products" className="card-title">
          {item.product_name}
        </CardProductName>
        <CardProductDescription className="card-text">
          {item.description}
        </CardProductDescription>
        <CardProductBottomDetails className="product-bottom-details">
          ₹{item.newprice}
          <CardProductOldprice>₹{item.oldprice}</CardProductOldprice>
          <CardProductOffer>{item.offer}%OFF</CardProductOffer>
          <CardWishlist id={id} href="">
            <FiHeart
              className={toggleHeart ? "heart active" : "heart"}
              onClick={() => HeartToggle(id)}
            />
          </CardWishlist>
        </CardProductBottomDetails>
      </div>
    </Card>
  ));
  const listItems2 = product_card.slice(10, 20).map((item, id) => (
    <Card className="col-xs-6 col-md-4 col-lg-2" key={id}>
      <Badge Status={item.badge}>{item.badge}</Badge>
      <a href="/products">
        <CardImg
          alt="Card image"
          className="card-img-top"
          variant="top"
          src={item.thumb}
        />
      </a>
      <div className="card-block">
        <CardProductName href="/products" className="card-title">
          {item.product_name}
        </CardProductName>
        <CardProductDescription className="card-text">
          {item.description}
        </CardProductDescription>
        <CardProductBottomDetails className="product-bottom-details">
          ₹{item.newprice}
          <CardProductOldprice>₹{item.oldprice}</CardProductOldprice>
          <CardProductOffer>{item.offer}%OFF</CardProductOffer>
          <CardWishlist href="">
            <FiHeart />
          </CardWishlist>
        </CardProductBottomDetails>
      </div>
    </Card>
  ));
  const listItems3 = product_card.slice(20).map((item, id) => (
    <Card className="col-xs-6 col-md-4 col-lg-2" key={id}>
      <Badge Status={item.badge}>{item.badge}</Badge>
      <a href="/products">
        <CardImg
          alt="Card image"
          className="card-img-top"
          variant="top"
          src={item.thumb}
        />
      </a>
      <div className="card-block">
        <CardProductName href="/products" className="card-title">
          {item.product_name}
        </CardProductName>
        <CardProductDescription className="card-text">
          {item.description}
        </CardProductDescription>
        <CardProductBottomDetails className="product-bottom-details">
          ₹{item.newprice}
          <CardProductOldprice>₹{item.oldprice}</CardProductOldprice>
          <CardProductOffer>{item.offer}%OFF</CardProductOffer>
          <CardWishlist href="">
            <FiHeart />
          </CardWishlist>
        </CardProductBottomDetails>
      </div>
    </Card>
  ));
  const ShopbyPrice = () => (
    <div style={{ boxSizing: "border-box", margin: "0 -5px" }} className="row">
      <Shopcol className="col-xs-12 col-md-4 col-lg-2">
        <Shopcard className="card">
          <Shoplist>
            <Size
              type="radio"
              value="100to200"
              name="radio"
              id="100to200"
              checked={radioPrice === "100to200"}
              onChange={(e) => {
                SetRadioPrice(e.target.value);
              }}
            />
            <LabelforSize for="100to200">₹100 - ₹200</LabelforSize>
          </Shoplist>
        </Shopcard>
      </Shopcol>

      <Shopcol className="col-xs-12 col-md-4 col-lg-2">
        <Shopcard className="card">
          <Shoplist>
            <Size
              type="radio"
              value="200to300"
              name="radio"
              id="200to300"
              checked={radioPrice === "200to300"}
              onChange={(e) => {
                SetRadioPrice(e.target.value);
              }}
            />
            <LabelforSize for="200to300">₹200 - ₹300</LabelforSize>
          </Shoplist>
        </Shopcard>
      </Shopcol>

      <Shopcol className="col-xs-6 col-md-4 col-lg-2">
        <Shopcard className="card">
          <Shoplist>
            <Size
              type="radio"
              value="300to400"
              name="radio"
              id="300to400"
              checked={radioPrice === "300to400"}
              onChange={(e) => {
                SetRadioPrice(e.target.value);
              }}
            />
            <LabelforSize for="300to400">₹300 - ₹400</LabelforSize>
          </Shoplist>
        </Shopcard>
      </Shopcol>

      <Shopcol className="col col-xs-6 col-md-4 col-lg-2">
        <Shopcard className="card">
          <Shoplist>
            <Size
              type="radio"
              value="400to500"
              name="radio"
              id="400to500"
              checked={radioPrice === "400to500"}
              onChange={(e) => {
                SetRadioPrice(e.target.value);
              }}
            />
            <LabelforSize for="400to500">₹400 - ₹500</LabelforSize>
          </Shoplist>
        </Shopcard>
      </Shopcol>
    </div>
  );
  const ShopbySize = () => (
    <div style={{ boxSizing: "border-box", margin: "0 -5px" }} className="row">
      <Shopcol className="col-xs-12 col-md-4 col-lg-2">
        <Shopcard className="card">
          <Shoplist>
            <Size
              type="radio"
              value="XXL"
              name="radio1"
              id="XXLarge"
              checked={radioSize === "XXL"}
              onChange={(e) => {
                SetRadioSize(e.target.value);
              }}
            />
            <LabelforSize for="XXLarge">XXL</LabelforSize>
          </Shoplist>
        </Shopcard>
      </Shopcol>

      <Shopcol className="col-xs-12 col-md-4 col-lg-2">
        <Shopcard className="card">
          <Shoplist>
            <Size
              type="radio"
              value="Xl"
              name="radio1"
              id="Xlarge"
              checked={radioSize === "Xl"}
              onChange={(e) => {
                SetRadioSize(e.target.value);
              }}
            />
            <LabelforSize for="Xlarge">Xl</LabelforSize>
          </Shoplist>
        </Shopcard>
      </Shopcol>

      <Shopcol className="col-xs-6 col-md-4 col-lg-2">
        <Shopcard className="card">
          <Shoplist>
            <Size
              type="radio"
              value="L"
              name="radio1"
              id="Large"
              checked={radioSize === "L"}
              onChange={(e) => {
                SetRadioSize(e.target.value);
              }}
            />
            <LabelforSize for="Large">L</LabelforSize>
          </Shoplist>
        </Shopcard>
      </Shopcol>

      <Shopcol className="col col-xs-6 col-md-4 col-lg-2">
        <Shopcard className="card">
          <Shoplist>
            <Size
              type="radio"
              value="S"
              name="radio1"
              id="Small"
              checked={radioSize === "S"}
              onChange={(e) => {
                SetRadioSize(e.target.value);
              }}
            />
            <LabelforSize for="Small">S</LabelforSize>
          </Shoplist>
        </Shopcard>
      </Shopcol>
    </div>
  );
  return (
    <div className="container" style={{marginTop:'5%'}}>
      <div className="row">
        {listItems1}
        <Shopbyprice className="row">
          <h4>Shop by Price</h4>
          <ShopbyPrice />
        </Shopbyprice>
        {listItems2}
        <Shopbysize className="row">
          <h4>Shop by Size</h4>
          <ShopbySize />
        </Shopbysize>
        {listItems3}
      </div>
    </div>
  );
};

export default Card1;
