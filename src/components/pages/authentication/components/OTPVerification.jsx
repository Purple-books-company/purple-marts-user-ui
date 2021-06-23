import OtpInput from "react-otp-input";
import { DarkShade } from "../../../../styles/themes/color-theme";
import { Button } from "../../../../styles/widgets/widgets";
import { ApiPostService } from "../../../../services/api/api-services";
import { useEffect, useState } from "react";

let originalOtp;
const OTPVerification = ({ email, setError, func }) => {
  useEffect(async () => {
    let value = await ApiPostService(process.env.REACT_APP_OTP_URL, { email });
    originalOtp = value.otp;
    console.log(originalOtp);
  }, []);

  const [Otp, setOtp] = useState("");
  const verifyOtp = (e) => {
    e.preventDefault();

    if (originalOtp === Number(Otp)) {
      func();
    } else setError("Invalid otp!");
  };

  return (
    <div>
      <h6
        style={{
          textAlign: "center",
          color: `${DarkShade}`,
          margin: "20px",
        }}
      >
        Please enter OTP to verify your Mail Id
      </h6>
      <div className="d-flex justify-content-center">
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
            margin: "5px",
          }}
          focusStyle={{ color: `${DarkShade}` }}
        />
      </div>

      <Button type="submit" onClick={verifyOtp} className="my-4 w-100 ">
        Verify OTP
      </Button>
    </div>
  );
};

export default OTPVerification;
