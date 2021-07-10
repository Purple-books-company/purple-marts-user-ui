import Slider from "react-slick";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Text } from "../../../../styles/widgets/widgets";
import { Container, Row } from "react-bootstrap";
import { Block, Image } from "../../../../styles/pages/home-page";

let slides;

function Sliders({ data, text, slug, offer }) {
  let history = useHistory();
  const [id, setId] = useState(null);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    setId(slug);
  }, [slug]);

  useEffect(() => {
    if (data.length >= 6) slides = 6;
    else slides = data.length % 6;

    setSettings({
      dots: true,
      // infinite: true,
      speed: 500,
      slidesToShow: slides,
      slidesToScroll: 5,
      swipeToSlide: true,
    });
  }, [data.length]);

  function handleClick(item) {
    history.push("/products/" + item.id);
  }

  return (
    <>
      <center>
        <Text primary className="my-2" align="center">
          {text}
        </Text>
        <Container fluid className="my-2">
          <div className="row">
            <Slider {...settings}>
              {data.map((url) => (
                <Block
                  primary
                  className="col mt-2"
                  key={url}
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title={url.name}
                >
                  <Image
                    className="mb-3"
                    src={url.image}
                    style={{ backgroundColor: "#d6c3e0" }}
                    alt="Image"
                    onClick={() => {
                      handleClick(url);
                    }}
                  />
                  {url.offerPrice && (
                    <Row className="mx-1">
                      <Text
                        primary
                        size="70%"
                        case="capitalize"
                        className="p-1"
                        space="1"
                        color="#393939"
                        style={{
                          backgroundColor: "#f5e6fc",
                          width: "max-content",
                        }}
                      >
                        Popular
                      </Text>
                    </Row>
                  )}

                  <Row className="mx-1">
                    <Text
                      className="text-truncate py-1"
                      case="capitalize"
                      color="#535766"
                      size={url.offerPrice ? "80%" : "90%"}
                      align={!url.offerPrice && "center"}
                      thickness={url.offerPrice && "200"}
                      space="1"
                      onClick={() => {
                        handleClick(url);
                      }}
                    >
                      {url.name}
                    </Text>
                  </Row>
                  {url.offerPrice && (
                    <>
                      <Row className="mx-1">
                        <Text
                          case="capitalize"
                          size="80%"
                          space="1"
                          color="#956daa"
                          className="py-0"
                        >
                          Now : INR {url.offerPrice}
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
                          }}
                        >
                          INR {url.originalPrice}
                        </Text>
                      </Row>
                    </>
                  )}
                </Block>
              ))}
            </Slider>

            {offer && (
              <Text
                space="1px"
                size="90%"
                weight="500"
                case="capitalize"
                className="pt-4 pe-3 h-25"
              >
                <Link
                  to={`/offers/${id}`}
                  className="px-3 py-1"
                  style={{
                    backgroundColor: "#f3e8f8",
                    color: "#28242b",
                    fontWeight: "500",
                    width: "max-content",
                    float: "right",
                    textDecoration: "none",
                  }}
                >
                  Show More
                </Link>
              </Text>
            )}
          </div>
        </Container>
        <br />
        <br />
      </center>
    </>
  );
}

export default Sliders;
