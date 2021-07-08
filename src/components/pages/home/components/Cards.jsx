import { Container, Row, Col, Card } from "react-bootstrap";
import { Text } from "../../../../styles/widgets/widgets";
import { Cards, CardImg } from "../../../../styles/pages/home-page";
import { useHistory } from "react-router";

const CardGroup = ({ data }) => {
  let history = useHistory();

  return (
    <Container fluid className="my-3">
      <Text primary align="center">
        Categories to bag
      </Text>
      <Row>
        {data.map((item) => (
          <Col lg="2" xs="6" md="6" sm="6" key={item.id}>
            <Cards
              className="border-0 my-3"
              onClick={() => history.push("/category/" + item.name)}
            >
              <CardImg
                variant="top"
                className="text-uppercase"
                style={{ backgroundColor: "#d6c3e0" }}
                src={item.image}
              />
              <Card.Body>
                <Card.Link
                  onClick={() => history.push("/category")}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Card.Link>
                <Text
                  case="capitalize"
                  size="90%"
                  space="1px"
                  style={{ padding: "0" }}
                >
                  {item.description}
                </Text>
              </Card.Body>
            </Cards>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGroup;
