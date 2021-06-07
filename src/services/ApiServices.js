import axios from "axios";
import { API, TOKEN } from "../config";

async function ApiGetService(link) {
  let url = API + link;
  let Token = TOKEN;
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: Token,
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

  try {
    if (localStorage.getItem("isLogged") !== true) {
      res = await axios.post(url, data);

      console.log(res.data.data);
      localStorage.setItem("isLogged", res.data.success);
      localStorage.setItem("photo", res.data.data.photo);
      localStorage.setItem("email", data.email);
    } else {
      let Token = TOKEN;
      res = await axios.post(url, data, {
        headers: {
          Authorization: Token,
        },
      });
    }

    if (res.data.success) {
      console.log("Data Posted!");
      return true;
    } else {
      console.log(res.data.err);
      return res.data.err;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { ApiGetService, ApiPostService };
