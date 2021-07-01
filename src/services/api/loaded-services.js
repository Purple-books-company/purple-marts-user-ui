import { ApiGetService, ApiPostService } from "./api-services";

// Gets all the (get) requests
let categories = [];
let subcategories = [];
async function getApi() {
  categories = await ApiGetService(process.env.REACT_APP_CATEGORY_GET_URL);
  subcategories=await ApiGetService(process.env.REACT_APP_SUBCATEGORY_GET_URL);
}

// async function postApi(value) {
//   let element;
//   if (value === "subcategories"){
//     console.log("POST")
//     for (let index = 0; index < categories.length; index++) {
//       element = categories[index];
//       let result = await ApiPostService(
//         process.env.REACT_APP_SUBCATEGORY_POST_URL,
//         {category : element.name}
//       );
//      result.data.forEach(item => {
//        console.log("item",item);
//        subcategories.push(item);
//      });  
//     }
//   }
// }

// Fetches data as per need
const fetchResult = async (item) => {
  switch (item) {
    case "categories":
      if (categories.length === 0) await getApi();
      return categories;
    case "subcategories":
      if (subcategories.length === 0) await getApi();
      return subcategories;
    // case "profile":
    //  return profile;
    default:
      return null;
  }
};

export { getApi, fetchResult };