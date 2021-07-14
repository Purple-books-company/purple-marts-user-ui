import React,{ useState,useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import product_card from "../../../../api/Products.json";
import PuffLoader from "react-spinners/PuffLoader";
import { fetchResult } from "../../../../services/api/loaded-services";
import { LightShade } from "../../../../styles/themes/color-theme";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TiMediaPlayOutline } from "react-icons/ti";
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
  Productpage,
  Text
} from "../../../../styles/pages/category-styles";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Card1 = () => {
  let history = useHistory();
  const [page,setPage] = useState(1); 
  const [productData, setproductData] = useState([])
  const [radioPrice, SetRadioPrice] = useState("100to200");
  const [radioSize, SetRadioSize] = useState("XXL");
  const [loading, setloading] = useState(true);
  const [noMore,setNoMore] = useState(false); 
  // const [toggleHeart, setToggleHeart] = useState(false);
  async function fetchCategory(cat, p){
    let pro=[];
    pro = await fetchResult("productcategory",cat,p)
    if(pro.length < 10)
      setNoMore(true);
    console.log("pagecat",p)
    if(p === 1)
      setproductData([...pro])
    else{
      let data = [...productData];
      data = data.concat(pro);
      setproductData([...data])
    }
    setPage(p+1)
    setloading(false);
    console.log("product",productData)
    console.log("casga",cat)
   }
   async function fetchsubCategory(subcat,p){
    let pro=[];
    pro = await fetchResult("productsubcategory",subcat,p)
    if(pro.length < 10)
      setNoMore(true);
    if(p === 1)
      setproductData([...pro])
    else{
      let data = [...productData];
      data = data.concat(pro);
      setproductData([...data])
    }
    setPage(p+1)
    setloading(false);
    console.log("product",productData)
    console.log("casga",subcat)
   }
  const params = useParams();
  console.log("paramsslug",params.slug);
  console.log("paramssubslug",params.subslug);

  useEffect(() => {
    // Fetch single product here
    console.log("slufsihsivg",params,page,productData)
    setNoMore(false);
    if(params.subslug === undefined || params.subslug==='All')
      fetchCategory(params.slug, 1)
    else
      fetchsubCategory(params.subslug, 1)
    }, [params.slug,params.subslug]);
  const updatewish = async (id,wish) => {
    let item=productData;
    console.log("wishid",id);
    console.log("wishstatus",wish)
    let wishlistproduct=[];
    if(wish){
      wishlistproduct = await fetchResult("removefromwishlist",id)
      console.log("wishlistproduct",wishlistproduct)
      if(wishlistproduct.description.includes("doesn't")){
        toast("Already removed from Wishlist!",{
          style:{backgroundColor:`${LightShade}`,color:'white',width:'60%'}
        });
      }
      else if(wishlistproduct.description.includes("successfully")){
        toast("Removed from Wishlist!",{
          style:{backgroundColor:'plum',color:'white',width:'50%'}
        });
        let a=item.find(e => e.id === id)
        a.wishlist = !a.wishlist;
        console.log("uytdfgh",item)
        setproductData([...item])
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
      wishlistproduct = await fetchResult("addtowishlist",id)
      console.log("wishlistproduct",wishlistproduct)
      if(wishlistproduct.description.includes("Already")){
        toast("Already in Wishlist!",{
          style:{backgroundColor:`${LightShade}`,color:'white',width:'60%'}
        });
      }
      else if(wishlistproduct.description.includes("created")){
        toast("Added To Wishlist!",{
          style:{backgroundColor:'plum',color:'white',width:'50%'}
        });
        let a=item.find(e => e.id === id)
        a.wishlist = !a.wishlist;
        console.log("uytdfgh",item)
        setproductData([...item])
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
 
  const showmore = () => {
    if(params.subslug === undefined || params.subslug==='All')
      fetchCategory(params.slug, page)
    else
      fetchsubCategory(params.subslug, page)
  }

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
    <>
    <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  pauseOnHover />
    {loading ? <div style={{display: "flex",alignItems: "center",paddingLeft:'35%'}}><PuffLoader color={"purple"} size={60} /></div> : 
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
          <CardProductOffer>{item.discount === 0 ? <CardWishlist to={`/products/${item.id}`} style={{paddingLeft:'1.5rem'}}><AiOutlineShoppingCart/></CardWishlist>: item.discount+'%OFF'}</CardProductOffer>
          <CardWishlist onClick={() => updatewish(item.id,item.wishlist)}>
          <span>
          {item.wishlist ?
              <FaHeart/>
                  :
              <FiHeart/>}
          </span>
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
      {!noMore ?
        <Text
        style={{textAlign:'center'}}
        cursor="true"
        case="capitalize"
        space="0px"
        thickness="500"
        size="100%"
        color="#282c3f"
        onClick={showmore}
        style={{ width:'max-content' }}
        className="mb-5 p-1 m-auto"
      >
        <TiMediaPlayOutline size="22" className="mb-1" /> Show More
      </Text> : <Text thickness="500" style={{textAlign:'center',paddingBottom:'5px'}}>No More Data</Text>

      }
      
    </Productpage>
   }</>
  );
          };

export default Card1;
