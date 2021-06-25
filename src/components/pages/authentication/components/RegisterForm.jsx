import { useState } from "react";
import Form from "react-bootstrap/Form";
import PopError from "./PopError";
import OTPVerification, { fetchOtp } from "./OTPVerification";
import { ApiPostService } from "../../../../services/api/api-services";
import { Button, Links } from "../../../../styles/widgets/widgets";

const RegisterForm = ({ setLoginForm, setShowModal }) => {
  let initial = {
    name: "",
    email: "",
    password: "",
    cpass: "",
  };

  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");
  const [verify, setVerify] = useState(false);
  const [color, setColor] = useState("danger");

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
      if (form.cpass !== form.password) setError("Oh snap! Password mismatch!");
      else {
        fetchOtp(form.email);
        setVerify(true);
      }
    } else setError("Missing fields!");
  };

  const register = async () => {
    let formInfo = {
      name: form.name,
      email: form.email,
      password: form.password,
      photo:
        "https://purple.ai/wp-content/uploads/2021/03/Guest-WiFi-WiFi-analytics-product-page-user-line.png",
      token: 0,
    };
  
    const res = await ApiPostService(
      process.env.REACT_APP_REGISTER_URL,
      formInfo
    );
    if (res.success) setShowModal(false);
    else {
      setError("User already exists.");
      setForm(initial);
    }
  };

  return (
    <>
      {!verify ? (
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
              name="cpass"
              placeholder=" Confirm Password"
              value={form.cpass}
              onChange={handleChange}
              minLength="8"
            />
          </Form.Group>

          <PopError
            error={error}
            setError={setError}
            color={color}
            setColor={setColor}
          />

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
        <>
          <OTPVerification
            setError={setError}
            setVerify={setVerify}
            func={register}
          />

          {error && (
            // (<>
            //   <h6 style={{ color: "red" }}>Your time ends in:</h6>
            //   <Countdown date={timer} onComplete={handleTimer} />
            // </>) : (

            <PopError
              error={error}
              setError={setError}
              color="danger"
              setColor={setColor}
            />
          )}
        </>
      )}
    </>
  );
};

export default RegisterForm;
