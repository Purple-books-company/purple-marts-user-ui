import Slider from "react-slick";
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
import { Text } from "../../../../styles/widgets/widgets";
import { Container, Row } from "react-bootstrap";
import { Block, Image } from "../../../../styles/pages/home-page";

let slides;

function Sliders({ data, text }) {
  let history = useHistory();
  const [settings, setSettings] = useState(null);

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

  function handleClick(dataType, category, id) {
    if (dataType === "SubCategory")
      history.push("/category/" + category + "/" + id);
    else if (dataType == "Product") history.push("/offers/");
  }

  return (
    <>
      <center>
        <Text primary className="my-4" align="center">
          {text}
        </Text>
        <Container fluid style={{ marginTop: "10px", marginBottom: "2%" }}>
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
                    alt="Image"
                    onClick={() =>
                      handleClick(url.dataType, url.category, url.id)
                    }
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
                          backgroundColor: "#f3e8f8",
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
                      color="#393939"
                      size={url.offerPrice ? "80%" : "90%"}
                      align={!url.offerPrice && "center"}
                      thickness={url.offerPrice && "200"}
                      space="1"
                      onClick={() =>
                        handleClick(url.dataType, url.category, url.id)
                      }
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
                            float: "right",
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
          </div>
        </Container>
        <br />
        <br />
      </center>
    </>
  );
}

export default Sliders;
