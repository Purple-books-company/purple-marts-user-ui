import React, { useState, useEffect } from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { Carousel, Form } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import product from "../../../../api/SingleProduct.json";
import product_card from "../../../../api/Products.json";
import Ratingreview from "../../../../api/RatingReview.json";
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
  ProductImg,
  ProductNameDetail,
  ProductPriceDetail,
  ProductOldPriceDetail,
  ProductOfferDetail,
  ProductColorDetail,
  QtyBtn,
  ProductSubDetail,
  ProductWriteReview,
  FormControl,
  Caro,
  CartButton,
  WishlistButton,
  Similar,
} from "../../../../styles/pages/category-styles";
import { Button } from "../../../../styles/widgets/widgets";
import StarRatings from "react-star-ratings";
import Rating from "react-rating";
import { Lora } from "../../../../styles/themes/font-styles";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { LightShade } from "../../../../styles/themes/color-theme";
import $ from "jquery";
const Card2 = () => {
  const [selectedOption, setSelectedOption] = useState("XXL");
  const [selectedColor, setSelectedColor] = useState("");
  const [Quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  console.log(selectedOption);
  console.log(selectedColor);
  console.log(Quantity);
  console.log(rating);
  function handleColor(e) {
    setSelectedColor(e.target.style.background);
  }
  const RatingReviewlist = Ratingreview.map((item) => (
    <div className="row mb-4">
      <div className="media">
        <div className="d-lg-flex">
          <h5 className="mt-1" style={{ marginRight: "20px" }}>
            {item.review_heading}
          </h5>
          <StarRatings
            rating={item.rating}
            starDimension="25px"
            starSpacing="2px"
            starRatedColor="gold"
            starEmptyColor="gray"
          />
        </div>
        {item.review_description}
      </div>
    </div>
  ));
  const Similarlist = product_card.slice(0, 5).map((item) => (
    <Card className="col-xs-6 col-md-4 col-lg-2" key={item.id}>
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
  const listItems = product.map((item) => (
    <div key={item.id}>
      <div className="container">
        <div className="row">
          <ProductImg
            className="col-xs-6 col-md-6 col-lg-6"
            style={{ marginTop: "8%" }}
          >
            <Caro
              prevLabel=""
              nextLabel=""
              nextIcon={
                <GrFormNextLink
                  style={{
                    fontSize: "30px",
                    fontWeight: "bolder",
                    backgroundColor: `${LightShade}`,
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                />
              }
              prevIcon={
                <GrFormPreviousLink
                  style={{
                    fontSize: "30px",
                    fontWeight: "bolder",
                    backgroundColor: `${LightShade}`,
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                />
              }
            >
              {item.src.map((img) => (
                <Carousel.Item key={img.value} interval={4000}>
                  <img
                    style={{
                      height: "28rem",
                      alignContent: "center",
                      objectFit: "contain",
                    }}
                    className=" d-block w-100"
                    src={img}
                    alt="image"
                  />
                </Carousel.Item>
              ))}
            </Caro>
          </ProductImg>
          <div className="col-xs-6 col-md-6 col-lg-6">
            <div className="row">
              <ProductNameDetail>{item.product_name}</ProductNameDetail>
            </div>
            <div className="row">
              <ProductPriceDetail>
                ₹{item.newprice}
                <ProductOldPriceDetail>₹{item.oldprice}</ProductOldPriceDetail>
                <ProductOfferDetail>{item.offer}% Off</ProductOfferDetail>
              </ProductPriceDetail>
            </div>
            <div className="row">
              <StarRatings
                rating={item.rating}
                starDimension="25px"
                starSpacing="2px"
                starRatedColor="gold"
                starEmptyColor="gray"
              />
            </div>
            <div className="row">
              <div className="container">
                <p
                  style={{
                    paddingTop: "15px",
                    fontFamily: `${Lora}`,
                    textAlign: "justify",
                  }}
                >
                  {item.description}Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="row mt-2">
              <div className="d-flex">
                <h4
                  style={{
                    fontFamily: `${Lora}`,
                    fontSize: "20px",
                    fontWeight: "500",
                    marginRight: "10px",
                  }}
                >
                  Size:
                </h4>
                <select
                  style={{
                    fontSize: "16px",
                    height: "80%",
                    color: "purple",
                    borderBlockColor: "plum",
                    borderRadius: "25px",
                  }}
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  {item.size.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="d-flex">
                <h4
                  style={{
                    fontFamily: `${Lora}`,
                    fontSize: "20px",
                    fontWeight: "500",
                    marginRight: "10px",
                  }}
                >
                  Color:
                </h4>
                {item.colors.map((color) => (
                  <ProductColorDetail
                    key={color.value}
                    onClick={(e) => handleColor(e)}
                    style={{ background: color }}
                  ></ProductColorDetail>
                ))}
              </div>
            </div>
            <div className="row mt-2">
              <div className="d-flex">
                <h4
                  style={{
                    fontFamily: `${Lora}`,
                    fontSize: "20px",
                    fontWeight: "500",
                    marginRight: "10px",
                  }}
                >
                  Quantity:
                </h4>
                <QtyBtn
                  onClick={() => {
                    if (Quantity !== 1) {
                      setQuantity(Quantity - 1);
                    }
                  }}
                >
                  <FiMinusCircle className="mx-2" />
                </QtyBtn>
                <p>{Quantity}</p>
                <QtyBtn
                  onClick={() => {
                    setQuantity(Quantity + 1);
                  }}
                >
                  <FiPlusCircle className="mx-2" />
                </QtyBtn>
              </div>
            </div>
            <div className="row mt-2">
              <div className="d-flex">
                <h4
                  style={{
                    fontFamily: `${Lora}`,
                    fontSize: "20px",
                    fontWeight: "500",
                    marginRight: "10px",
                  }}
                >
                  Total Price:
                </h4>
                <h4 style={{ fontFamily: `${Lora}`, fontSize: "20px" }}>
                  ₹{item.newprice * Quantity}
                </h4>
              </div>
            </div>
            <div className="row mt-2">
              <CartButton
                style={{ paddingLeft: "25%" }}
                className="col-xs-12 col-md-6"
              >
                <Button>Add to Cart</Button>
              </CartButton>
              <br />
              <WishlistButton className="col-xs-12 col-md-6">
                <Button>Add to Wishlist</Button>
              </WishlistButton>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-2">
          <ProductSubDetail>Similar Products</ProductSubDetail>
        </div>
        <Similar className="row d-flex">{Similarlist}</Similar>
      </div>
      <div className="container">
        <div className="row">
          <ProductSubDetail>Reviews And Ratings</ProductSubDetail>
        </div>
        <div className="row d-flex">{RatingReviewlist}</div>
      </div>
      <div className="container">
        <div className="row">
          <ProductWriteReview>Give Review & Rating</ProductWriteReview>
        </div>
        <div className="row d-flex">
          <Form style={{ width: "70%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Overall Rating</Form.Label>
              <div style={{ color: "gold", fontSize: "26px" }} className="row">
                <Rating
                  fractions={2}
                  emptySymbol={<FaRegStar />}
                  fullSymbol={<FaStar />}
                  initialRating={rating}
                  onClick={(rate) => setRating(rate)}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ReviewTitle">
              <Form.Label>Review Title</Form.Label>
              <FormControl
                className="form-control"
                type="text"
                placeholder="Enter Review Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ReviewDescription">
              <Form.Label>Review Description</Form.Label>
              <FormControl
                className="form-control"
                as="textarea"
                placeholder="Enter Review Description"
                rows={3}
              />
            </Form.Group>
            <Button type="submit">Submit Review</Button>
          </Form>
        </div>
      </div>
    </div>
  ));
  useEffect(() => {
    $("button").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
  return <div>{listItems}</div>;
};

export default Card2;
