var CryptoJS = require("crypto-js");

const storeDetails = (res) => {
  console.log(res.data.data.customerId);

  let cipherId = CryptoJS.AES.encrypt(
    JSON.stringify(res.data.data.customerId),
    process.env.REACT_APP_SECRET_KEY
  ).toString();

  let cipherPhoto = CryptoJS.AES.encrypt(
    JSON.stringify(res.data.data.photo),
    process.env.REACT_APP_SECRET_KEY
  ).toString();

  localStorage.setItem("isLogged", res.data.success);
  localStorage.setItem("photo", cipherPhoto);
  localStorage.setItem("number", cipherId);
};

export default storeDetails;
