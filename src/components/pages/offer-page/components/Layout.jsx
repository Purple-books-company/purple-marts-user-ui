import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../utils/loader";
import { Text, HoverImage } from "../../../../styles/widgets/widgets";
import { Container, Row, Col } from "react-bootstrap";
import { fetchResult } from "../../../../services/api/loaded-services";
import { ApiPostService } from "../../../../services/api/api-services";

const Layout = () => {
  let history = useHistory();
  let { name } = useParams();

  const [saleProducts, setSaleProducts] = useState(null);

  function handleClick(productId) {
    history.push("products/" + productId);
  }

  async function fetchMore() {
    let page = saleProducts.values.length / 10 + 1;
    let payload = {
      offerName: saleProducts.name,
      page: page,
    };
    let newProducts = await ApiPostService(
      process.env.REACT_APP_OFFER_GET,
      payload
    );
    let getData = JSON.parse(JSON.stringify(saleProducts.values)).concat(
      newProducts.data
    );
    console.log(getData);
    setSaleProducts({ ...saleProducts, values: getData });
  }

  useEffect(() => {
    async function getProducts() {
      let home;
      home = await fetchResult("home");
      setSaleProducts(home.offers[name]);
    }
    getProducts();
  }, []);

  return (
    <>
      {saleProducts ? (
        <>
          <Text align="center" style={{ backgroundColor: "#edeaee" }}>
            Purple Mart's {saleProducts.name}
          </Text>
          <Container fluid className="mt-5 mx-5">
            <Row>
              {saleProducts.values.map((item) => (
                <Col
                  primary="true"
                  className="my-5 mx-2"
                  lg="2"
                  md="3"
                  xs="4"
                  key={item.id}
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title={item.name}
                >
                  <HoverImage
                    grid="true"
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
            {saleProducts.values.length % 10 === 0 && (
              <div onClick={fetchMore}>Show more</div>
            )}
          </Container>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Layout;
