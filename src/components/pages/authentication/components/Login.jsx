import { useState } from "react";
import PopError from "./PopError";
import Countdown from "react-countdown";
import OTPVerification from "./OTPVerification";
import LoginForm from "./LoginForm";
import { Links } from "../../../../styles/widgets/widgets";

function Login({ setShowModal, setLoginForm }) {
  const [email, setEmail] = useState("");
  // Update Password form
  const [update, setUpdate] = useState(false);
  // Verification form state
  const [verify, setVerify] = useState(false);
  const [error, setError] = useState("");
  // Error Alert color
  const [color, setColor] = useState("danger");

  const handleVerification = () => {
    if (update) {
      setUpdate(false);
      setLoginForm(true);
      return;
    }

    if (email === "") setError("Enter email to send otp");
    else {
      setError("");
      setVerify(true);
    }
  };
  // Switched to Update form
  const handleVerified = () => {
    setUpdate(true);
    setVerify(false);
  };
  const returnEmail = () => {
    return email;
  };

  return (
    <>
      {!verify ? (
        <LoginForm
          setShowModal={setShowModal}
          setEmail={setEmail}
          update={update}
          setError={setError}
          check={returnEmail}
          setColor={setColor}
          setVerify={setVerify}
          setUpdate={setUpdate}
        />
      ) : (
        <>
          <OTPVerification
            email={email}
            setError={setError}
            func={handleVerified}
          />
        </>
      )}
      <PopError
        error={error}
        setError={setError}
        color={color}
        setColor={setColor}
      />
      <div className="container">
        <div className="row" >
          <div className="col">
            <Links onClick={handleVerification}>
              {update ? "Back to Login" : "Forgot Password"}
            </Links>
          </div>
          <div className="col">
            <Links
              onClick={() => setLoginForm(false)}
              style={{ float: "right" }}
            >
              Create Account
            </Links>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
