import { ApiGetService, ApiPostService } from "./api-services";

// Gets all the (get) requests
let categories = [];
async function getApi() {
  categories = await ApiGetService(process.env.REACT_APP_CATEGORY_GET_URL);
}

async function postApi(data) {
  subcategories = await ApiPostService(
    process.env.REACT_APP_CATEGORY_GET_URL,
    data
  );
}

// Fetches data as per need
const fetchResult = async (item) => {
  switch (item) {
    case "categories":
      if (categories.length === 0) await getApi();
      return categories;
    // case "profile":
    //  return profile;
    default:
      return null;
  }
};

export { getApi, fetchResult };
