import Layout from "./components/Layout";
import { Text } from "../../../styles/widgets/widgets";
import { Container, Row, Col } from "react-bootstrap";

const Offers = () => {
  return (
    <>
      <Container className="my-5">
        <Row style={{ backgroundColor: "#edeaee" }}>
          <Text align="center">Purple Mart's Grand Sale</Text>
        </Row>
      </Container>
      <Layout />
    </>
  );
};

export default Offers;
