import { useState } from "react";
import PopError from "./PopError";
import Form from "react-bootstrap/Form";
import { ApiPostService } from "../../../../services/api/api-services";
import { Button, Links } from "../../../../styles/widgets/widgets";

const LoginForm = ({ setShowModal, setLoginForm }) => {
  let initial = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initial);
  const [btnText, setBtnText] = useState("Login");
  const [linkText, setLinkText] = useState("Forgot Password");
  const [placeHolder, setPlaceholder] = useState("Password");
  // Confirm Password
  const [cPass, setCPass] = useState("");
  const [color, setColor] = useState("danger");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLink = () => {
    if (btnText === "Login") {
      setBtnText("Update Password");
      setLinkText("Back to Login");
      setPlaceholder("New Password");
    } else if (btnText === "Update Password") {
      setError("");
      setForm(initial);
      setCPass("");
      setBtnText("Login");
      setPlaceholder("Password");
      setLinkText("Forgot Password");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (btnText === "Login") handleLogin();
    else handleForgotPass();
  };

  const handleLogin = async () => {
    if (form.email !== "" && form.password !== "") {
      let res = await ApiPostService(process.env.REACT_APP_LOGIN_URL, form);

      if (res.success) {
        setShowModal(false);
        window.location.href = "/";
      } else setError(res.description);
    } else setError("Missing Fields..");
  };

  const handleForgotPass = async () => {
    console.log(process.env.REACT_APP_FORGOT_PASSWORD);
    if (form.email !== "" && form.password !== "" && cPass !== "") {
      let res = await ApiPostService(
        process.env.REACT_APP_FORGOT_PASSWORD,
        form
      );
      console.log(res);
      if (res) {
        setColor("success");
      }
      setError(res.description);
    } else setError("Missing Fields..");
  };

  return (
    <Form style={{ width: "100%" }}>
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
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
          placeholder={placeHolder}
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </Form.Group>
      {btnText === "Update Password" && (
        <Form.Group className="mb-3 mt-4" controlId="ConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm New Password"
            name="password"
            value={cPass}
            onChange={(e) => setCPass(e.target.value)}
          />
        </Form.Group>
      )}
      <PopError error={error} setError={setError} color={color} />
      <center>
        <Button
          type="submit"
          style={{ width: "100%", marginBottom: "3px" }}
          onClick={handleClick}
        >
          {btnText}
        </Button>
      </center>
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <Links onClick={handleLink}>{linkText}</Links>
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
    </Form>
  );
};

export default LoginForm;
