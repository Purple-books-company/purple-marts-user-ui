import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import OtpInput from "react-otp-input";
import Countdown from "react-countdown";
import { RiCloseFill } from "react-icons/ri";
import { REGISTER_URL, OTP_URL } from "../../../../config";
import { ApiPostService } from "../../../../services/api/api-services";
import { Button, Links } from "../../../../styles/widgets/widgets";
import { DarkShade } from "../../../../styles/themes/color-theme";

const RegisterForm = ({ setLoginForm, setShowModal }) => {
  let initial = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initial);

  const [cPass, setCPass] = useState("");
  const [error, setError] = useState("");
  const [originalOtp, setoriginalOtp] = useState("");
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
        let value = await ApiPostService(OTP_URL, email);
        setoriginalOtp(value.otp);
        // console.log("Response: ", value.otp);
      }
    } else setError("Missing fields!");
  };

  const verifyOtp = async () => {
    if (originalOtp === Number(inputOtp)) {
      const res = await ApiPostService(REGISTER_URL, form);
      if (res) setShowModal(false);
      else {
        setError("Registration failed!");
      }
    } else setError("Invalid otp!");
  };

  const handleTimer = () => {
    setError("Time's Up!!");
    setoriginalOtp("");
    setInputOtp("");
  };

  const PopError = () => (
    <span>
      {error && (
        <Alert variant="danger">
          {error}
          <RiCloseFill
            style={{ float: "right", fontSize: "auto", marginTop: "5px" }}
            onClick={() => setError("")}
          />
        </Alert>
      )}
    </span>
  );

  return (
    <>
      {!originalOtp ? (
        <Form style={{ width: "80%" }}>
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-4" controlId="confirmPassword">
            <Form.Control
              type="password"
              placeholder=" Confirm Password"
              value={cPass}
              onChange={(e) => setCPass(e.target.value)}
            />
          </Form.Group>

          <PopError />
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
              <Countdown date={Date.now() + 300000} onComplete={handleTimer} />
            </>
          ) : (
            <PopError />
          )}
        </div>
      )}
    </>
  );
};

export default RegisterForm;
