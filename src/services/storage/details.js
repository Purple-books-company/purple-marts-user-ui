var CryptoJS = require("crypto-js");

export const storeDetails = (res) => {
  console.log(res.data.data.customerId);

  let cipherId = CryptoJS.AES.encrypt(
    res.data.data.customerId,
    process.env.REACT_APP_SECRET_KEY
  ).toString();

  let cipherPhoto = CryptoJS.AES.encrypt(
    res.data.data.photo,
    process.env.REACT_APP_SECRET_KEY
  ).toString();

  localStorage.setItem("isLogged", res.data.success);
  localStorage.setItem("photo", cipherPhoto);
  localStorage.setItem("number", cipherId);
};

export const retriveDetails = () => {
  let val = localStorage.getItem("number");
  let pic = localStorage.getItem("photo");

  try {
    let id = CryptoJS.AES.decrypt(
      val,
      process.env.REACT_APP_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    let photo = CryptoJS.AES.decrypt(
      pic,
      process.env.REACT_APP_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    let result = {
      id: id,
      photo: photo,
    };

    return result;
  } catch (err) {
    return null;
  }
};
