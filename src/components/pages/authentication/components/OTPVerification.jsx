import OtpInput from "react-otp-input";
import Countdown from "react-countdown";
import { DarkShade } from "../../../../styles/themes/color-theme";
import { Button } from "../../../../styles/widgets/widgets";
import { ApiPostService } from "../../../../services/api/api-services";
import { useState } from "react";

let originalOtp;

export const fetchOtp = async (mail) => {
  console.log(mail);
  let value = await ApiPostService(process.env.REACT_APP_OTP_URL, {
    email: mail,
  });
  originalOtp = value.otp;
  console.log(originalOtp);
};
// setTimer(Date.now() + 300000);

const OTPVerification = ({ setError, func }) => {
  const [Otp, setOtp] = useState("");
  const timer = Date.now() + 5000;

  const verifyOtp = (e) => {
    e.preventDefault();

    if (originalOtp === Number(Otp)) {
      func();
    } else setError("Invalid otp!");
  };

  const handleTimer = () => {
    // e.preventDefault();
    setError("Time's Up!!");
  };

  return (
    <div>
      <h6
        style={{
          textAlign: "center",
          color: `${DarkShade}`,
          marginBottom: "10%",
          marginTop: "10%",
        }}
      >
        Please enter OTP to verify your Mail Id
      </h6>
      <center>
        <div className="m-3">
          <OtpInput
            value={Otp}
            onChange={(otp) => {
              setOtp(otp);
            }}
            numInputs={6}
            separator={<span>-</span>}
            isInputNum={true}
            isInputSecure={true}
            inputStyle={{
              width: "2em",
              color: `${DarkShade}`,
            }}
            focusStyle={{ color: `${DarkShade}` }}
            style={{ marginRight: "2%" }}
          />
        </div>
        <Button type="submit" onClick={verifyOtp} className="my-4 w-100 ">
          Verify OTP
        </Button>
      </center>
      <h6 style={{ color: "red" }}>Your time ends in:</h6>
      <Countdown date={timer} onComplete={handleTimer} />
    </div>
  );
};

export default OTPVerification;
