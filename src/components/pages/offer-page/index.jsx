import { useState, useEffect } from "react";
import { Block } from "../../../styles/pages/home-page";
import { Text } from "../../../styles/widgets/widgets";
import { Container, Row, Col, Image } from "react-bootstrap";
import { LightShade } from "../../../styles/themes/color-theme";
import { fetchResult } from "../../../services/api/loaded-services";

const Offers = () => {
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      let home;
      home = await fetchResult("home");
      setSaleProducts(home["Flat Sale"]);
      console.log(home["Flat Sale"]);
    }
    getProducts();
  }, []);

  return (
    <>
      <Text primary className="my-3" align="center">
        PURPLE MART'S SALE
      </Text>
      <Container className="my-3">
        <Row>
          {saleProducts.map((item) => (
            <Col
              primary="true"
              className="my-3"
              lg="3"
              md="6"
              xs="6"
              key={item.id}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title={item.name}
            >
              <Image
                className="mb-3"
                src={item.image}
                alt="Category"
                style={{ height: "200px" }}
              />
              <Row className="mx-1">
                <Text
                  primary="true"
                  size="70%"
                  case="capitalize"
                  className="p-1"
                  space="1"
                  color="#393939"
                  style={{
                    backgroundColor: "#f3e8f8",
                    width: "max-content",
                  }}
                >
                  SALE
                </Text>
                {/* <div>0</div> */}
              </Row>

              <Row className="mx-1">
                <Text
                  className="py-1 text-truncate"
                  case="capitalize"
                  color="#393939"
                  size="80%"
                  thickness="200"
                  space="1"
                >
                  {item.name}
                </Text>
              </Row>
              <Row className="mx-1">
                <Text
                  case="capitalize"
                  size="80%"
                  space="1"
                  color={LightShade}
                  className="py-0"
                >
                  Now : INR {item.offerPrice}
                </Text>
              </Row>
              <Row className="mx-1">
                <Text
                  case="capitalize"
                  size="80%"
                  space="1"
                  thickness="200"
                  color="#737373"
                  className="me-1 py-0"
                  style={{
                    textDecoration: "line-through",
                    float: "right",
                  }}
                >
                  INR {item.originalPrice}
                </Text>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Offers;
