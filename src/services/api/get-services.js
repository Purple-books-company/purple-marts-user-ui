import { ApiGetService } from "./api-services";

// Gets all the (get) requests
let categories = [];
const getApi = async () => {
  categories = await ApiGetService(process.env.REACT_APP_CATEGORY_GET_URL);
};

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
