import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Block, Image } from "../../../../styles/pages/home-page";
import { Text } from "../../../../styles/widgets/widgets";
let slides;

function Sliders({ data, text }) {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    if (data.length >= 5) slides = 5;
    else slides = data.length % 5;

    setSettings({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slides,
      slidesToScroll: 1,
      swipeToSlide: true,
    });
  }, [data.length]);

  return (
    <>
      <center>
        <Text primary>{text}</Text>
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            <Slider {...settings}>
              {data.length > 0 &&
                data.map((url) => (
                  <Block
                    primary
                    className="col mt-2"
                    key={url}
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title={url.name}
                  >
                    <Image src={url.image} alt="Category" />
                  </Block>
                ))}
            </Slider>
          </div>
        </div>
        <br />
        <br />
      </center>
    </>
  );
}

export default Sliders;
