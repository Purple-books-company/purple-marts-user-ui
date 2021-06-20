import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Block, Image } from "../../../../styles/pages/home-page";
import { Text } from "../../../../styles/widgets/widgets";
import { ApiGetService } from "../../../../services/api/api-services";

export default function Categories() {
  const [urls, setUrls] = useState([]);

  let slides;
  if (urls.length >= 5) slides = 5;
  else slides = urls.length % 5;

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const fetchCategories = async () => {
    let categories = [];
    categories = await ApiGetService(process.env.REACT_APP_CATEGORY_GET_URL);
    if (categories === null) categories = [];
    setUrls(categories);
  };

  useEffect(() => {
    fetchCategories();
  }, [urls]);

  return (
    <>
      <center>
        <Text primary>CATEGORIES TO BAG </Text>
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            <Slider {...settings}>
              {urls.map((url) => (
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
