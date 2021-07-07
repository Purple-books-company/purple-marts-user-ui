import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Grid from "./components/Grid";
import Carousel from "./components/Carousel";
import Sliders from "./components/Sliders";
import Loading from "../../utils/loader";
import { useHistory } from "react-router-dom";
import { getApi, fetchResult } from "../../../services/api/loaded-services";
import CardGroup from "./components/Cards";

function ImageBanners({ banner }) {
  let history = useHistory();
  return (
    <Image
      src={banner.image}
      width="100%"
      alt={banner.id}
      className="my-4"
      fluid
      onClick={() => history.push("/offers")}
    />
  );
}

export default function Home() {
  const [home, setHome] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getApi();
    let values;
    values = await fetchResult("home");
    setHome({ ...values });
    console.log(values);
  };

  return (
    <>
      {home ? (
        <div>
          {home.carousel && <Carousel data={home.carousel} />}
          {home.subCategory.length > 0 && (
            <Grid data={home.subCategory} text="Shop best selling items" />
          )}

          {/* {home.banner_2 && <ImageBanners banner={home.banner_2} />} */}
          {home["Test Sale"].length > 0 && (
            <Sliders data={home["Test Sale"]} text="Mega sale" />
          )}

          {home.banner_0 && <ImageBanners banner={home.banner_0} />}
          {home.subCategory.length > 0 && (
            <Sliders data={home.subCategory} text="EXPLORE TRENDING ITEMS" />
          )}

          {home.category && <CardGroup data={home.category} />}
          {home.banner_1 && <ImageBanners banner={home.banner_1} />}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
