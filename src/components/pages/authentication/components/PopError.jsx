import { Alert } from "react-bootstrap";
import { RiCloseFill } from "react-icons/ri";
const PopError = ({ error, setError, color }) => (
  <span>
    {error && (
      <Alert variant={color}>
        {error}
        <RiCloseFill
          style={{ float: "right", marginTop: "5px" }}
          onClick={() => setError("")}
        />
      </Alert>
    )}
  </span>
);

export default PopError;
