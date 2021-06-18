import { Alert } from "react-bootstrap";
import { RiCloseFill } from "react-icons/ri";
const PopError = ({error, setError}) => (
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

export default PopError;
