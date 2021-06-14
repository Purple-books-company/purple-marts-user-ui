import { GoogleLogout } from "react-google-login";

const LogOut = () => {
  const clearStorage = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("photo");
    localStorage.removeItem("number");

    alert("Logged out");
    window.location = "/";
  };
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={clearStorage}
    ></GoogleLogout>
  );
};

export default LogOut;
