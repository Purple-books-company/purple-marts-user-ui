import { useState } from "react";
import Form from "react-bootstrap/Form";
import OtpInput from "react-otp-input";
import Countdown from "react-countdown";
import PopError from "./PopError";
import { ApiPostService } from "../../../../services/api/api-services";
import { Button, Links } from "../../../../styles/widgets/widgets";
import { DarkShade } from "../../../../styles/themes/color-theme";

const RegisterForm = ({ setLoginForm, setShowModal }) => {
  let initial = {
    name: "",
    email: "",
    password: "",
    photo:
      "https://purple.ai/wp-content/uploads/2021/03/Guest-WiFi-WiFi-analytics-product-page-user-line.png",
    token: 0,
  };

  const [form, setForm] = useState(initial);
  const [timer, setTimer] = useState(0);

  const [cPass, setCPass] = useState("");
  const [error, setError] = useState("");
  const [originalOtp, setOriginalOtp] = useState("");
  const [inputOtp, setInputOtp] = useState(0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();

    if (form.email !== "" && form.password !== "") {
      form.email = form.email.toLowerCase();
      if (cPass !== form.password) setError("Oh snap! Password mismatch!");
      else {
        const email = { email: form.email };
        let value = await ApiPostService(process.env.REACT_APP_OTP_URL, email);
        setTimer(Date.now() + 300000);
        setOriginalOtp(value.otp);
        // console.log("Response: ", value.otp);
      }
    } else setError("Missing fields!");
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    if (originalOtp === Number(inputOtp)) {
      const res = await ApiPostService(
        process.env.REACT_APP_REGISTER_URL,
        form
      );
      if (res.success) setShowModal(false);
      else {
        setError("User already exists.");
        setInputOtp("");
        setOriginalOtp("");
      }
    } else setError("Invalid otp!");
  };

  const handleTimer = (e) => {
    e.preventDefault();
    setError("Time's Up!!");
    setOriginalOtp("");
    setInputOtp("");
  };

  return (
    <>
      {!originalOtp ? (
        <Form style={{ width: "80%" }}>
          <Form.Control
            className="mb-3 mt-4"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            name="name"
          />
          <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-2" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              minLength="8"
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-2" controlId="confirmPassword">
            <Form.Control
              type="password"
              placeholder=" Confirm Password"
              value={cPass}
              onChange={(e) => setCPass(e.target.value)}
            />
          </Form.Group>

          <PopError error={error} setError={setError} color="danger" />
          <Button
            type="submit"
            style={{ width: "100%" }}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Links onClick={() => setLoginForm(true)}>Back to Login</Links>
        </Form>
      ) : (
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
              value={inputOtp}
              onChange={(otp) => {
                setInputOtp(otp);
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

          {!error ? (
            <>
              <h6 style={{ color: "red" }}>Your time ends in:</h6>
              <Countdown date={timer} onComplete={handleTimer} />
            </>
          ) : (
            <PopError error={error} setError={setError} color="danger" />
          )}
        </div>
      )}
    </>
  );
};

export default RegisterForm;
