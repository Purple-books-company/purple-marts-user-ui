import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../../../utils/loader";
import { Text, HoverImage } from "../../../../styles/widgets/widgets";
import { Container, Row, Col } from "react-bootstrap";
import { fetchResult } from "../../../../services/api/loaded-services";

const Layout = () => {
  let history = useHistory();
  const [saleProducts, setSaleProducts] = useState([]);

  function handleClick(productId) {
    history.push("products/" + productId);
  }

  useEffect(() => {
    async function getProducts() {
      let home;
      home = await fetchResult("home");
      setSaleProducts(home["Flat Sale"]);
      // console.log(home["Flat Sale"]);
    }
    getProducts();
  }, []);

  return (
    <>
      {saleProducts ? (
        <>
          <Container className="mt-5">
            <Row style={{ backgroundColor: "#edeaee" }} className="my-5">
              <Text align="center">Purple Mart's Grand Sale</Text>
            </Row>
            <Row>
              {saleProducts.map((item) => (
                <Col
                  primary="true"
                  className="my-3"
                  lg="2"
                  md="3"
                  xs="4"
                  key={item.id}
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title={item.name}
                >
                  <HoverImage
                    grid
                    className="mb-3"
                    src={item.image}
                    alt="Category"
                    width="100%"
                    onClick={() => handleClick(item.id)}
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
                  </Row>

                  <Row className="mx-1">
                    <Link
                      to={`/products/${item.id}`}
                      className="text-decoration-none"
                    >
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
                    </Link>
                  </Row>
                  <Row className="mx-1">
                    <Text
                      case="capitalize"
                      size="80%"
                      space="1"
                      color="#956daa"
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Layout;
