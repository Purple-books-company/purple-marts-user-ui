import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Loading from "../../../utils/loader";
import { Link, useParams } from "react-router-dom";
import { TiMediaPlayOutline } from "react-icons/ti";
import { Container, Row } from "react-bootstrap";
import { Text } from "../../../../styles/widgets/widgets";
import { fetchResult } from "../../../../services/api/loaded-services";
import { ApiPostService } from "../../../../services/api/api-services";
import { CardImg } from "../../../../styles/pages/home-page";
import { Column } from "../../../../styles/pages/offer-page";

const Layout = () => {
  let history = useHistory();
  let { index } = useParams();

  const [saleProducts, setSaleProducts] = useState(null);

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
    setSaleProducts({ ...saleProducts, values: getData });
  }

  useEffect(() => {
    async function getProducts() {
      let home;
      home = await fetchResult("home");
      setSaleProducts(home.offers[index]);
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
          <Container className="mt-5">
            <Row>
              {saleProducts.values.map((item) => (
                <Column
                  primary="true"
                  lg="2"
                  md="3"
                  xs="6"
                  key={item.id}
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title={item.name}
                >
                  <CardImg
                    imgheight="230px"
                    className="mb-3"
                    src={item.image}
                    alt="Category"
                    width="100%"
                    onClick={() => history.push(`/products/${item.id}`)}
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
                </Column>
              ))}
            </Row>
            {saleProducts.values.length % 10 === 0 && (
              <center>
                <Text
                  cursor="true"
                  case="capitalize"
                  space="0px"
                  thickness="500"
                  size="100%"
                  color="#282c3f"
                  onClick={fetchMore}
                  style={{ width: "max-content" }}
                  className="mb-5 p-1"
                >
                  <TiMediaPlayOutline size="22" className="mb-1" /> Next..
                </Text>
              </center>
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
