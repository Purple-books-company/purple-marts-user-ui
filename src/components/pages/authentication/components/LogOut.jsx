import { GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "../../../../config";

const LogOut = () => {
  const clearStorage = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("photo");
    localStorage.removeItem("email");

    alert("Logged out");
    window.location = "/";
  };
  return (
    <GoogleLogout
      clientId={CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={clearStorage}
    ></GoogleLogout>
  );
};

export default LogOut;
