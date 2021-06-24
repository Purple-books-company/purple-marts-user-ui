import { Alert } from "react-bootstrap";
import { RiCloseFill } from "react-icons/ri";
const PopError = ({ error, setError, color, setColor }) => (
  <span>
    {error && (
      <Alert variant={color} style={{ marginTop: "2%", width: "100%" }}>
        {error}
        <RiCloseFill
          style={{ float: "right", marginTop: "5px" }}
          onClick={() => {
            setError("");
            setColor("danger");
          }}
        />
      </Alert>
    )}
  </span>
);

export default PopError;
