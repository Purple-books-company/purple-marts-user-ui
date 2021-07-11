import { getCustomer} from "../../../../services/api/loaded-services";

// import { GoogleLogout } from "react-google-login";
const clearStorage = () => {
  localStorage.removeItem("isLogged");
  localStorage.removeItem("photo");
  localStorage.removeItem("number");
  getCustomer();
  
};

// const LogOut = () => {
//   return (
//     // <GoogleLogout
//     //   clientId={process.env.REACT_APP_CLIENT_ID}
//     //   buttonText="Logout"
//     //   onLogoutSuccess={clearStorage}
//     // ></GoogleLogout>
//     <button onClick={clearStorage}>Logout</button>
//   );
// };

export default clearStorage;
