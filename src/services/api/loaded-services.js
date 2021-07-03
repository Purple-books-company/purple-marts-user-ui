import { retriveDetails } from "../storage/details";
import { ApiGetService, ApiPostService } from "./api-services";

let categories = [];
let subcategories = [];
let home = [];
let product=[];

// Gets all the (get) requests
async function getApi() {
  getCategory();
  getHome();
}

async function postApi(value) {
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
  let element=[];
    let custId = retriveDetails()
    console.log("fvd",custId)
  if (value === "product"){
    if(custId === null){
             let productDetails = await ApiPostService(process.env.REACT_APP_PRODUCT_POST_GENERAL_URL,{'category':opt,'page':1})
              product = productDetails.data
              return product
              // console.log("pro",product)
      } 
    else{
            let productDetails = await ApiPostService(process.env.REACT_APP_PRODUCT_POST_URL,{'customer':custId.id,'category':opt,'page':1})
              product = productDetails.data
              console.log("pro",product)
              return product
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

    case "home":
      if (home.length === 0) await getHome();
      return home;
    
    case "product":  
      return await postProduct("product",opt);
    // case "profile":
    //  return profile;

    default:
      return null;
  }
}

export { getApi, postApi, fetchResult };