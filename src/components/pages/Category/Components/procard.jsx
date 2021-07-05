import React,{ useState,useEffect,forwardRef,useImperativeHandle } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Route } from "react-router-dom";
// import product_card from "../../../../api/Products.json";
import { fetchResult } from "../../../../services/api/loaded-services";
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
  Productpage
} from "../../../../styles/pages/category-styles";
import { useParams } from "react-router-dom";

const Card1 = () => {
  const [productData, setproductData] = useState([])
  const [wishlist, setwishlist] = useState(true)
  const [radioPrice, SetRadioPrice] = useState("100to200");
  const [radioSize, SetRadioSize] = useState("XXL");
  // const [toggleHeart, setToggleHeart] = useState(false);

  async function fetchCategory(cat){
    let pro=[];
    pro = await fetchResult("productcategory",cat)
    setproductData(pro)
    console.log("product",productData)
    console.log("casga",cat)
   }
   async function fetchsubCategory(subcat){
    let pro=[];
    pro = await fetchResult("productsubcategory",subcat)
    setproductData(pro)
    console.log("product",productData)
    console.log("casga",subcat)
   }
  const params = useParams();
  console.log("paramsslug",params.slug);
  console.log("paramssubslug",params.subslug);
  useEffect(() => {
    // Fetch single product here
    if(params.subslug == undefined || params.subslug==='All')
      fetchCategory(params.slug)
    else
      fetchsubCategory(params.subslug)
    }, [params.slug,params.subslug]);
  // function HeartToggle(id) {
  //   setToggleHeart(!toggleHeart);
  //   console.log(id);
  //   console.log(toggleHeart);
  // }
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
            <LabelforSize htmlFor="100to200">₹100 - ₹200</LabelforSize>
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
            <LabelforSize htmlFor="200to300">₹200 - ₹300</LabelforSize>
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
            <LabelforSize htmlFor="300to400">₹300 - ₹400</LabelforSize>
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
            <LabelforSize htmlFor="400to500">₹400 - ₹500</LabelforSize>
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
            <LabelforSize htmlFor="XXLarge">XXL</LabelforSize>
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
            <LabelforSize htmlFor="Xlarge">Xl</LabelforSize>
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
            <LabelforSize htmlFor="Large">L</LabelforSize>
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
            <LabelforSize htmlFor="Small">S</LabelforSize>
          </Shoplist>
        </Shopcard>
      </Shopcol>
    </div>
  );
  return (
    <Productpage className="container">
      <div className="row">
      {productData.length > 0 &&
    productData.map((item,id) => (
    <Card className="col-xs-6 col-md-4 col-lg-2" key={id}>
      <Badge Status={item.badge}>NEW</Badge>
      <a href= {`/products/${item.id}`}>
        <CardImg
          alt="Card image"
          className="card-img-top"
          variant="top"
          src={item.image}
        />
      </a>
      <div className="card-block">
        <CardProductName key={item.id} to={`/products/${item.id}`} className="card-title">
         {item.name}
        </CardProductName>
        <CardProductDescription className="card-text">
          {item.description}
        </CardProductDescription>
        <CardProductBottomDetails className="product-bottom-details">
          ₹{item.buyingPrice}
          <CardProductOldprice>₹{item.originalPrice}</CardProductOldprice>
          <CardProductOffer>{item.discount}%OFF</CardProductOffer>
          <CardWishlist id={id} href="">
          <span>
                                {
                                    wishlist ?
                                        <FiHeart onClick={() => setwishlist(!wishlist)} />
                                        :
                                        <FaHeart onClick={() => setwishlist(!wishlist)}/>
                                }
          </span>
              {/* <FiHeart
              className={toggleHeart ? "heart active" : "heart"}
              onClick={() => HeartToggle(id)}
            /> */}
          </CardWishlist>
        </CardProductBottomDetails>
      </div>
    </Card>
  ))}
        <Shopbyprice className="row">
          <h4>Shop by Price</h4>
          <ShopbyPrice />
        </Shopbyprice>
        {/* {listItems2} */}
        <Shopbysize className="row">
          <h4>Shop by Size</h4>
          <ShopbySize />
        </Shopbysize>
        {/* {listItems3} */}
      </div>
      
    </Productpage>
  );
          };

export default Card1;
