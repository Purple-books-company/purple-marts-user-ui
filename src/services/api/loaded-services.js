import { ApiGetService, ApiPostService } from "./api-services";

let categories = [];
let subcategories = [];
let home = [];

// Gets all the (get) requests
async function getApi() {
  getCategory();
  getHome();
}

async function getCategory() {
  categories = await ApiGetService(process.env.REACT_APP_CATEGORY_GET_URL);
}

async function getHome() {
  home = await ApiGetService(process.env.REACT_APP_HOME_URL);
}

// Handles post requests
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
}

// Fetches data as per need
async function fetchResult(item) {
  switch (item) {
    case "categories":
      if (categories.length === 0) await getCategory();
      return categories;

    case "subcategories":
      if (subcategories.length === 0) await postApi("subcategories");
      return subcategories;

    case "home":
      if (home.length === 0) await getHome("home");
      return home;

    // case "profile":
    //  return profile;

    default:
      return null;
  }
}

export { getApi, fetchResult };
