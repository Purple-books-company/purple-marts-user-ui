import React, { useState, useEffect } from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { Carousel, Form } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaStar, FaRegStar } from "react-icons/fa";
import PuffLoader from "react-spinners/PuffLoader";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { fetchResult } from "../../../services/api/loaded-services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  BackBtn
} from "../../../styles/pages/category-styles";
import { Button } from "../../../styles/widgets/widgets";
import StarRatings from "react-star-ratings";
import Rating from "react-rating";
import { Lora } from "../../../styles/themes/font-styles";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { LightShade } from "../../../styles/themes/color-theme";
import $ from "jquery";
import { useHistory } from "react-router-dom";
const Card2 = ({item,setItem,loading}) => {
  let history = useHistory();
  const [selectedOption0, setSelectedOption0] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [Quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const[zeroState,setZeroState] = useState("");
  const[oneState,setOneState] = useState("");
  const[images,setImages] = useState([]);
  const[originalPrice,setOriginalPrice] = useState(0);
  const[offerPrice,setOfferPrice] = useState(0);
  const[discount,setDiscount] = useState(0);
  const[varientId,setVarientId] = useState("");
  console.log(selectedOption0);
  console.log(selectedColor);
  console.log(Quantity);
  console.log(rating);
  function handleColor(c) {
    setZeroState(c);
  }
  const Addtocart = async () => {
    let cart ={
      'id': item.id,
      'count':Quantity,
      'varient': varientId,
      'image': images[0].image
    };
    console.log("cartdata",cart)
    let cartproduct=[];
    cartproduct = await fetchResult("addtocart",cart)
    console.log("cartproduct",cartproduct)
    if(cartproduct!==null && cartproduct.description.includes("Update")){
      toast("Updated To Cart!",{
        style:{backgroundColor:`${LightShade}`,color:'white',width:'60%'}
      });
    }
    else if(cartproduct!==null && cartproduct.description.includes("created")){
      toast("Added To Cart!",{
        style:{backgroundColor:'plum',color:'white',width:'50%'}
      });
    }else if(cartproduct !==null && cartproduct.description==="" && cartproduct.customer===null){
      history.push("/login");
    }
    else{
      toast.error("Error to add cart");
    }
  }
  const Addtowishlist = async () => {
    let wishlistproduct={description:''};
    if(item.wishlist){
      wishlistproduct = await fetchResult("removefromwishlist",item.id)
      if(wishlistproduct.description.includes("doesn't")){
        toast("Already removed from Wishlist!",{
          style:{backgroundColor:`${LightShade}`,color:'white',width:'60%'}
        });
      }
      else if(wishlistproduct.description.includes("successfully")){
        toast("Removed from Wishlist!",{
          style:{backgroundColor:'plum',color:'white',width:'50%'}
        });
        item.wishlist =!item.wishlist
        setItem({...item});
      }else if(wishlistproduct !==null && wishlistproduct.description==="" && wishlistproduct.customer===null){
        history.push("/login");
      }
      else{
        toast.error("Error in Removing from Wishlist",{
          style:{backgroundColor:'plum',color:'white',width:'50%'}
        });
      }
    }
    else{
      wishlistproduct = await fetchResult("addtowishlist",item.id)
      if(wishlistproduct.description.includes("Already")){
        toast("Already in Wishlist!",{
          style:{backgroundColor:`${LightShade}`,color:'white',width:'60%'}
        });
      }
      else if(wishlistproduct.description.includes("created")){
        toast("Added To Wishlist!",{
          style:{backgroundColor:'plum',color:'white',width:'50%'}
        });
        item.wishlist =!item.wishlist
        setItem({...item});
      }else if(wishlistproduct !==null && wishlistproduct.description==="" && wishlistproduct.customer===null){
        history.push("/login");
      }
      else{
        toast.error("Error in Adding to Wishlist",{
          style:{backgroundColor:'plum',color:'white',width:'50%'}
        });
      }
    }
  }
  function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  // console.log("dataaaa",item)
  const RatingReviewlist = item.recent_review !== undefined  && item.recent_review.map((rating) => (
    <div className="row mb-4">
      <div className="media">
        <div className="d-lg-flex">
          <StarRatings
            rating={rating.rating}
            starDimension="25px"
            starSpacing="2px"
            starRatedColor="gold"
            starEmptyColor="gray"
          />
        </div>
        {rating.description}
      </div>
    </div>
  ));
  const Similarlist = item.images !== undefined  && item.suggestion.map((suggest) => (
    <Card className="col-xs-6 col-md-4 col-lg-2" key={suggest.id}>
      <Badge Status={item.badge}>NEW</Badge>
      <a href="/products">
        <CardImg
          alt="Card image"
          className="card-img-top"
          variant="top"
          src={suggest.image}
        />
      </a>
      <div className="card-block">
        <CardProductName href="/products" className="card-title">
       {suggest.name}
        </CardProductName>
        <CardProductDescription className="card-text">
          {suggest.description}
        </CardProductDescription>
        <CardProductBottomDetails className="product-bottom-details">
          ₹{suggest.offerPrice}
          <CardProductOldprice>₹{suggest.originalPrice}</CardProductOldprice>
          <CardProductOffer>{suggest.discount === 0 ? <CardWishlist style={{paddingLeft:'1.5rem'}}><AiOutlineShoppingCart/></CardWishlist>: suggest.discount+'%OFF'}</CardProductOffer>
          <CardWishlist href="">
            <FiHeart />
          </CardWishlist>
        </CardProductBottomDetails>
      </div>
    </Card>
  ));
  const types = item.typeKey !== undefined  && item.typeKey.length >=1 && (
    (item.typeKey[0].trim().toLowerCase() ==="color" ? 
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
                  {item.typeVarients !== undefined && item.typeVarients[item.typeKey[0]].map((color) => (
                    <ProductColorDetail 
                      className={zeroState===color ? "active" : ""}
                      key={color}
                      onClick={() => handleColor(color)}
                      style={{ background: color.trim().toLocaleLowerCase().replaceAll(" ", "") }}
                    ></ProductColorDetail>
                  ))}
              </div>
    </div>
    :
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
        {capitalizeFirstLetter(item.typeKey[0].trim())}:
      </h4>
      <select
        style={{
          fontSize: "16px",
          height: "80%",
          color: "purple",
          borderBlockColor: "plum",
          borderRadius: "25px",
        }}
        value={selectedOption0}
        onChange={(e) => {
          setSelectedOption0(e.target.value)
          setZeroState(e.target.value);
        }}
      >
        {console.log("setone",oneState)}
        {console.log("item.type[zeroState]",item.type[zeroState])}
        {item.typeVarients !== undefined && item.typeVarients[item.typeKey[0]].map((varient) => (
          <option key={varient} value={varient}>
            {varient}
          </option>
        ))}
      </select>
    </div>
  </div>)
  );
  const types1 = item.typeKey !== undefined  && item.typeKey.length ===2 && (
    (item.typeKey[1].trim().toLowerCase() ==="color" ? 
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
                  {item.typeVarients !== undefined && item.typeVarients[item.typeKey[0]].map((color) => (
                    <ProductColorDetail
                      key={color}
                      onClick={() => handleColor(color)}
                      style={{ background: color.trim().toLocaleLowerCase().replaceAll(" ", "") }}
                    ></ProductColorDetail>
                  ))}
              </div>
    </div>
    :
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
        {capitalizeFirstLetter(item.typeKey[1].trim())}:
      </h4>
      <select
        style={{
          fontSize: "16px",
          height: "80%",
          color: "purple",
          borderBlockColor: "plum",
          borderRadius: "25px",
        }}
        value={selectedOption1}
        onChange={(e) => {
          setSelectedOption1(e.target.value)
          setOneState(e.target.value);
        }}
      >
        {console.log("setone",oneState)}
        {console.log("item.type[zeroState]",item.type[zeroState])}
        {item.type!==undefined && item.type[zeroState]!==undefined && item.type[zeroState].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  </div>)
  );
  function Varient(var1, a, b){
    console.log("abc",var1,a,b)
    if(b !=="" && b !== undefined && var1.varientType[0].value === a && var1.varientType[1].value === b)
        return true
    else if((b ==="" || b === undefined)&& var1.varientType[0].value === a)
        return true
    return false
}
  useEffect(() => {
    if(item!==undefined && item.typeKey!==undefined && item.typeKey.length >=1 && item.typeVarients!==undefined){
      setZeroState(item.typeVarients[item.typeKey[0]][0])
      setOneState(item.type[item.typeVarients[item.typeKey[0]][0]][0])
      let varients = item.varients[0];
      setImages([...varients.images])
      setOfferPrice(varients.offerPrice)
      setOriginalPrice(varients.originalPrice)
      setDiscount(varients.discount)
      setVarientId(varients.id)
    }
  },[item]);
  useEffect(() => {
    if(zeroState!=="" && oneState !=="" && item !== undefined && item.varients!==undefined){
      let varients = item.varients.find(e=>Varient(e, zeroState, oneState))
      console.log("Varientsss",varients)
      if(varients!==null && varients!==undefined){
        setImages([...varients.images])
        setOfferPrice(varients.offerPrice)
        setOriginalPrice(varients.originalPrice)
        setDiscount(varients.discount)
        setVarientId(varients.id)
      }
    }
    console.log("zerooooo",zeroState);
    console.log("oneeee",oneState)
  },[zeroState,oneState]);
  return <div className="d-flex">
     <BackBtn className="" aln="true"onClick={() => history.goBack()} >
          <span className="">
            <BsArrowLeftShort className="mx-2" />
            Back
          </span>
        </BackBtn>
        {loading ? <div style={{display: "flex",alignItems: "center",paddingBottom:'160%',paddingTop:'160%'}}><PuffLoader color={"purple"} size={60} /></div> : 
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
              {images !== undefined  && images.map((img) => (
                <Carousel.Item  interval={4000}>
                  <img
                    style={{
                      height: "28rem",
                      alignContent: "center",
                      objectFit: "contain",
                    }}
                    className=" d-block w-100"
                    src={img.image}
                    alt="product"
                  />
                </Carousel.Item>
              ))}
            </Caro>
          </ProductImg>
          <div className="col-xs-6 col-md-6 col-lg-6">
            <div className="row">
              <ProductNameDetail>{item.name}</ProductNameDetail>
            </div>
            <div className="row">
              <ProductPriceDetail>
                ₹{offerPrice}
                <ProductOldPriceDetail>₹{originalPrice}</ProductOldPriceDetail>
                <ProductOfferDetail>{discount === 0 ? '': discount+'%OFF'}</ProductOfferDetail>
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
                  {item.description}
                </p>
              </div>
            </div>
            {types}
            {types1}
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
                  ₹{offerPrice * Quantity}
                </h4>
              </div>
            </div>
            <div className="row mt-2">
              <CartButton
                style={{ paddingLeft: "22%" }}
                className="col-xs-12 col-md-6"
              >
                <Button onClick={Addtocart}>Add to Cart</Button>
                <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  pauseOnHover />
              </CartButton>
              <br />
              <WishlistButton className="col-xs-12 col-md-6">
                {item.wishlist ?
                <Button onClick={() => Addtowishlist()}>Remove from Wishlist</Button>
                 :  
                <Button onClick={() => Addtowishlist()}>Add to Wishlist</Button> 
                }
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
      {/* <div className="container">
        <div className="row">
          <ProductWriteReview>Give Review & Rating</ProductWriteReview>
        </div>
        <div className="row d-flex">
          <Form style={{ width: "70%",paddingBottom:'2%' }}>
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
      </div> */}
    </div> }
    </div>;
};

export default Card2;
