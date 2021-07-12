import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Carousel from "./components/Carousel";
import Sliders from "./components/Sliders";
import Loading from "../../utils/loader";
import { useHistory } from "react-router-dom";
import { HoverImage } from "../../../styles/widgets/widgets";
import { getApi, fetchResult } from "../../../services/api/loaded-services";
import CardGroup from "./components/Cards";

function ImageBanners({ banner }) {
  let history = useHistory();

  function handleClick(item) {
    if (item.dataType === "Product") history.push("/products/" + item.id);
    else if (item.dataType === "Category")
      history.push("/category/" + item.slug);
    else if (item.dataType === "SubCategory")
      history.push("/category/" + item.category + "/" + item.slug);
  }
  return (
    <HoverImage
      src={banner.image}
      width="100%"
      alt={banner.id}
      className="my-4"
      fluid
      onClick={() => handleClick(banner)}
    />
  );
}

export default function Home({ login }) {
  const [home, setHome] = useState(null);
  let logged = localStorage.getItem("isLogged");

  useEffect(() => {
    getData();
  }, [login]);

  const getData = async () => {
    await getApi();
    let values;
    values = await fetchResult("home");
    setHome({ ...values });
    // console.log(values);
  };

  return (
    <>
      {!home ? (
        <Loading />
      ) : (
        <>
          {home.carousel && <Carousel data={home.carousel} />}
          {home.subCategory && (
            <Grid data={home.subCategory} text="Shop best selling items" />
          )}
          {home.banner[1] && <ImageBanners banner={home.banner[1]} />}
          {home["Test Sale"] && (
            <Sliders data={home["Test Sale"]} text="Mega sale" />
          )}

          {home.offers &&
            home.offers.map((sale, index) => (
              <Sliders
                data={sale.values}
                text={sale.name}
                slug={index}
                key={sale.name}
                offer="true"
              />
            ))}

          {home.recentView && (
            <Sliders data={home.recentView} text="EXPLORE TRENDING ITEMS" />
          )}
          {home.banner[2] && <ImageBanners banner={home.banner[2]} />}
          {logged && home["topRating"] && (
            <Sliders data={home["topRating"]} text="Top rated products" />
          )}

          {home.category && <CardGroup data={home.category} />}
          {home.banner[0] && <ImageBanners banner={home.banner[0]} />}
        </>
      )}
    </>
  );
}
