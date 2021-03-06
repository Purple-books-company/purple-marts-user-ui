import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router";
import { Button } from "../../../../styles/widgets/widgets";
import { ApiPostService } from "../../../../services/api/api-services";
import { getCustomer } from "../../../../services/api/loaded-services";

function LoginForm({
  setShowModal,
  setError,
  update,
  setEmail,
  check,
  setColor,
  setVerify,
  setUpdate,
}) {
  let history = useHistory();
  let initial = {
    email: "",
    password: "",
    cpass: "",
  };

  const [form, setForm] = useState(initial);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "email" && !update) setEmail(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if (update) {
      handleForgotPass();
      return;
    }
    let formDetail = {
      email: form.email,
      password: form.password,
    };
    if (form.email !== "" && form.password !== "") {
      let res = await ApiPostService(
        process.env.REACT_APP_LOGIN_URL,
        formDetail
      );

      if (res.success) {
        getCustomer();
        setShowModal(false);
        history.push("/");
      } else setError(res.description);
    } else {
      setError("Missing Fields..");
      setForm(initial);
    }
  };

  const handleForgotPass = async () => {
    if (form.password !== "" && form.cpass !== "") {
      if (form.password === form.cpass) {
        let res = await ApiPostService(process.env.REACT_APP_FORGOT_PASSWORD, {
          email: check(),
          password: form.password,
        });
        // console.log(res);
        if (res.success) {
          setColor("success");
          setForm(initial);
          setVerify(false);
          setUpdate(false);
          setEmail("");
        }

        setError(res.description || res.err.email || res.err.password);
      }
    } else setError("Missing field");
  };

  return (
    <>
      <Form style={{ width: "100%" }}>
        {!update && (
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>
        )}
        <Form.Group className="mb-3 mt-4 " controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>
        {update && (
          <Form.Group className="mb-3 mt-4 " controlId="ConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm New Password"
              name="cpass"
              value={form.cpass}
              onChange={handleChange}
            />
          </Form.Group>
        )}

        <Button
          type="submit"
          style={{ width: "100%", marginBottom: "3px" }}
          onClick={handleLogin}
        >
          {update ? "Update Password" : "Login"}
        </Button>
      </Form>
    </>
  );
}

export default React.memo(LoginForm);
