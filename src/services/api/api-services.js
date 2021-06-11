import axios from "axios";
import storeDetails from "../storage/store-details";
import { API, TOKEN, LOGIN_URL } from "../../config";

async function ApiGetService(link) {
  
  let url = API + link;

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: TOKEN,
      },
    });
    if (res.data.success) {
      return res.data.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function ApiPostService(link, data) {
  let url = API + link;
  let res;

  console.log("Link to be sent: ", link);

  try {
    let Token = TOKEN;
    res = await axios.post(url, data, {
      headers: {
        Authorization: Token,
      },
    });
    if (link === LOGIN_URL && localStorage.getItem("isLogged") !== true) {
      storeDetails(res, data);
    }

    console.log("Full response: ", res);

    if (res.data.success) {
      console.log("Data Posted!");
      return res.data;
    } else {
      console.log("Req is not completed. ", res.data.err);
      return res.data.err;
    }
  } catch (error) {
    console.log("Catch error: ", error);
    return null;
  }
}

export { ApiGetService, ApiPostService };
