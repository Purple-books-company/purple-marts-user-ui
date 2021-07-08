import { retriveDetails } from "../storage/details";
import { ApiGetService, ApiPostService } from "./api-services";
import { Redirect } from 'react-router'
let home = [];
let product=[];
let categories = [];
let subcategories = [];
let userData = {};
let personalDetails={};


// Gets all the (get) requests
async function getApi() {
  getCategory();
  getHome();
}

async function postApi(value) {
  let element;
  if (value === "subcategories") {
    for (let index = 0; index < categories.length; index++) {
      element = categories[index];
      console.log(element);
      subcategories = await ApiPostService(
        process.env.REACT_APP_SUBCATEGORY_POST_URL,
        { category: element.name }
      );
    }
  }
  if (value === "profile") {
    let userId = await retriveDetails()
    let userDetails = await ApiPostService(process.env.REACT_APP_PROFILE, { 'customer': userId.id })
    userData = userDetails.data
    personalDetails = userDetails.data.personalInfo
  }

  postProduct(value);
}

async function getCategory() {
  categories = await ApiGetService(process.env.REACT_APP_CATEGORY_GET_URL);
  subcategories=await ApiGetService(process.env.REACT_APP_SUBCATEGORY_GET_URL);
}

async function getHome() {
  home = await ApiGetService(process.env.REACT_APP_HOME_URL);
}

// Handles post requests

async function postProduct(value,opt) {
    let custId = retriveDetails()
    console.log("fvd",custId)
  if (value === "productcategory"){
    if(custId === null){
             let productDetails = await ApiPostService(process.env.REACT_APP_PRODUCT_POST_CAT_GENERAL_URL,{'category':opt,'page':1})
              product = productDetails.data
              return product
              // console.log("pro",product)
      } 
    else{
            let productDetails = await ApiPostService(process.env.REACT_APP_PRODUCT_POST_CAT_URL,{'customer':custId.id,'category':opt,'page':1})
              product = productDetails.data
              // console.log("pro",product)
              return product
      }
    } 
    if (value === "productsubcategory"){
      if(custId === null){
               let productDetails = await ApiPostService(process.env.REACT_APP_PRODUCT_POST_SUBCAT_GENERAL_URL,{'subCategory':opt,'page':1})
                product = productDetails.data
                return product
                // console.log("pro",product)
        } 
      else{
              let productDetails = await ApiPostService(process.env.REACT_APP_PRODUCT_POST_SUBCAT_URL,{'customer':custId.id,'subCategory':opt,'page':1})
                product = productDetails.data
                console.log("sub",opt)
                return product
        }
      } 
      if (value === "singleproduct"){
        if(custId === null){
                 let productDetails = await ApiGetService(process.env.REACT_APP_GET_PARTICULAR_PRODUCT+opt+'/')
                  product = productDetails
                  console.log("productdetails",productDetails)
                  return product
          } 
        else{
                let productDetails = await ApiPostService(process.env.REACT_APP_GET_PARTICULAR_PRODUCT,{'customer':custId.id,'product':opt})
                  product = productDetails.data
                  console.log("subsingle",productDetails)
                  return product
          }
        }  
        if (value === "addtocart"){
          if(custId === null){
            <Redirect to="/login"/>
            } 
          else{
                  let cart = await ApiPostService(process.env.REACT_APP_CART_URL,{'customer':custId.id,'product':opt.id,'varient':opt.varient,'image':opt.image,'count':opt.count})
                    console.log("cart",cart)
                    return cart
            }
          }
          if (value === "addtowishlist"){
            if(custId === null){
              <Redirect to="/login"/>
              } 
            else{
                    let wishlist = await ApiPostService(process.env.REACT_APP_ADD_WISHLIST_URL,{'customer':custId.id,'product':opt})
                      console.log("wishlist",wishlist)
                      return wishlist
              }
            }
            if (value === "removefromwishlist"){
              if(custId === null){
                <Redirect to="/login"/>
                } 
              else{
                      let wishlist = await ApiPostService(process.env.REACT_APP_REMOVE_WISHLIST_URL+ custId.id +"/"+opt+"/")
                        console.log("wishlist",wishlist)
                        return wishlist
                }
              }
      return [];
  }

// Fetches data as per need
async function fetchResult(item,opt=null) {
  switch (item) {
    case "categories":
      if (categories.length === 0) await getCategory();
      return categories;

    case "subcategories":
      if (subcategories.length === 0) await getCategory();
      return subcategories;

    case "profile":
      return userData;
      
    case 'delivery':
      return personalDetails;
      
    case "home":
      if (home.length === 0) await getHome();
      return home;
    
    case "productcategory":  
      return await postProduct("productcategory",opt);
    
    case "productsubcategory":
      return await postProduct("productsubcategory",opt);

    case "singleproduct":
      return await postProduct("singleproduct",opt);

    case "addtocart":
      return await postProduct("addtocart",opt)

    case "addtowishlist":
      return await postProduct("addtowishlist",opt)
    
    case "removefromwishlist":
      return await postProduct("removefromwishlist",opt)

    default:
      return null;
  }
}


export { getApi, postApi, fetchResult };

