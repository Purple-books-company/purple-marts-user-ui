import { useState } from "react";
import Form from "react-bootstrap/Form";
import { LOGIN_URL } from "../../../../config";
import { ApiPostService } from "../../../../services/ApiServices";
import { Button, Links } from "../../../../styles/widgets/widgets";

const RegisterForm = ({ setLoginForm, setShowModal }) => {
  let initial = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initial);

  const [cPass, setCPass] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    if (cPass !== form.password) alert("Passphrase mismatch");
    if (form.email !== "" && form.password !== "") {
      e.preventDefault();
      if (ApiPostService(LOGIN_URL, form)) setShowModal(false);
    } else {
      alert("Fill form values..");
    }
  };

  return (
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

      <Button type="submit" style={{ width: "100%" }} onClick={handleRegister}>
        Register
      </Button>
      <Links onClick={() => setLoginForm(true)}>Back to Login</Links>
    </Form>
  );
};

export default RegisterForm;
