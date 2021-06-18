import { useState } from "react";
import PopError from "./PopError";
import Form from "react-bootstrap/Form";
import { ApiPostService } from "../../../../services/api/api-services";
import { Button } from "../../../../styles/widgets/widgets";
const LoginForm = ({ setShowModal }) => {
  let initial = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    if (form.email !== "" && form.password !== "") {
      e.preventDefault();
      let res = await ApiPostService(process.env.REACT_APP_LOGIN_URL, form);

      if (res.success) {
        setShowModal(false);
        window.location.href = "/";
      } else setError(res.description);
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
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </Form.Group>
      <PopError error={error} setError={setError} />
      <center>
        <Button type="submit" style={{ width: "100%" }} onClick={handleLogin}>
          Login
        </Button>
      </center>
    </Form>
  );
};

export default LoginForm;
