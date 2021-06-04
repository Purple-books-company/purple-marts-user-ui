import Slider from "react-slick";
import { Block, Image, Text } from "../../../../styles/home-page";
import data from "../../../../api/TrendingProducts.json";
import { useEffect, useState } from "react";

export default function TrendingProducts() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setUrls(data);
  }, []);

  return (
    <>
      <center>
        <Text primary>TRENDING PRODUCTS ARE HERE</Text>
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="row">
            <Slider {...settings}>
              {urls.map((url) => (
                <Block primary className="col mt-2" key={url}>
                  <Image src={url.PrdtImg} alt="Phone cases" />
                </Block>
              ))}
            </Slider>
          </div>
        </div>
      </center>
    </>
  );
}
