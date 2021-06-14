import axios from "axios";
import storeDetails from "../storage/store-details";

async function ApiGetService(link) {
  let url = process.env.REACT_APP_API + link;

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
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
  let url = process.env.REACT_APP_API + link;
  let res;

  console.log("Link to be sent: ", link);

  try {
    let Token = process.env.REACT_APP_TOKEN;
    res = await axios.post(url, data, {
      headers: {
        Authorization: Token,
      },
    });
    if (
      (link === process.env.REACT_APP_LOGIN_URL || link === process.env.REACT_APP_REGISTER_URL) &&
      localStorage.getItem("isLogged") !== true
    ) {
      storeDetails(res);
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
