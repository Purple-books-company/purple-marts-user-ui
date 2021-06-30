import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchResult } from "../../../../services/api/loaded-services";
import { Block, Image } from "../../../../styles/pages/home-page";
import { Text } from "../../../../styles/widgets/widgets";

function Categories() {
  const [urls, setUrls] = useState([]);
  const [settings, setSettings] = useState(null);

  const fetchCategories = async () => {
    let slides;
    let categories = [];
    categories = await fetchResult("categories");
    if (categories === null) categories = [];
    setUrls(categories);

    if (categories.length >= 5) slides = 5;
    else slides = categories.length % 5;

    setSettings({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slides,
      slidesToScroll: 1,
      swipeToSlide: true,
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <center>
        <Text primary>CATEGORIES TO BAG</Text>
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            <Slider {...settings}>
              {urls.length > 0 &&
                urls.map((url) => (
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

export default React.memo(Categories);