import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Offers = () => {
  let initial = [
    "all",
    "none",
    "all",
    "all",
    "none",
    "all",
    "all",
    "none",
    "all",
    "all",
    "none",
    "all",
    "all",
    "none",
    "all",
  ];
  const [val, setVal] = useState(initial);
  return (
    <Containerstyle={{ marginTop: "10%", marginBottom: "10%" }}>
      <Row>
        {val.map((item, index) => (
          <Col
            lg="4"
            md="auto"
            key={index}
            style={{ backgroundColor: "black", color: "white" }}
          >
            {item}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
